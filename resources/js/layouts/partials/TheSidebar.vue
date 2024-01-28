<template>
  <div class="w-[250px] bg-primary p-5 min-h-screen text-white">
    <div class="text-xl font-bold py-1.5 px-3">
      <h1 class="">Stok-Takip</h1>
    </div>
    <hr class="mx-3 my-2" />
    <ul class="font-semibold">
      <li v-for="menuItem in menu" :key="menuItem.name" class="py-1.5 px-3">
        <router-link :to="menuItem.route">
          {{ menuItem.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
const menu = [
  {
    name: "Dashboard",
    icon: "fas fa-tachometer-alt",
    route: "/",
  },
  {
    name: "Settings",
    icon: "fas fa-users",
    route: "/settings",
  },
]
</script>

<style></style>
