<template>
  <div>
    <Button label="Stok Ekle" @click="visible = true" />
    <Dialog v-model:visible="visible" modal header="Stok Ekle">
      <div class="space-y-5">
        <div class="flex items-center gap-4">
          <label for="product-name" class="font-semibold w-40">Ürün Adı:</label>
          <InputText id="product-name" class="w-96" autocomplete="off" />
        </div>
        <div class="flex items-center gap-4">
          <label for="company" class="font-semibold w-40">Tedarikçi Firma:</label>
          <Dropdown
            id="company"
            v-model="selectedSupplier"
            :options="supplier"
            optionLabel="name"
            placeholder="Tedarikçi Seç"
            class="w-96"
          />
        </div>
        <div class="flex items-center gap-4">
          <label for="barcode" class="font-semibold w-40">Barkod:</label>
          <InputNumber id="barcode" :useGrouping="false" class="w-96" autocomplete="off" />
        </div>
        <div class="flex items-center gap-4">
          <label for="unit" class="font-semibold w-40">Birim:</label>
          <InputText id="unit" class="w-96" autocomplete="off" />
        </div>
        <div class="flex items-center gap-4">
          <label for="stock" class="font-semibold w-40">Stok:</label>
          <InputNumber id="stock" class="w-96" autocomplete="off" />
        </div>
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from "vue"
import Dialog from "primevue/dialog"
import Button from "primevue/button"
import InputText from "primevue/inputtext"
import InputNumber from "primevue/inputnumber"
import Textarea from "primevue/textarea"
import Dropdown from "primevue/dropdown"

const visible = ref(false)
const selectedSupplier = ref(null)

const supplier = ref([
  { name: "New York", code: "NY" },
  { name: "Rome", code: "RM" },
  { name: "London", code: "LDN" },
  { name: "Istanbul", code: "IST" },
  { name: "Paris", code: "PRS" },
])
</script>

<style></style>
