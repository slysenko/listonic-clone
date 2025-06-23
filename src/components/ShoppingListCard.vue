<script setup lang="ts">
import ProductsListItem from "./ProductsListItem.vue";

const props = defineProps(["title", "selectedProducts"]);
</script>

<template>
  <div class="card h-auto w-auto my-2">
    <div class="card-body p-3">
      <h5 class="card-title">{{ props.title }}</h5>
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
      <template v-if="!props.selectedProducts.length">
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
        <div v-for="product in props.selectedProducts" :key="product.name">
          <ProductsListItem :product="product" />
        </div>
      </template>
    </div>
  </div>
</template>
