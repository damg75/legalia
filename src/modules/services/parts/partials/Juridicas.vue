<template>
  <v-container fluid class="py-12">
    <v-container class="px-4 px-md-8">
      <v-row>
        <v-col cols="12" class="d-flex flex-column align-center justify-center">
          <div class="juridicas-title-wrapper">
            <h2 class="juridicas-main-title">
              Legalia: <span class="text-blue-dark">Formación y Academia</span>
            </h2>
          </div>
          <div class="juridicas-underline mt-2"></div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="12" class="d-flex justify-center">
          <p class="juridicas-subtitle">
            En Legalia creemos que una empresa bien informada toma decisiones más seguras y estratégicas. Diseñamos
            programas de formación legal prácticos y adaptados a las áreas clave de tu negocio, combinando conocimiento
            jurídico con un enfoque orientado a la acción.
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script setup>
</script>

<style scoped>


.juridicas-title-wrapper {
  text-align: center;
  position: relative;
  display: inline-block;
}

.juridicas-main-title {
  font-family: 'Poppins', sans-serif;
  font-size: 56px;
  font-weight: 700;
  color: #000000;
  line-height: 1.2;
  margin-bottom: 0.5rem;
}

.text-blue-dark {
  font-weight: 700;
  color: #1E2761;
}

.juridicas-subtitle {
  font-family: 'Poppins', sans-serif;
  color: #4B5563;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.6;
  text-align: center;
  max-width: 900px;
  margin: 1.5rem auto;
}

.juridicas-underline {
  width: 120px;
  height: 4px;
  background-color: #FBBF24;

}

/* Responsive - Mobile */
@media (max-width: 960px) {
  .juridicas-main-title {
    font-size: 40px;
  }

  .juridicas-subtitle {
    font-size: 18px;
  }

  .juridicas-underline {
    width: 100px;
    left: 10%;
  }
}

@media (max-width: 600px) {
  .juridicas-main-title {
    font-size: 28px;
  }

  .juridicas-subtitle {
    font-size: 16px;
  }

  .juridicas-underline {
    width: 80px;
    height: 3px;
    left: 8%;
  }
}
</style>
