<script setup lang="ts">
import { ref } from "vue";
import ShoppingListItemCard from "../components/ShoppingListItemCard.vue";
import CreateNewListModal from "../components/CreateNewListModal.vue";
import { useMockServer } from "../server_mock/db_operations.ts";

const title = ref("Your Shopping Lists");
const mockServer = useMockServer();

const shoppingLists = mockServer.fetchAllShoppingLists();

function createNewList(event) {
  mockServer.createNewShoppingList(event.name);
}
</script>

<template>
  <div class="container d-flex flex-column m-3 justify-content-center align-items-center">
    <div class="w-50">
      <div class="d-flex flex-lg-row flex-column justify-content-between mb-3 mt-4">
        <h2 class="text-center">{{ title }}</h2>
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Create new list
        </button>
      </div>
      <div v-for="list in shoppingLists" :key="list.name" class="d-flex flex-column w-auto">
        <ShoppingListItemCard :data="list" />
      </div>
    </div>
  </div>
  <CreateNewListModal @onCreateNewList="createNewList" />
</template>
