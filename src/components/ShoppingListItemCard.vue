<script setup lang="ts">
const props = defineProps(["data"]);
</script>

<template>
  <RouterLink>
    <div class="card w-75 mb-3">
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
  </RouterLink>
</template>
