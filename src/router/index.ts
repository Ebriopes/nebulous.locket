import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/movieDetail/:movieId',
      name: 'movieDetail',
      component: () => import('@/views/MovieDetailView.vue'),
    },
  ],
});

export default router;
