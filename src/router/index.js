import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue'),
      meta: {
        pageTitle: 'Home',
        breadcrumb: [
          {
            text: 'Home',
            active: true,
          },
        ],
      },
    },
    {
      path: '/warehouses',
      name: 'warehouses',
      component: () => import('@/views/warehouse/Warehouses.vue'),
      meta: {
        pageTitle: 'Warehouses',
        breadcrumb: [
          {
            text: 'Warehouse List',
            active: true,
          },
        ],
      },
    },
    {
      path: '/warehouse/create-warehouse',
      name: 'create-warehouse',
      component: () => import('@/views/warehouse/CreateWarehouse.vue'),
      meta: {
        pageTitle: 'Warehouses',
        breadcrumb: [
          {
            text: 'Create Warehouse',
            active: true,
          },
        ],
      },
    },
    {
      path: '/materials',
      name: 'materials',
      component: () => import('@/views/materials/ListMaterials.vue'),
      meta: {
        pageTitle: 'Materials',
        breadcrumb: [
          {
            text: 'Materials List',
            active: true,
          },
        ],
      },
    },
    {
      path: '/stock',
      name: 'stock',
      component: () => import('@/views/stock/ListStock.vue'),
      meta: {
        pageTitle: 'Stock',
        breadcrumb: [
          {
            text: 'Stock List',
            active: true,
          },
        ],
      },
    },
    {
      path: '/recipes',
      name: 'recipes',
      component: () => import('@/views/recipes/ListRecipes.vue'),
      meta: {
        pageTitle: 'Recipies',
        breadcrumb: [
          {
            text: 'Recipe List',
            active: true,
          },
        ],
      },
    },
    {
      path: '/recipes/create-recipe',
      name: 'create-recipe',
      component: () => import('@/views/recipes/CreateRecipe.vue'),
      meta: {
        pageTitle: 'Recipies',
        breadcrumb: [
          {
            text: 'Create Recipe',
            active: true,
          },
        ],
      },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '/error-404',
      name: 'error-404',
      component: () => import('@/views/error/Error404.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '*',
      redirect: 'error-404',
    },
  ],
})

// ? For splash screen
// Remove afterEach hook if you are not using splash screen
router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = 'none'
  }
})

export default router
