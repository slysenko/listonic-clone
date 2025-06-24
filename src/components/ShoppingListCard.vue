<script setup lang="ts">
import { computed } from "vue";
import { useMockServer } from "../server_mock/db_operations.ts";
import { useSelectedProductsStore } from "../stores/selectedProducts.ts";
import ProductsListItem from "./ProductsListItem.vue";
import { useRoute } from "vue-router";

const route = useRoute();

const mockServer = useMockServer();
const shoppingListId = route.params.id;
const shoppingList = mockServer.fetchShoppingListById(shoppingListId);

const selectedProductsStore = useSelectedProductsStore();
const selectedProductsById = computed(() => selectedProductsStore.selectedProducts[shoppingListId]);
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
      <template v-if="!selectedProductsById">
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
        <div v-for="product in selectedProductsById" :key="product.name">
          <ProductsListItem :product="product" />
        </div>
      </template>
    </div>
  </div>
</template>
