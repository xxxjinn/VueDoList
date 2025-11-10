<script setup lang="ts">
import binIcon from '@/assets/bin-icon.svg';
import checkIcon from '@/assets/check-icon.svg';
import deleteIcon from '@/assets/delete-icon.svg';
import pencilIcon from '@/assets/pencil-icon.svg';
import { useToDoStore } from '@/store/store';
import { computed, ref } from 'vue';
import CustomButton from './CustomButton.vue';

const isChecked = ref(false);
const textStyle = computed(() =>
  isChecked.value ? 'text-gray-400 line-through' : 'text-gray-600',
); //computed(): ref 값이 바뀌면 자동으로 다시 계산

const isEditMode = ref(false);

interface Props {
  todo: {
    id: number;
    toDoText: string;
  };
}

const props = defineProps<Props>();

const todoStore = useToDoStore();

const inputText = ref(props.todo.toDoText);

const toggleEditMode = () => {
  if (isEditMode.value) {
    todoStore.editToDoItem(props.todo.id, inputText.value);
    isEditMode.value = false;
  } else {
    isEditMode.value = true;
  }
};

const handleDeleteOrCancel = () => {
  if (isEditMode.value) {
    isEditMode.value = false;
    inputText.value = props.todo.toDoText;
  } else {
    todoStore.deleteToDoItem(props.todo.id);
  }
};
</script>

<template>
  <div class="flex gap-3 items-center justify-between">
    <div class="flex gap-3 items-start w-full">
      <input type="checkbox" class="min-w-5 min-h-5 accent-primary-300" v-model="isChecked" />
      <p v-if="!isEditMode" :class="textStyle">{{ props.todo.toDoText }}</p>
      <input v-else type="text" v-model="inputText" class="w-full bg-white/60 text-gray-600" />
    </div>
    <div class="flex gap-1">
      <CustomButton
        variant="icon"
        :icon="isEditMode ? checkIcon : pencilIcon"
        @click="toggleEditMode"
      />
      <CustomButton
        variant="icon"
        :icon="isEditMode ? deleteIcon : binIcon"
        @click="handleDeleteOrCancel"
      />
    </div>
  </div>
</template>
