import {
  createRouter,
  createWebHistory,
} from 'vue-router';
import MainLayout from '@/layout/MainLayout.vue';
import HomeView from '@/views/public/home/HomeView.vue';
import AuthLayout from '@/layout/AuthLayout.vue';
import LoginView from '@/views/auth/login/LoginView.vue';
import ProductsView from '@/views/public/product/ProductsView.vue';
import CheckoutLayout from '@/layout/CheckoutLayout.vue';
import RegisterView from '@/views/auth/register/RegisterView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import CategoryView from '@/views/public/category/CategoryView.vue';
import ProductDetailView from '@/views/public/productdetail/ProductDetailView.vue';
import ContactView from '@/views/auth/contact/ContactView.vue';
import CartView from '@/views/auth/cart/CartView.vue';
import CheckoutView from '@/views/auth/checkout/CheckoutView.vue';
import PaymentMethodView from '@/views/auth/paymentmethod/PaymentMethodView.vue';
import FinalReviewView from '@/views/auth/finalreview/FinalReviewView.vue';
import ProfileView from '@/views/account/ProfileView.vue';

// Admin Imports
import AdminLayout from '@/layout/AdminLayout.vue';
import AdminDashboardView from '@/views/admin/AdminDashboardView.vue';
import AdminProductView from '@/views/admin/AdminProductView.vue';

const router = createRouter({
  history: createWebHistory(
    import.meta.env.BASE_URL,
  ),

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
        {
          path: 'cart',
          name: 'cart',
          component: CartView,
          meta: {
            title:
              'Payment - Shopping cart',
            pageLogo:
              '/checkout.png',
            requiresAuth: true,
            role: 'customer',
          },
        },
        {
          path: 'profile',
          name: 'profile',
          component:
            ProfileView,
          meta: {
            title:
              'My Profile',
            requiresAuth: true,
            pageLogo:
              '/profile.png',
            role: 'customer',
          },
        },
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
        {
          path: 'paymentmethod',
          name: 'paymentmethod',
          component:
            PaymentMethodView,
          meta: {
            title:
              'Payment - Checkout',
            pageLogo:
              '/checkout.png',
            requiresAuth: true,
            role: 'customer',
          },
        },
        {
          path: 'finalreview',
          name: 'finalreview',
          component:
            FinalReviewView,
          meta: {
            title:
              'Payment - finalreview',
            pageLogo:
              '/checkout.png',
            requiresAuth: true,
            role: 'customer',
          },
        },
      ],
    },
    // Admin Layout
    {
      path: '/administration',
      component: AdminLayout,
      meta: {
        requiresAuth: true,
        role: 'admin',
      },
      children: [
        {
          path: 'dashboard',
          name: 'admin-dashboard',
          component:
            AdminDashboardView,
          meta: {
            title:
              'Admin - Dashboard',
            pageLogo:
              '/login.png',
          },
        },
        {
          path: 'products',
          name: 'admin-products',
          component:
            AdminProductView,
          meta: {
            title:
              'Admin - Products',
            pageLogo:
              '/product.png',
          },
        },
        // {
        //   path: 'cart',
        //   name: 'admin-cart',
        //   component:
        //     AdminCartView,
        //   meta: {
        //     title:
        //       'Admin - Cart Configuration',
        //     pageLogo:
        //       '/checkout.png',
        //   },
        // },
        // {
        //   path: 'orders',
        //   name: 'admin-orders',
        //   component:
        //     AdminOrdersView,
        //   meta: {
        //     title:
        //       'Admin - Orders Management',
        //     pageLogo:
        //       '/checkout.png',
        //   },
        // },
      ],
    },

    // 404
    {
      path: '/:pathMatch(.*)*',
      name: 'Not-Found-Page',
      component: NotFoundView,
    },
  ],
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
