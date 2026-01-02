<template>
  <div class="d-flex align-center logo-container" @click="goToRoot">
    <v-img
      :class="['mr-2', { 'logo-white': variant === 'white' }]"  
      alt="Legalia Logo"
      height="60"
      width="300"  
      src="@/assets/legalia-final.png"
    />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

defineProps({
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'white'].includes(value)
  }
})

const goToRoot = () => {
  router.push('/')
}
</script>

<style scoped>
.logo-container {
  cursor: pointer;
}

.logo-text {
  font-family: 'Poppins', sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: #8B1538;
  letter-spacing: -0.02em;
}

.logo-white {
  filter: brightness(0) invert(1);
}
</style>
