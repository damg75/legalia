<template>
  <v-container fluid class=" d-flex flex-column justify-start hero px-16">

    <v-row class="ma-0 pa-0 d-flex d-row justify-center align-center">
      <v-col cols="12" md="6" class="ma-0 pa-0">
        <div class="hero-copy">
          Transformamos tu <br> experiencia legal con <br> un servicio <b>innovador</b> <br> <b>y excepcional.</b>
        </div>

      </v-col>
      <v-col cols="12" md="6" class="ma-0 pa-0">

        <v-img 
          src="@/modules/landing/assets/hero.svg" 
          alt="Hero Illustration" 
          class="hero-svg" 
          max-width="683"
          height="482" 
          contain
        >
          <template v-slot:placeholder>
            <div class="d-flex align-center justify-center fill-height">
              <v-progress-circular
                color="primary"
                indeterminate
                size="64"
              ></v-progress-circular>
            </div>
          </template>
        </v-img>
      </v-col>

    </v-row>

  </v-container>


</template>

<script setup>

</script>

<style scoped lang="scss">
.hero {

  background: #FFFFFF;
  position: relative;
  overflow: hidden;

  // SVG de fondo fijo en bottom
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: auto;
    background-image: url('@/modules/landing/assets/Subtract-wide.svg');
    background-repeat: no-repeat;
    background-position: bottom center;
    background-size: cover;
    z-index: 0;
    min-height: 711px; // Altura del SVG
  }

  .hero-copy {
    font-family: 'Poppins', sans-serif;
    font-size: 48px;
    font-weight: 400;
    line-height: 1.2;
    margin: 0;
    position: relative;
    z-index: 1;

    b {
      font-weight: 700;
    }

    @media (max-width: 768px) {
      font-size: 32px;
      text-align: center;
    }

    @media (max-width: 480px) {
      font-size: 28px;
    }
  }
}
</style>
