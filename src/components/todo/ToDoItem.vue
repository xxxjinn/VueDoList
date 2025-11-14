<script setup lang="ts">
import binIcon from '@/assets/bin-icon.svg';
import checkIcon from '@/assets/check-icon.svg';
import deleteIcon from '@/assets/delete-icon.svg';
import pencilIcon from '@/assets/pencil-icon.svg';
import CustomButton from '@/components/ui/CustomButton.vue';
import { toastIfEmpty } from '@/lib/utils';
import { useToDoStore } from '@/store/store';
import type { ToDoItem } from '@/store/types';
import { computed, ref } from 'vue';

interface Props {
  todo: ToDoItem;
}

const { todo } = defineProps<Props>();
const { editToDoItem, deleteToDoItem, toggleCompleted } = useToDoStore();
const inputText = ref(todo.toDoText);
const isEditMode = ref(false);

const toggleEditMode = () => {
  if (isEditMode.value) {
    if (toastIfEmpty(inputText.value)) {
      return;
    }
    editToDoItem(todo.id, inputText.value);
    isEditMode.value = false;
    return;
  }
  isEditMode.value = true;
};

const handleDeleteOrCancel = () => {
  if (isEditMode.value) {
    isEditMode.value = false;
    inputText.value = todo.toDoText;
    return;
  }
  deleteToDoItem(todo.id);
};

const handleToggleCompleted = () => {
  toggleCompleted(todo.id);
};

const textStyle = computed(() =>
  todo.isCompleted ? 'text-gray-400 line-through' : 'text-gray-600',
);
</script>

<template>
  <div class="flex items-center justify-between gap-3 w-full">
    <label class="flex items-center gap-3 flex-1 cursor-pointer">
      <input
        type="checkbox"
        class="min-w-5 min-h-5 accent-primary-300 cursor-pointer"
        :checked="todo.isCompleted"
        @change="handleToggleCompleted"
        :disabled="isEditMode"
      />
      <p v-if="!isEditMode" :class="[textStyle, 'flex-1']">
        {{ todo.toDoText }}
      </p>
      <input
        v-else
        type="text"
        v-model="inputText"
        class="flex-1 bg-white/60 text-gray-600"
        @keyup.enter="toggleEditMode"
        aria-label="수정할 할 일 입력"
      />
    </label>
    <div class="flex gap-1">
      <CustomButton
        variant="icon"
        :icon="isEditMode ? checkIcon : pencilIcon"
        @click="toggleEditMode"
        :aria-label="isEditMode ? '수정 완료' : '수정'"
      />
      <CustomButton
        variant="icon"
        :icon="isEditMode ? deleteIcon : binIcon"
        @click="handleDeleteOrCancel"
        :aria-label="isEditMode ? '수정 취소' : '삭제'"
      />
    </div>
  </div>
</template>
