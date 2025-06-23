<script setup lang="ts">
import MainNavbar from "./components/MainNavbar.vue";
</script>

<template>
  <main>
    <MainNavbar />
    <div class="container">
      <router-view></router-view>
    </div>
  </main>
</template>

<style scoped></style>
