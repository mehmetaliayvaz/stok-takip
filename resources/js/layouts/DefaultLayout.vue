<template>
  <div class="bg-gray-50 flex">
    <the-sidebar />
    <router-view />
  </div>
</template>

<script setup>
import TheSidebar from "./partials/TheSidebar.vue"
</script>
