import { createRouter, createWebHistory } from '@ionic/vue-router';
import { useUsuarioStore } from '../stores/usuario';

const routes = [
  {
    path: '/',
    redirect: '/tabs/home'
  },
  {
    path: '/tabs',
    component: () => import('../views/TabsPage.vue'),
    children: [
      { path: '', redirect: '/tabs/home' },
      { path: 'home', component: () => import('../views/HomePage.vue') },
      { path: 'tarefas', component: () => import('../views/TarefasPage.vue') },
      { path: 'tarefas/:id', component: () => import('../views/DetalhesPage.vue') }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, _, next) => {
  const usuStore = useUsuarioStore()
  if (to.meta.requerNome && !usuStore.nome) {
    next('/tabs/tarefas')
  } else {
    next()
  }
})

export default router
