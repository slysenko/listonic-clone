<script setup lang="ts">
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import ChooseProductButton from "./ChooseProductButton.vue";
import { useMockServer } from "../server_mock/db_operations.ts";
import { useSelectedProductsStore } from "../stores/selectedProducts.ts";

const emit = defineEmits(["updateProduct", "close"]);
const route = useRoute();
const mockServer = useMockServer();

mockServer.loadProducts();
const productsList = mockServer.fetchAllCurrentProducts();

const selectedProductsStore = useSelectedProductsStore();

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

function onProductUpdate(event: { name: string; counter: number }) {
  selectedProductsStore.updateSelectedProductsByListId({
    listId: route.params.id,
    name: event.name,
    counter: event.counter,
  });
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
            <ChooseProductButton :name="product" @update="onProductUpdate" />
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
      <ChooseProductButton :name="searchText" @update="onProductUpdate" />
    </template>
  </div>
</template>
