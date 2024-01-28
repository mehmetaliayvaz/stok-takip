<template>
  <div>
    <Button label="Tedarikçi Ekle" @click="visible = true" />
    <Dialog v-model:visible="visible" modal header="Tedarikçi Ekle">
      <div class="space-y-5">
        <div class="flex items-center gap-4">
          <label for="name" class="font-semibold w-40">Firma Adı:</label>
          <InputText id="name" class="w-96" autocomplete="off" />
        </div>
        <div class="flex items-center gap-4">
          <label for="address" class="font-semibold w-40">Adres:</label>
          <InputText id="address" class="w-96" autocomplete="off" />
        </div>
        <div class="flex items-center gap-4">
          <label for="phone" class="font-semibold w-40">Telefon:</label>
          <InputText id="phone" class="w-96" autocomplete="off" />
        </div>
        <div class="flex items-center gap-4">
          <label for="mail" class="font-semibold w-40">Mail:</label>
          <InputText id="mail" class="w-96" autocomplete="off" />
        </div>
        <div class="flex items-center gap-4">
          <label for="authorized" class="font-semibold w-40">Yetkili:</label>
          <InputText id="authorized" class="w-96" autocomplete="off" />
        </div>
        <div class="flex items-center gap-4">
          <label for="note" class="font-semibold w-40">Notlar:</label>
          <Textarea id="note" class="w-96" autocomplete="off" />
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
import Textarea from "primevue/textarea"
import Dropdown from "primevue/dropdown"

const visible = ref(false)
</script>

<style></style>
