<template>
  <DataTable :value="customers" paginator :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]" tableStyle="min-width: 50rem">
    <Column field="name" header="Name" style="width: 25%"></Column>
    <Column field="country.name" header="Country" style="width: 25%"></Column>
    <Column field="company" header="Company" style="width: 25%"></Column>
    <Column field="representative.name" header="Representative" style="width: 25%"></Column>
  </DataTable>
</template>

<script setup>
import DataTable from "primevue/datatable"
import Column from "primevue/column"
import ColumnGroup from "primevue/columngroup" // optional
import Row from "primevue/row"

const customers = [
  {
    name: "Alexandre",
    country: { name: "Brazil", code: "BR" },
    company: "PrimeTek",
    representative: { name: "Alex", image: "alex.jpg" },
  },
  {
    name: "Mia",
    country: { name: "Canada", code: "CA" },
    company: "KFC",
    representative: { name: "Mia", image: "mia.jpg" },
  },
  {
    name: "John",
    country: { name: "USA", code: "US" },
    company: "PrimeTek",
    representative: { name: "Alex", image: "alex.jpg" },
  },
  {
    name: "Alexandra",
    country: { name: "UK", code: "UK" },
    company: "Amazon",
    representative: { name: "John", image: "john.jpg" },
  },
  {
    name: "Andrey",
    country: { name: "Russia", code: "RU" },
    company: "Yandex",
    representative: { name: "Alex", image: "alex.jpg" },
  },
  {
    name: "Angelina",
    country: { name: "Argentina", code: "AR" },
    company: "Tesla",
    representative: { name: "Mia", image: "mia.jpg" },
  },
]

const columns = [
  { field: "code", header: "Code" },
  { field: "name", header: "Name" },
  { field: "category", header: "Category" },
  { field: "quantity", header: "Quantity" },
]
</script>

<style></style>
