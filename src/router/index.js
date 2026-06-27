import {
  createRouter,
  createWebHistory,
} from 'vue-router';
import MainLayout from '@/layout/MainLayout.vue';
import HomeView from '@/views/public/home/HomeView.vue';
import AuthLayout from '@/layout/AuthLayout.vue';
import LoginView from '@/views/auth/LoginView.vue';
import ProductsView from '@/views/public/product/ProductsView.vue';
import CheckoutLayout from '@/layout/CheckoutLayout.vue';
import CheckoutView from '@/views/auth/CheckoutView.vue';
import RegisterView from '@/views/auth/RegisterView.vue';
import ContactView from '@/views/auth/ContactView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import CategoryView from '@/views/public/CategoryView.vue';
import ProductDetailView from '@/views/public/ProductDetailView.vue';

const router = createRouter({
  history: createWebHistory(
    import.meta.env.BASE_URL,
  ),
  scrollBehavior(
    to,
    from,
    savePosition,
  ) {
    if (savePosition) {
      return savePosition;
    } else {
      return { top: 0 };
    }
  },
  routes: [
    // Main Layout
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView,
          meta: {
            title:
              'Ecommerce - Home',
            pageLogo:
              '/home.png',
          },
        },
        {
          path: 'products',
          name: 'products',
          component:
            ProductsView,
          meta: {
            title:
              'Ecommerce - Products',
            pageLogo:
              '/product.png',
          },
        },
        {
          path: 'product/:id',
          name: 'product-view',
          component:
            ProductDetailView,
          meta: {
            title:
              'Ecommerce - View Product',
            pageLogo:
              '/productView.png',
          },
        },
        {
          path: 'contact',
          name: 'Contact - page',
          component:
            ContactView,
          meta: {
            title:
              'Ecommerce - Contact',
            pageLogo:
              '/contact.png',
          },
        },
        {
          path: 'category',
          name: 'Category - page',
          component:
            CategoryView,
          meta: {
            title:
              'Ecommerce - Category',
            pageLogo:
              '/productView.png',
          },
        },

        // Future Customer Routes
        /*
        {
          path: 'cart',
          name: 'cart',
          component: CartView,
          meta: {
            title: 'Shopping Cart',
            requiresAuth: true,
            role: 'customer',
          },
        },
        {
          path: 'wishlist',
          name: 'wishlist',
          component: WishlistView,
          meta: {
            title: 'Wishlist',
            requiresAuth: true,
            role: 'customer',
          },
        },
        {
          path: 'profile',
          name: 'profile',
          component: ProfileView,
          meta: {
            title: 'My Profile',
            requiresAuth: true,
            role: 'customer',
          },
        },
        */

        // Future Admin Routes
        /*
        {
          path: 'administration',
          name: 'admin-dashboard',
          component: AdminDashboardView,
          meta: {
            title: 'Admin Dashboard',
            requiresAuth: true,
            role: 'admin',
          },
        },
        {
          path: 'administration/products',
          name: 'admin-products',
          component: AdminProductsView,
          meta: {
            title: 'Manage Products',
            requiresAuth: true,
            role: 'admin',
          },
        },
        */
      ],
    },

    // Auth Layout
    {
      path: '/auth',
      component: AuthLayout,
      children: [
        {
          path: 'login',
          name: 'auth-login',
          component:
            LoginView,
          meta: {
            title:
              'Auth - Login',
            pageLogo:
              '/login.png',
            guestOnly: true,
          },
        },
        {
          path: 'register',
          name: 'auth-register',
          component:
            RegisterView,
          meta: {
            title:
              'Auth - Register',
            pageLogo:
              '/register.png',
            guestOnly: true,
          },
        },
      ],
    },

    // Checkout Layout
    {
      path: '/payment',
      component:
        CheckoutLayout,
      children: [
        {
          path: 'checkout',
          name: 'checkout',
          component:
            CheckoutView,
          meta: {
            title:
              'Payment - Checkout',
            pageLogo:
              '/checkout.png',
            requiresAuth: true,
            role: 'customer',
          },
        },
      ],
    },

    // 404
    {
      path: '/:pathMatch(.*)*',
      name: 'Not-Found-Page',
      component: NotFoundView,
    },
  ],
});
router.afterEach((to) => {
  document.title =
    to.meta.title ||
    'Ecommerce - Site';
  if (to.meta.pageLogo) {
    const pageLogo =
      to.meta.pageLogo ||
      'home.png';
    let link =
      document.querySelector(
        "link[rel~='icon']",
      );
    if (!link) {
      link =
        document.createElement(
          'link',
        );
      link.rel = 'icon';
      document.head.appendChild(
        link,
      );
    }
    link.href = pageLogo;
  }
});

export default router;
