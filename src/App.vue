<script setup lang="ts">
import { Toaster } from 'vue-sonner';
import 'vue-sonner/style.css';
</script>

<template>
  <Toaster
    position="top-right"
    :toast-options="{
      classes: { error: '!bg-[#F15B5D] !border-[#F15B5D] !text-white' },
    }"
  />
  <router-view />
</template>
