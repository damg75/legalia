<template>
  <v-container class="payments-container">
    <v-row>
      <v-col>
        <div class="payments-title text-center">
          y paga de la manera en que desees
        </div>
      </v-col>
    </v-row>

    <v-row>
      <v-col 
        cols="6" 
        md="3" 
        v-for="(payment, index) in payments" 
        :key="payment.title"
        v-intersect="paymentAnimations[index].intersectOptions"
        :class="paymentAnimations[index].animationClass()"
        :style="paymentAnimations[index].animationStyle"
        class="d-flex justify-center align-center"
      >
        <v-img :src="payment.icon" :alt="payment.title" max-width="284" contain />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import { useDisplay } from 'vuetify'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const { mobile } = useDisplay()

// Offset responsive
const animationOffset = mobile.value ? '-50px' : '-200px'

// Animaciones con stagger (delays escalonados)
const paymentAnimations = [
  useScrollAnimation({ type: 'slide-up', duration: 800, delay: 0, once: false, threshold: 0.1, offset: animationOffset }),
  useScrollAnimation({ type: 'slide-up', duration: 800, delay: 150, once: false, threshold: 0.1, offset: animationOffset }),
  useScrollAnimation({ type: 'slide-up', duration: 800, delay: 300, once: false, threshold: 0.1, offset: animationOffset }),
  useScrollAnimation({ type: 'slide-up', duration: 800, delay: 450, once: false, threshold: 0.1, offset: animationOffset })
]

const payments = ref([
  {
    title: 'Cashea',
    icon: new URL('../assets/payments/cashea.svg', import.meta.url).href
  },
  {
    title: 'Efectivo',
    icon: new URL('../assets/payments/efectivo.svg', import.meta.url).href
  },
  {
    title: 'Paypal',
    icon: new URL('../assets/payments/paypal.svg', import.meta.url).href
  },
  {
    title: 'Pago móvil',
    icon: new URL('../assets/payments/pago-movil.svg', import.meta.url).href
  }
])
</script>

<style scoped>
.payments-container {
  margin-bottom: 80px;
}

.payments-title {
  font-family: 'Poppins', sans-serif;
  font-size: 40px;
  font-weight: bold;
  color: #000000;
}

@media (max-width: 960px) {
  .payments-title {
    font-size: 28px;
  }
}

@media (max-width: 600px) {
  .payments-title {
    font-size: 24px;
  }
}
</style>
