<script setup lang="ts">
import binIcon from '@/assets/bin-icon.svg';
import checkIcon from '@/assets/check-icon.svg';
import deleteIcon from '@/assets/delete-icon.svg';
import pencilIcon from '@/assets/pencil-icon.svg';
import { useToDoStore } from '@/store/store';
import type { ToDoItem } from '@/types/storeTypes';
import { computed, ref } from 'vue';
import CustomButton from './ui/CustomButton.vue';

interface Props {
  todo: ToDoItem;
}

const props = defineProps<Props>();
const toDoStore = useToDoStore();
const inputText = ref(props.todo.toDoText);
const isEditMode = ref(false);

const toggleEditMode = () => {
  if (isEditMode.value) {
    toDoStore.editToDoItem(props.todo.id, inputText.value);
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
    toDoStore.deleteToDoItem(props.todo.id);
  }
};

const handleToggleChecked = () => {
  toDoStore.toggleChecked(props.todo.id);
};

const textStyle = computed(() =>
  props.todo.isChecked ? 'text-gray-400 line-through' : 'text-gray-600',
); //computed(): ref 값이 바뀌면 자동으로 다시 계산
</script>

<template>
  <div class="flex gap-3 items-center justify-between">
    <div class="flex gap-3 items-start w-full">
      <input
        type="checkbox"
        class="min-w-5 min-h-5 accent-primary-300"
        :checked="props.todo.isChecked"
        @change="handleToggleChecked"
        :disabled="isEditMode"
      />
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
