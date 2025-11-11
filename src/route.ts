import ToDo from '@/pages/ToDo.vue';
import ToDoHome from '@/pages/ToDoHome.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: ToDoHome },
  { path: '/todo', component: ToDo },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
