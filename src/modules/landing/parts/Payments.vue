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
      <v-col cols="6" md="3" v-for="payment in payments" :key="payment.title"
        class="d-flex justify-center align-center">
        <v-img :src="payment.icon" :alt="payment.title" max-width="284" contain />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'

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
