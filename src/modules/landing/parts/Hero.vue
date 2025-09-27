<template>
  <v-row class="ma-0 pa-0">
    <v-col cols="12" class="ma-0 pa-0">

      <div class="hero">
        <h1>Hero Component</h1>
      </div>
    </v-col>

  </v-row>

</template>

<script setup>
// Importaciones
import { ref, onMounted } from 'vue'

// Variables reactivas
const title = ref('Hero Component')

// Funciones
const handleClick = () => {
  console.log('Hero clicked')
}

// Lifecycle hooks
onMounted(() => {
  console.log('Hero component mounted')
})
</script>

<style scoped lang="scss">
.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

  h1 {
    color: white;
    font-size: 3rem;
    font-weight: bold;
    text-align: center;
    margin: 0;

    &:hover {
      transform: scale(1.05);
      transition: transform 0.3s ease;
    }
  }
}
</style>
