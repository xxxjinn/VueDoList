import type { ToDoItem } from '@/types/storeTypes';
import { defineStore } from 'pinia';

export const useToDoStore = defineStore('todos', {
  state: () => ({ todos: [] as ToDoItem[] }),
  getters: {
    checkedCount(state) {
      return state.todos.filter((todo) => todo.isChecked).length;
    },
  },
  actions: {
    addToDoItem(todo: ToDoItem) {
      this.todos.push(todo);
    },
    deleteToDoItem(id: number) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    deleteAllToDoItem() {
      this.todos = [];
    },
    editToDoItem(id: number, newText: string) {
      const todo = this.todos.find((todo) => todo.id === id);

      if (todo) {
        todo.toDoText = newText;
      }
    },
    toggleChecked(id: number) {
      const todo = this.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.isChecked = !todo.isChecked;
      }
    },
  },
});
