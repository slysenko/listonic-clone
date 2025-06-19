<script setup lang="ts">
import { ref } from "vue";

const title = ref("TITLE");
</script>

<template>
  <div class="card text-center">
    <div class="card-header">{{ title }}</div>
    <div class="card-body">
      <h5 class="card-title">Special title treatment</h5>
      <p class="card-text">
        With supporting text below as a natural lead-in to additional content.
      </p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    <div class="card-footer text-body-secondary">2 days ago</div>
  </div>
</template>
