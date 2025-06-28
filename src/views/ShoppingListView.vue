<script setup lang="ts">
import { ref } from "vue";
import ShoppingListCard from "../components/ShoppingListCard.vue";
import ProductsList from "../components/ProductsList.vue";

const isProductsListShown = ref(false);

function openProductsList() {
  isProductsListShown.value = true;
}

function onClose() {
  isProductsListShown.value = false;
}
</script>

<template>
  <div class="container-md p-3">
    <div class="row">
      <div class="col-6">
        <ShoppingListCard @onOpenProductsList="openProductsList" />
      </div>
      <div class="col-6" v-if="isProductsListShown">
        <ProductsList @close="onClose" />
      </div>
    </div>
  </div>
</template>
