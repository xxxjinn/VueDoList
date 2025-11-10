<script setup lang="ts">
import { useToDoStore } from '@/store/store';
import { ref } from 'vue';
import CustomButton from './CustomButton.vue';

const inputText = ref('');

const todoStore = useToDoStore();

const addToDoItem = () => {
  todoStore.addToDoItem({ id: Date.now(), toDoText: inputText.value });
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
