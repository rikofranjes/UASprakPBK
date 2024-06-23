import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '../layout/MainLayout.vue';
import WeatherWidget from '../components/WeatherWidget.vue';
import Tugas from '../layout/Tugas.vue';

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', component: WeatherWidget },
      { path: 'tugas', component: Tugas },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
