import { URL } from '@/constants/url';
import ToDo from '@/pages/ToDo.vue';
import ToDoHome from '@/pages/ToDoHome.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: URL.home, component: ToDoHome },
  { path: URL.toDo, component: ToDo },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
