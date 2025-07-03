<script setup lang="ts">
import { ref, computed } from "vue";
import { useProductsStore } from "../stores/products.ts";
import ProductsListItem from "./ProductsListItem.vue";
import { useRoute } from "vue-router";

const props = defineProps(["isProductsListShown"]);

const route = useRoute();
const productsStore = useProductsStore();
const currentListIdFromRoute = ref(route.params.id);
const shoppingList = productsStore.getShoppingListById(currentListIdFromRoute.value);
const selectedProductsByListId = productsStore.getSelectedProductsByList(shoppingList.id);

const activeProducts = computed(() => {
  return Object.values(selectedProductsByListId).filter(
    (product: ProductItem) => product.counter > 0 && !product.selected,
  );
});

const inactiveProducts = computed(() => {
  return Object.values(selectedProductsByListId).filter(
    (product: ProductItem) => product.counter > 0 && product.selected,
  );
});

function toggleChecked(product, isChecked) {
  console.log(product, isChecked);
  product.selected = isChecked;
}
</script>

<template>
  <div class="d-flex flex-column justify-content-between align-items-center">
    <div class="d-fles flex-column justify-content-between align-items-center h-auto w-100 mb-5">
      <div class="card p-4 m-2 h-auto">
        <div class="mb-3">
          <h5 class="card-title">{{ shoppingList.name }}</h5>
          <div
            class="progress"
            role="progressbar"
            aria-valuenow="0"
            aria-valuemin="0"
            aria-valuemax="100"
            style="height: 5px"
          >
            <div class="progress-bar" style="width: 0%"></div>
          </div>
        </div>
        <div>
          <template v-if="!activeProducts">
            <div
              class="d-flex flex-column w-auto flex-grow-1 align-items-center justify-content-center text-center py-5"
            >
              <img src="/strawberry-svgrepo-com.svg" class="m-5" alt="empty-list" width="15%" />
              <div>
                <h4>What would you like to buy?</h4>
                <p>Start searching for products to add them to the list</p>
                <button class="btn btn-primary" @click="$emit('onOpenProductsList')">
                  Add products
                </button>
              </div>
            </div>
          </template>
          <template v-else>
            <div v-for="product in activeProducts" :key="product.name">
              <ProductsListItem :product="product" @update="toggleChecked" />
            </div>
          </template>
        </div>
      </div>
      <div class="p-4 m-2 h-auto">
        <div v-for="product in inactiveProducts" :key="product.name">
          <ProductsListItem :product="product" @update="toggleChecked" />
        </div>
      </div>
    </div>

    <div class="d-flex align-items-end sticky-bottom">
      <template v-if="activeProducts">
        <button
          class="btn btn-primary"
          v-if="!props.isProductsListShown"
          @click="$emit('onOpenProductsList')"
        >
          Add products
        </button>
      </template>
    </div>
  </div>
</template>
