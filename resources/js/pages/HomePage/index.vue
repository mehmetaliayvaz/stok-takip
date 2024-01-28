<template>
  <div class="page-wrapper">
    <div class="container">
      <div class="flex gap-5 mb-10">
        <add-supplier />
        <add-stock />
      </div>
      <products-table />
    </div>
  </div>
</template>

<script setup>
import AddSupplier from "./partials/AddSupplier.vue"
import AddStock from "./partials/AddStock.vue"
import ProductsTable from "./partials/ProductsTable.vue"
</script>

<style></style>
