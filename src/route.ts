import ToDo from '@/components/ToDo.vue';
import ToDoHome from '@/components/ToDoHome.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: ToDoHome },
  { path: '/todo', component: ToDo },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
