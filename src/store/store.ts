import type { ToDoItem } from '@/types/storeTypes';
import { defineStore } from 'pinia';

export const useToDoStore = defineStore('todos', {
  state: () => ({ todos: [] as ToDoItem[] }),
  actions: {
    addToDoItem(todo: ToDoItem) {
      this.todos.push(todo);
    },
  },
});
