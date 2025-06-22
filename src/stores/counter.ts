import { ref } from "vue";
import { defineStore } from "pinia";
import type { ProductItem } from "@/types";

export const useSelectedProductsStore = defineStore("selectedProducts", () => {
  const selectedProducts = ref<Partial<Record<string, ProductItem>>>({});

  function updateSelectedProducts(item: ProductItem) {
    if (item.counter < 1) {
      delete selectedProducts.value[item.name];
    } else {
      console.log(selectedProducts.value[item.name]);
      // selectedProducts.value[item.name]?.counter = item.counter;
    }
  }

  return { selectedProducts, updateSelectedProducts };
});
