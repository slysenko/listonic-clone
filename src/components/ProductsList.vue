<script setup lang="ts">
import { ref, computed } from "vue";
import ChooseProductButton from "./ChooseProductButton.vue";
import { useMockServer } from "../server_mock/db_operations.ts";

const emit = defineEmits(["updateProduct"]);

const mockServer = useMockServer();
mockServer.loadProducts();
const productsList = mockServer.currentProducts;

const title = ref("Add products");
const searchText = ref("");

const filteredProductsList = computed(() => {
  if (searchText.value.length < 1) {
    return productsList;
  }
  return productsList.filter((item) => item.toLowerCase().includes(searchText.value.toLowerCase()));
});

function onProductUpdate(event) {
  emit("updateProduct", event);
}
</script>

<template>
  <div class="card p-4 w-75 h-auto">
    <div class="card-body">
      <div class="modal-header">
        <h5 class="card-title">{{ title }}</h5>
        <button type="button" class="btn-close" aria-label="Close"></button>
      </div>
    </div>
    <input
      class="form-control mb-3"
      id="searchProduct"
      placeholder="milk, for example"
      v-model="searchText"
    />
    <div v-if="filteredProductsList.length">
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
    </div>
    <div v-else>
      <h5>Suggested</h5>
      <ChooseProductButton :name="searchText" @update="onProductUpdate" />
    </div>
  </div>
</template>
