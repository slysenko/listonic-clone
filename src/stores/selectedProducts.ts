import { ref, computed } from "vue";
import { defineStore } from "pinia";
import type { ProductItem } from "@/types";
import { useMockServer } from "../server_mock/db_operations.ts";

export const useSelectedProductsStore = defineStore("selectedProducts", () => {
  const mockServer = useMockServer();

  const selectedProducts = ref<Partial<Record<number, Record<string, ProductItem>>>>({});

  function touchSelectedProducts(listId: number) {
    if (!selectedProducts.value[listId]) {
      selectedProducts.value = { ...selectedProducts.value, [listId]: {} };
    }
  }

  function initProductModel(name: string, counter: number) {
    return {
      name,
      categoryId: 0,
      counter,
      unit: "",
      price: null,
      description: "",
      selected: true,
    };
  }

  function updateSelectedProductsByListId({
    listId,
    name,
    counter,
  }: {
    listId: number;
    name: string;
    counter: number;
  }) {
    touchSelectedProducts(listId);
    const products = selectedProducts.value[listId];
    mockServer.updateProducts(name);
    if (!products[name]) {
      const product = initProductModel(name, counter);
      products[name] = product;
    } else {
      const product = products[name];
      product.counter = counter;
    }
  }

  return {
    selectedProducts,
    updateSelectedProductsByListId,
  };
});
