<template>
  <div>
    <v-app-bar
      elevation="4"
      color="white"
      height="100"
      class="navbar"
    >
      <v-container fluid class="d-flex align-center justify-space-between px-6">
        <!-- Logo Section -->
        <LegaliaLogo />

        <!-- Navigation Menu - Desktop -->
        <div class="d-none d-md-flex align-center justify-center">
          <v-btn
            v-for="item in menuItems"
            :key="item.title"
            variant="text"
            class="nav-button mx-2 d-flex justify-center align-center"
            :class="{ 'nav-button--active': $route.path === item.href }"
            @click="$router.push(item.href)"
          >
            {{ item.title }}
          </v-btn>
        </div>

        <!-- Contact Button -->
        <div class="d-none d-md-block">
          <v-btn
            color="#8B1538"
            variant="flat"
            class="contact-button elevation-4"
          >
            Contáctanos
          </v-btn>
        </div>

        <!-- Mobile Menu Button -->
        <div class="d-md-none">
          <v-app-bar-nav-icon
            @click="mobileMenu = !mobileMenu"
            color="#8B1538"
          />
        </div>
      </v-container>
    </v-app-bar>

    <!-- Mobile Navigation Menu -->
    <v-navigation-drawer
      v-model="mobileMenu"
      temporary
      location="left"
      width="280"
      class="mobile-menu"
      style="top: 0px !important; height: 100vh !important;"
      >
        <div class="pa-4">
          <!-- Logo en el drawer -->
          <div class="mb-6 d-flex justify-center">
            <LegaliaLogo />
          </div>
          
          <v-list class="py-0">
          <v-list-item
            v-for="item in menuItems"
            :key="item.title"
            :class="{ 'v-list-item--active': $route.path === item.href }"
            @click="navigateAndClose(item.href)"
            class="mb-2"
          >
            <v-list-item-title class="mobile-menu-item">
              {{ item.title }}
            </v-list-item-title>
          </v-list-item>
          
          <v-divider class="my-4" />
          
          <div class="mt-4">
            <v-btn
              color="#8B1538"
              variant="flat"
              block
              rounded="pill"
              class="contact-button-mobile"
              @click="mobileMenu = false"
            >
              Contáctanos
            </v-btn>
          </div>
        </v-list>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import LegaliaLogo from './LegaliaLogo.vue'

const router = useRouter()
const mobileMenu = ref(false)

const menuItems = [
  { title: 'Inicio', href: '/' },
  { title: 'Servicios', href: '/servicios' },
  { title: 'Sobre nosotros', href: '/sobre-nosotros' },
  { title: 'Únete a nosotros', href: '/unete-a-nosotros' }
]

const navigateAndClose = (href) => {
  router.push(href)
  mobileMenu.value = false
}
</script>

<style scoped>
.navbar {
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 0px 0px 20px 20px;
}


.nav-button {
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #64748B;
  text-transform: none;
  letter-spacing: normal;
  padding: 8px 16px;
  border-radius: 8px;
}

.nav-button--active {
  color: #1E293B;
  font-weight: 500;
}

.nav-button:hover {
  color: #8B1538;
  background-color: rgba(139, 21, 56, 0.04);
}

.contact-button {
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 500;
  text-transform: none;
  letter-spacing: normal;
  padding: 0 24px;
  border-radius: 8px;
  width: 140px;
  height: 30px;
}

.contact-button:hover {
  background-color: #63071E;
}

/* Mobile styles */
.mobile-menu {
  z-index: 9999 !important;
}

.mobile-menu-item {
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #64748B;
}

.v-list-item--active {
  color: #8B1538 !important;
  background-color: rgba(139, 21, 56, 0.08) !important;
}

.v-list-item--active .mobile-menu-item {
  color: #8B1538 !important;
  font-weight: 500;
}

.contact-button-mobile {
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 500;
  text-transform: none;
  letter-spacing: normal;
}

.v-list-item {
  border-radius: 8px;
  margin-bottom: 4px;
}

.v-list-item:hover {
  background-color: rgba(139, 21, 56, 0.04) !important;
}

.v-list-item:hover .mobile-menu-item {
  color: #8B1538 !important;
}
</style>
