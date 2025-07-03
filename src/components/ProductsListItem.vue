<script setup lang="ts">
import { ref, watch } from "vue";

const props = defineProps({
  product: {
    required: true,
  },
});

const emit = defineEmits(["update"]);

const isChecked = ref(props.product.selected);

watch(isChecked, () => {
  emit("update", props.product, isChecked.value);
});
</script>

<template>
  <div class="card w-100 p-2 flex-row align-items-center">
    <div class="d-flex m-2 me-3">
      <input
        class="form-check-input m-0"
        type="checkbox"
        id="checkboxNoLabel"
        v-model="isChecked"
        aria-label="..."
      />
    </div>
    <div class="d-flex w-100 justify-content-between">
      <div class="d-flex flex-row justify-content-between w-100">
        <div class="">
          <span>{{ props.product.name }}</span>
        </div>
        <div class="me-2">{{ props.product.counter }}</div>
      </div>
      <div class="d-flex align-self-end ms-2">{{ props.product.categoryId }}</div>
    </div>
  </div>
</template>

<style lang="css"></style>
