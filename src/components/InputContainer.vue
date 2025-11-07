<script setup lang="ts">
import CustomButton from './CustomButton.vue';
</script>

<template>
  <div class="flex h-20 w-full gap-4 items-center justify-between">
    <input
      type="text"
      class="rounded-xl shadow-sm h-12 w-full p-3 bg-white/70"
      placeholder="할 일을 입력해주세요"
    />
    <CustomButton text="등록" size="md" variant="secondary" />
  </div>
</template>
