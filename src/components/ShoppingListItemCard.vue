<script setup lang="ts">
import { type ShoppingList } from "../server_mock/db_operations.ts";
const props = defineProps(["data"]);
</script>

<template>
  <router-link :to="{ name: 'ShoppingListView', params: { id: props.data.id } }">
    <div class="card mb-3">
      <div class="card-body">
        <h5 class="card-title">{{ props.data.name }}</h5>
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
      </div>
    </div>
  </router-link>
</template>
