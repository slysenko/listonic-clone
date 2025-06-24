import products from "../server_mock/products.json";
import { ref } from "vue";
import { defineStore } from "pinia";

export interface ShoppingList {
  active: boolean;
  id: number;
  deleted: boolean;
  itemsCount: number;
  name: string;
}

let id = 1;

export const useMockServer = defineStore("server", () => {
  const currentProducts = ref<string[]>([]);
  const shoppingLists = ref<Partial<Record<number, ShoppingList>>>({});

  function loadProducts() {
    currentProducts.value = Array.from(new Set(currentProducts.value).union(new Set(products)));
  }

  function updateProducts(product: string) {
    currentProducts.value = Array.from(new Set(currentProducts.value).add(product));
  }

  function createNewShoppingList(name: string) {
    const listId = id++;
    shoppingLists.value[listId] = {
      id: listId,
      name: name,
      itemsCount: 0,
      deleted: false,
      active: true,
    };
  }

  function fetchAllShoppingLists() {
    return shoppingLists;
  }

  function fetchShoppingListById(id: number) {
    return shoppingLists.value[id];
  }

  function fetchAllCurrentProducts() {
    return currentProducts;
  }

  return {
    fetchAllCurrentProducts,
    fetchShoppingListById,
    fetchAllShoppingLists,
    createNewShoppingList,
    loadProducts,
    updateProducts,
  };
});
