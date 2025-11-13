import type { ToDoItem } from '@/store/types';
import { defineStore } from 'pinia';

export const useToDoStore = defineStore('todos', {
  state: () => ({ todos: [] as ToDoItem[] }),
  getters: {
    completedCount(state) {
      return state.todos.filter((todo) => todo.isCompleted).length;
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
    toggleCompleted(id: number) {
      const todo = this.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.isCompleted = !todo.isCompleted;
      }
    },
  },
});
