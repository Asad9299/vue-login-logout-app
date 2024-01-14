import { createRouter, createWebHistory } from 'vue-router'
import LoginVue from '../components/Auth/Login.vue';
import HelloWorldVue from '../components/HelloWorld.vue';
import NotFoundPageVue from '../components/Pages/NotFoundPage.vue';

const routes = [
  {
    path: '/',
    component: HelloWorldVue,
    meta: {
      title: 'Hello World',
    },
  },
  {
    path: '/login',
    component: LoginVue,
    meta: {
      title: 'Login',
    },
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFoundPageVue,
  }
];
const router = createRouter({
    history: createWebHistory(),
    routes,
  })
export default router;