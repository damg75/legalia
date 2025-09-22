<template>
  <v-container fluid>
    <v-row justify="center" align="center" class="fill-height">
      <v-col cols="12" md="8" lg="6">
        <v-card class="pa-8" elevation="8">
          <v-card-title class="text-h3 text-center mb-6">
            Bienvenido a Legalia
          </v-card-title>
          
          <v-card-text class="text-center">
            <p class="text-h6 mb-4">
              Tu plataforma legal de confianza
            </p>
            <p class="text-body-1 mb-6">
              Aquí podrás encontrar todos los servicios legales que necesitas
              para resolver tus asuntos jurídicos de manera eficiente y profesional.
            </p>
            
            <v-btn
              color="primary"
              size="large"
              class="mr-4"
            >
              Comenzar
            </v-btn>
            
            <v-btn
              variant="outlined"
              size="large"
            >
              Más información
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
// Aquí puedes agregar la lógica del componente cuando sea necesario
</script>

<style scoped>
.fill-height {
  min-height: 80vh;
}
</style>