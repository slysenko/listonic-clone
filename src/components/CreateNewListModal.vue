<script setup lang="ts">
import { ref } from "vue";

const emit = defineEmits(["submit", "onCreateNewList"]);

const newListName = ref("");

function createNewList() {
  emit("onCreateNewList", {
    name: newListName.value,
  });
  reset();
}

function reset() {
  newListName.value = "";
}
</script>

<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Create New List</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              aria-label="new list name"
              aria-describedby="inputGroup-sizing-default"
              placeholder="New List"
              v-model="newListName"
            />
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
          <button
            type="button"
            class="btn btn-primary"
            data-bs-dismiss="modal"
            @click="createNewList"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
