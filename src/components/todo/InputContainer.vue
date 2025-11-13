<script setup lang="ts">
import CustomButton from '@/components/ui/CustomButton.vue';
import { toastIfEmpty } from '@/lib/utils';
import { useToDoStore } from '@/store/store';
import { ref } from 'vue';

const inputText = ref('');

const { addToDoItem } = useToDoStore();

const addToDo = () => {
  if (toastIfEmpty(inputText.value)) {
    return;
  }
  addToDoItem({
    id: Date.now(),
    toDoText: inputText.value,
    isChecked: false,
  });
  inputText.value = '';
};
</script>

<template>
  <form
    @submit.prevent="addToDo"
    class="flex h-20 w-full gap-4 items-center justify-between"
  >
    <label for="todo-input" class="sr-only">새 할 일 입력</label>
    <input
      id="todo-input"
      class="rounded-xl shadow-sm h-12 w-full p-3 bg-white/70"
      placeholder="할 일을 입력해주세요"
      v-model="inputText"
    />
    <CustomButton text="등록" size="md" variant="secondary" type="submit" />
  </form>
</template>
