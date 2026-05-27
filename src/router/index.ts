import { createRouter, createWebHistory } from '@ionic/vue-router';
import { useUsuarioStore } from '../stores/usuario';
import { alertController } from '@ionic/vue';

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
      {
        path: 'perfil',
        component: () => import('../views/PerfilPage.vue'),
        meta: { requerNome: true }
      },
      { path: 'tarefas', component: () => import('../views/TarefasPage.vue') },
      { path: 'tarefas/:id', component: () => import('../views/DetalhesPage.vue') }
    ]
  }
  
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach(async (to, _, next) => {
  const usuStore = useUsuarioStore()
  if (to.meta.requerNome && !usuStore.nome) {
    // avoid infinite redirect when already navigating to perfil
    if (to.path === '/tabs/perfil') {
      next()
      return
    }
    const alert = await alertController.create({
      header: 'Acesso restrito',
      message: 'Você precisa informar seu nome no Perfil antes de acessar esta área.',
      buttons: ['OK']
    })
    await alert.present()
    next('/tabs/perfil')
  } else {
    next()
  }
})

export default router
