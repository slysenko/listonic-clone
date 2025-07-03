<script setup lang="ts">
const props = defineProps(["productName", "uiState"]);

const emit = defineEmits(["addItem", "deleteItem"]);

function addOne() {
  emit("addItem", props.productName);
}

function deleteOne() {
  emit("deleteItem", props.productName);
}
</script>

<template>
  <div class="card w-100 d-flex">
    <div class="d-flex flex-row justify-content-between product-card">
      <div
        role="button"
        class="d-flex flex-row justify-content-start align-items-center w-100 ps-1 pe-2 product-title"
        @click="addOne"
      >
        <div
          class="d-flex flex-row justify-content-center align-content-center align-items-center product-plus"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-plus-circle"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
            <path
              d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"
            />
          </svg>
        </div>
        <div class="d-flex w-auto ms-1 text-truncate">
          {{ props.productName }}
        </div>
      </div>
      <div class="d-flex flex-row justify-content-end align-items-center gap-1 w-auto me-2">
        <p class="text-truncate p-0 m-0" v-if="props.uiState.showCounter">
          {{ props.uiState.counter }}
        </p>
        <div
          role="button"
          class="d-flex flex-row justify-content-center align-content-center align-items-center text-danger"
          v-if="props.uiState.showDeleteButton"
          @click="deleteOne"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-dash"
            viewBox="1 1 16 16"
          >
            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.product-card:hover {
  background-color: rgb(231, 231, 231);
}

.product-plus {
  color: grey;
}

.product-plus:hover {
  color: rgb(70, 70, 70);
}
</style>
