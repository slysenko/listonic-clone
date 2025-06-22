<script setup lang="ts">
import { ref } from "vue";
import ShoppingListCard from "../components/ShoppingListCard.vue";
import ProductsList from "../components/ProductsList.vue";

const isProductsListShown = ref(false);
const selectedProducts = ref([]);

function openProductsList() {
  isProductsListShown.value = true;
}

function onProductUpdate(event) {
  selectedProducts.value.push(event);
}

const title = ref("TITLE");
</script>

<template>
  <div class="container-md p-3">
    <div class="row">
      <div class="col-6">
        <ShoppingListCard
          :title="title"
          :selectedProducts="selectedProducts"
          @onOpenProductsList="openProductsList"
        />
      </div>
      <div class="col-6">
        <ProductsList @updateProduct="onProductUpdate" />
      </div>
    </div>
  </div>
</template>
