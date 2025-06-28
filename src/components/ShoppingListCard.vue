<script setup lang="ts">
import { ref } from "vue";
import { useProductsStore } from "../stores/products.ts";
import ProductsListItem from "./ProductsListItem.vue";
import { useRoute } from "vue-router";

const route = useRoute();
const productsStore = useProductsStore();
const currentListIdFromRoute = ref(route.params.id);
const shoppingList = productsStore.getShoppingListById(currentListIdFromRoute.value);
const selectedProductsByListId = productsStore.getSelectedProductsByList(shoppingList.id);
</script>

<template>
  <div class="card h-auto w-auto my-2">
    <div class="card-body p-3">
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
      <template v-if="!selectedProductsByListId">
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
        <div v-for="product in selectedProductsByListId" :key="product.name">
          <ProductsListItem :product="product" />
        </div>
        <button class="btn btn-primary" @click="$emit('onOpenProductsList')">Add products</button>
      </template>
    </div>
  </div>
</template>
