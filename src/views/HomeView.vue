<script setup lang="ts">
import { ref } from "vue";
import ShoppingListItemCard from "../components/ShoppingListItemCard.vue";
import CreateNewListModal from "../components/CreateNewListModal.vue";

const title = ref("Your Shopping Lists");
const lists = ref([]);
function createNewList(event) {
  lists.value.push(event);
}
</script>

<template>
  <main class="container-xl">
    <div>
      {{ title }}
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Create new list
      </button>
    </div>
    <CreateNewListModal @onCreateNewList="createNewList" />
    <div v-for="list in lists" :key="list.name">
      <ShoppingListItemCard :data="list" />
    </div>
  </main>
</template>
