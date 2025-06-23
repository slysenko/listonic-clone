<script setup lang="ts">
const props = defineProps(["product"]);
</script>

<template>
  <div class="w-auto">
    <button type="button" class="btn btn-outline-secondary">
      <div class="d-flex flex-row justify-content-between m-0">
        <div class="m-2">
          <input
            class="form-check-input"
            type="checkbox"
            id="checkboxNoLabel"
            value=""
            aria-label="..."
          />
        </div>
        <div class="d-flex flex-row m-2">
          <div class="me-5">
            <span>{{ props.product.name }}</span>
          </div>
          <div class="me-2">{{ props.product.counter }}</div>
        </div>
        <div class="d-flex align-self-end m-2">{{ props.product.categoryId }}</div>
      </div>
    </button>
  </div>
</template>

<style lang="css"></style>
