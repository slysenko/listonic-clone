import products from "../server_mock/products.json";
import { ref } from "vue";
import { defineStore } from "pinia";

export const useMockServer = defineStore("server", () => {
  const currentProducts = ref<string[]>([]);

  function loadProducts() {
    currentProducts.value = Array.from(new Set(currentProducts.value).union(new Set(products)));
  }

  function updateProducts(product: string) {
    currentProducts.value = Array.from(new Set(currentProducts.value).add(product));
  }

  return {
    currentProducts,
    loadProducts,
    updateProducts,
  };
});
