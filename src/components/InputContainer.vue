<script setup lang="ts">
import { ref } from 'vue';
import CustomButton from './CustomButton.vue';

const inputText = ref('');

const addToDoItem = () => {
  console.log(inputText.value); //이후 zustand에 저장하는 코드로 바꿔야 함
  inputText.value = '';
};
</script>

<template>
  <form @submit.prevent="addToDoItem" class="flex h-20 w-full gap-4 items-center justify-between">
    <input
      class="rounded-xl shadow-sm h-12 w-full p-3 bg-white/70"
      placeholder="할 일을 입력해주세요"
      v-model="inputText"
    />
    <CustomButton text="등록" size="md" variant="secondary" type="submit" />
  </form>
</template>
