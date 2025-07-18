<script setup lang="ts">
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import AvailableProduct from "./AvailableProduct.vue";
import { useProductsStore } from "../stores/products.ts";

const emit = defineEmits(["updateProduct", "close"]);
const route = useRoute();
const productsStore = useProductsStore();

const productsList = computed(() => productsStore.availableProducts);
const currentListIdFromRoute = ref(route.params.id);
const shoppingList = productsStore.getShoppingListById(currentListIdFromRoute.value);
const title = ref("Add products");
const searchText = ref("");

const filteredProductsList = computed(() => {
  if (searchText.value.length < 1) {
    return productsList.value;
  }
  return productsList.value.filter((item) =>
    item.toLowerCase().includes(searchText.value.toLowerCase()),
  );
});

const isProductsListShown = computed(() => {
  return filteredProductsList.value.length;
});

function onAddItem(productName: string) {
  productsStore.addSelectedProduct(shoppingList.id, productName);
}

function onDeleteItem(productName: string) {
  productsStore.deleteSelectedProduct(shoppingList.id, productName);
}

function getNewProductUiState() {
  return {
    counter: 0,
    isSelected: false,
    showAddButton: true,
    showDeleteButton: false,
    showCounter: false,
    addButtonIcon: "primary",
    deleteButtonIcon: "decrement",
  };
}

function onClose() {
  emit("close");
}
</script>

<template>
  <div class="card p-4 w-75 m-2 h-auto">
    <div class="card-body">
      <div class="modal-header">
        <h5 class="card-title">{{ title }}</h5>
        <button type="button" class="btn-close" aria-label="Close" @click="onClose"></button>
      </div>
    </div>
    <input
      class="form-control mb-3"
      id="searchProduct"
      placeholder="milk, for example"
      v-model="searchText"
    />
    <template v-if="isProductsListShown">
      <ul class="nav nav-tabs nav-justified" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="popular-tab"
            data-bs-toggle="tab"
            data-bs-target="#popular-tab-pane"
            type="button"
            role="tab"
            aria-controls="popular-tab-pane"
            aria-selected="true"
          >
            Popular
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="recent-tab"
            data-bs-toggle="tab"
            data-bs-target="#recent-tab-pane"
            type="button"
            role="tab"
            aria-controls="recent-tab-pane"
            aria-selected="false"
          >
            Recent
          </button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="popular-tab-pane"
          role="tabpanel"
          aria-labelledby="popular-tab"
          tabindex="0"
        >
          <template v-for="product in filteredProductsList" :key="product">
            <AvailableProduct
              :productName="product"
              :uiState="productsStore.getProductUIState(currentListIdFromRoute, product)"
              @addItem="onAddItem"
              @deleteItem="onDeleteItem"
            />
          </template>
        </div>
        <div
          class="tab-pane fade"
          id="recent-tab-pane"
          role="tabpanel"
          aria-labelledby="recent-tab"
          tabindex="0"
        >
          sdjkekjekjksk. sdkjsdnvksdnvk
        </div>
      </div>
    </template>
    <template v-else>
      <h5>Suggested</h5>
      <AvailableProduct
        :productName="searchText"
        :uiState="getNewProductUiState"
        @addItem="onAddItem"
        @deleteItem="onDeleteItem"
      />
    </template>
  </div>
</template>
