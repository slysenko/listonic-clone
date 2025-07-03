import products from "../server_mock/products.json";
import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";

import type { ProductItem } from "@/types";

export interface ShoppingList {
  active: boolean;
  id: number;
  deleted: boolean;
  itemsCount: number;
  name: string;
}

export const useProductsStore = defineStore("products", () => {
  const id = ref(1);

  const availableProducts = ref<string[]>([]);

  const shoppingLists = reactive<Partial<Record<number, ShoppingList>>>({});

  const selectedProductsByShoppingList = reactive<
    Partial<Record<number, Record<string, ProductItem>>>
  >({});

  function loadAvailableProducts() {
    availableProducts.value = Array.from(new Set(availableProducts.value).union(new Set(products)));
  }

  function updateAvailableProducts(productName: string) {
    availableProducts.value = Array.from(new Set(availableProducts.value).add(productName));
  }

  const getShoppingListById = computed(() => {
    return (id: number) => {
      return shoppingLists[id];
    };
  });

  const getShoppingListByName = computed(() => {
    return (name: string) => {
      return Object.values(shoppingLists).find((list) => list?.name === name);
    };
  });

  const getSelectedProductsByList = computed(() => {
    return (listId: number) => {
      return selectedProductsByShoppingList[listId];
    };
  });

  const getProductUIState = computed(() => {
    return (listId: number, productName: string) => {
      const selectedListProducts = getSelectedProductsByList.value(listId)!;
      const selectedProduct = selectedListProducts[productName];
      const counter = selectedProduct?.counter || 0;
      const isSelected = counter > 0;
      const isPurchased = selectedProduct?.selected;

      return {
        counter,
        isSelected,
        showAddButton: true,
        showDeleteButton: isSelected,
        showCounter: counter > 1,
        addButtonIcon: isSelected ? "selected" : "primary",
        deleteButtonIcon: counter === 1 ? "remove" : "decrement",
        isPurchased,
      };
    };
  });

  function createProductModel(name: string): ProductItem {
    return {
      name,
      categoryId: 0,
      counter: 1,
      unit: "",
      price: null,
      description: "",
      selected: false,
    };
  }

  function initializeSelectedProductsByList(listId: number) {
    if (!selectedProductsByShoppingList[listId]) {
      selectedProductsByShoppingList[listId] = {};
    }
  }

  function createNewShoppingList(name: string) {
    const listId = id.value++;
    shoppingLists[listId] = {
      id: listId,
      name: name,
      itemsCount: 0,
      deleted: false,
      active: true,
    };
    initializeSelectedProductsByList(listId);
  }

  function deleteShoppingList(listId: number) {
    const shoppingList = shoppingLists[listId];
    if (shoppingList) {
      if (shoppingList.active) {
        shoppingList.active = false;
      } else {
        shoppingList.deleted = true;
      }
    }
  }

  function addSelectedProduct(listId: number, productName: string) {
    const selectedListProducts = getSelectedProductsByList.value(listId)!;
    const selectedProduct = selectedListProducts[productName];

    updateAvailableProducts(productName);
    if (!selectedProduct) {
      const product = createProductModel(productName);
      selectedListProducts[productName] = product;
    } else {
      selectedProduct.counter++;
    }
  }

  function deleteSelectedProduct(listId: number, productName: string) {
    const selectedListProducts = getSelectedProductsByList.value(listId)!;
    const selectedProduct = selectedListProducts[productName];
    if (selectedProduct.counter > 0) {
      selectedProduct.counter--;
    }
  }

  function toggleSelectedProduct(listId: number, productName: string) {
    const selectedListProducts = getSelectedProductsByList.value(listId)!;
    const selectedProduct = selectedListProducts[productName];
    selectedProduct.selected = !selectedProduct.selected;
  }

  loadAvailableProducts();

  return {
    availableProducts,
    shoppingLists,
    selectedProductsByShoppingList,
    getShoppingListById,
    getShoppingListByName,
    getSelectedProductsByList,
    getProductUIState,
    createNewShoppingList,
    deleteShoppingList,
    addSelectedProduct,
    deleteSelectedProduct,
    toggleSelectedProduct,
  };
});
