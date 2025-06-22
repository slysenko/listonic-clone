<script setup lang="ts">
import { ref, watch } from "vue";
const props = defineProps(["name"]);

const emit = defineEmits(["update"]);

const counter = ref(0);

function addOne() {
  counter.value++;
}

function deleteOne() {
  counter.value--;
}

watch(counter, () => {
  emit("update", { name: props.name, counter });
});
</script>

<template>
  <div class="card choose-product-card">
    <div class="d-flex flex-row">
      <button
        type="button"
        class="btn btn-outline-secondary me-3 choose-product-card-plus"
        @click="addOne"
      >
        {{ props.name }}
        <span class="badge text-bg-secondary" v-if="counter > 0">{{ counter }}</span>
      </button>
      <button
        type="button"
        class="btn btn-outline-secondary choose-product-card-minus"
        v-if="counter > 0"
        @click="deleteOne"
      >
        -
      </button>
    </div>
  </div>
</template>

<style lang="css" scoped>
.choose-product-card {
  width: 14rem;
}

.choose-product-card-plus {
  width: 10rem;
}

.choose-product-card-minus {
  width: 3rem;
}
</style>
