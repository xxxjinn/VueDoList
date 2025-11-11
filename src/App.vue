<script setup lang="ts">
import { Toaster } from 'vue-sonner';
import 'vue-sonner/style.css';
</script>

<template>
  <Toaster
    position="top-right"
    :toast-options="{
      classes: { error: '!bg-error !border-error !text-white' },
    }"
  />
  <router-view />
</template>
