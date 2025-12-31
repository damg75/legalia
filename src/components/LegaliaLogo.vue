<template>
  <div class="d-flex align-center">
    <v-img
      :class="['mr-2', { 'logo-white': variant === 'white' }]"  
      alt="Legalia Logo"
      height="40"
      width="200"  
      src="@/assets/legalia-final.png"
    />
  </div>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'white'].includes(value)
  }
})
</script>

<style scoped>
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
