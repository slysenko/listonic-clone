<script setup lang="ts"></script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Listonic Clone</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <!-- <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" :to="{ name: 'home' }">User</router-link>
          </li> -->
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'home' }">Shopping List</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'trash' }">Trash Bin</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
