import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue';
import NotFoundView from '../views/NotFoundView.vue';
import BookListView from '../views/BookListView.vue';
import BookDetailsView from '../views/BookDetailsView.vue';

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/books',
    component: BookListView
  },
  {
    path: '/books/:id',
    component: BookDetailsView
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFoundView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
