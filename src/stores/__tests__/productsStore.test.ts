import { describe, it, expect, beforeEach } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { useProductsStore } from "../../stores/products.ts";

describe("Products Store", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("initializes with correct default state", () => {
    const store = useProductsStore();
    expect(store.availableProducts.length).toBe(16);
  });

  it("create new shopping list", () => {
    const store = useProductsStore();
    store.createNewShoppingList("test");
    expect(store.shoppingLists).toEqual({
      "1": { id: 1, name: "test", itemsCount: 0, deleted: false, active: true },
    });
  });

  it("create 2 shopping lists", () => {
    const store = useProductsStore();
    store.createNewShoppingList("test1");
    store.createNewShoppingList("test2");
    expect(store.shoppingLists).toStrictEqual({
      "1": { id: 1, name: "test1", itemsCount: 0, deleted: false, active: true },
      "2": { id: 2, name: "test2", itemsCount: 0, deleted: false, active: true },
    });
  });

  it("send shopping list to trash", () => {
    const store = useProductsStore();
    store.createNewShoppingList("test1");
    const shoppingList = store.shoppingLists["1"]!;
    store.deleteShoppingList(shoppingList.id);
    expect(shoppingList.active).toBeFalsy();
    expect(shoppingList.deleted).toBeFalsy();
    store.deleteShoppingList(shoppingList.id);
    expect(shoppingList.deleted).toBeTruthy();
  });

  it("initialize products list on creating new shopping list", () => {
    const store = useProductsStore();
    store.createNewShoppingList("test1");
    expect(store.selectedProductsByShoppingList).toStrictEqual({ "1": {} });
  });

  it("get UI state for product that is not selected yet", () => {
    const store = useProductsStore();
    store.createNewShoppingList("test1");
    expect(store.getProductUIState(1, "test")).toEqual({
      counter: 0,
      isSelected: false,
      showAddButton: true,
      showDeleteButton: false,
      showCounter: false,
      addButtonIcon: "primary",
      deleteButtonIcon: "decrement",
    });
  });

  it("add product and get UI state", () => {
    const SHOPPING_LIST_NAME = "test1";
    const PRODUCT_NAME = "Apple";
    const store = useProductsStore();
    store.createNewShoppingList(SHOPPING_LIST_NAME);
    const shoppingList = store.getShoppingListByName(SHOPPING_LIST_NAME)!;
    expect(shoppingList.id).toBe(1);
    store.addSelectedProduct(shoppingList.id, PRODUCT_NAME);
    expect(store.getProductUIState(shoppingList.id, PRODUCT_NAME)).toEqual({
      counter: 1,
      isSelected: true,
      showAddButton: true,
      showDeleteButton: true,
      showCounter: false,
      addButtonIcon: "selected",
      deleteButtonIcon: "remove",
    });
  });

  it("add product several times and get UI state", () => {
    const SHOPPING_LIST_NAME = "test1";
    const PRODUCT_NAME = "Apple";
    const store = useProductsStore();
    store.createNewShoppingList(SHOPPING_LIST_NAME);
    const shoppingList = store.getShoppingListByName(SHOPPING_LIST_NAME)!;
    expect(shoppingList.id).toBe(1);
    store.addSelectedProduct(shoppingList.id, PRODUCT_NAME);
    store.addSelectedProduct(shoppingList.id, PRODUCT_NAME);
    store.addSelectedProduct(shoppingList.id, PRODUCT_NAME);
    expect(store.getProductUIState(shoppingList.id, PRODUCT_NAME)).toEqual({
      counter: 3,
      isSelected: true,
      showAddButton: true,
      showDeleteButton: true,
      showCounter: true,
      addButtonIcon: "selected",
      deleteButtonIcon: "decrement",
    });
  });

  it("add product one time, remove, and get UI state", () => {
    const SHOPPING_LIST_NAME = "test1";
    const PRODUCT_NAME = "Apple";
    const store = useProductsStore();
    store.createNewShoppingList(SHOPPING_LIST_NAME);
    const shoppingList = store.getShoppingListByName(SHOPPING_LIST_NAME)!;
    expect(shoppingList.id).toBe(1);
    store.addSelectedProduct(shoppingList.id, PRODUCT_NAME);
    store.deleteSelectedProduct(shoppingList.id, PRODUCT_NAME);
    expect(store.getProductUIState(shoppingList.id, PRODUCT_NAME)).toEqual({
      counter: 0,
      isSelected: false,
      showAddButton: true,
      showDeleteButton: false,
      showCounter: false,
      addButtonIcon: "primary",
      deleteButtonIcon: "decrement",
    });
  });

  it("add product two times, remove once, and get UI state", () => {
    const SHOPPING_LIST_NAME = "test1";
    const PRODUCT_NAME = "Apple";
    const store = useProductsStore();
    store.createNewShoppingList(SHOPPING_LIST_NAME);
    const shoppingList = store.getShoppingListByName(SHOPPING_LIST_NAME)!;
    expect(shoppingList.id).toBe(1);
    store.addSelectedProduct(shoppingList.id, PRODUCT_NAME);
    store.addSelectedProduct(shoppingList.id, PRODUCT_NAME);
    store.deleteSelectedProduct(shoppingList.id, PRODUCT_NAME);
    expect(store.getProductUIState(shoppingList.id, PRODUCT_NAME)).toEqual({
      counter: 1,
      isSelected: true,
      showAddButton: true,
      showDeleteButton: true,
      showCounter: false,
      addButtonIcon: "selected",
      deleteButtonIcon: "remove",
    });
  });

  it("add a product that does not yet exist", () => {
    const SHOPPING_LIST_NAME = "test1";
    const PRODUCT_NAME = "Totally New Product";
    const store = useProductsStore();
    store.createNewShoppingList(SHOPPING_LIST_NAME);
    const shoppingList = store.getShoppingListByName(SHOPPING_LIST_NAME)!;
    expect(shoppingList.id).toBe(1);
    expect(store.availableProducts).not.toContain(PRODUCT_NAME);
    store.addSelectedProduct(shoppingList.id, PRODUCT_NAME);
    expect(store.availableProducts.length).toBe(17);
    expect(store.availableProducts).toContain(PRODUCT_NAME);
  });
});
