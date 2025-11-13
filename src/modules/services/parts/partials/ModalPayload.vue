<template>
  <div class="modal-payload">
    <v-card-title class="text-h5 pa-6 pb-4">
      <div class="d-flex align-center">
        <div class="icon-container-modal mr-4">
          <span class="service-icon-modal">{{ selectedService?.icon }}</span>
        </div>
        <div>{{ selectedService?.title }}</div>
      </div>
    </v-card-title>
    
    <v-card-text class="pa-6 pt-2">
      <p class="text-body-1 mb-4">
        {{ selectedService?.description }}
      </p>
      
      <v-divider class="my-4" />
      
      <div class="service-details">
        <h4 class="text-h6 mb-3">Información adicional</h4>
        <p class="text-body-2">
          Este es un ejemplo de modal que se abre al hacer clic en un servicio.
          El modal es responsivo y se comporta como:
        </p>
        <ul class="mt-2">
          <li><strong>Desktop:</strong> Modal centrado con esquinas redondeadas</li>
          <li><strong>Mobile:</strong> Bottom sheet estilo Android con esquinas superiores redondeadas</li>
        </ul>
        <p class="text-body-2 mt-3">
          Puedes cerrar este modal:
        </p>
        <ul class="mt-2">
          <li>Haciendo clic en la X superior derecha</li>
          <li>Haciendo clic fuera del modal (dismissable)</li>
          <li>Presionando ESC</li>
        </ul>
      </div>
    </v-card-text>
    
    <v-card-actions class="pa-6 pt-0">
      <v-spacer />
      <v-btn
        variant="text"
        @click="$emit('cancel')"
      >
        Cancelar
      </v-btn>
      <v-btn
        color="primary"
        variant="flat"
        @click="$emit('confirm', selectedService)"
      >
        Confirmar
      </v-btn>
    </v-card-actions>
  </div>
</template>

<script setup lang="ts">
interface Service {
  icon: string
  title: string
  description: string
  code?: string
}

interface Props {
  selectedService: Service | null
}

defineProps<Props>()

defineEmits<{
  (e: 'cancel'): void
  (e: 'confirm', service: Service | null): void
}>()
</script>

<style scoped lang="scss">
.modal-payload {
  width: 100%;
}

/* Modal styles */
.icon-container-modal {
  width: 64px;
  height: 64px;
  border-radius: 16px;
  background-color: #F9FAFB;
  display: flex;
  align-items: center;
  justify-content: center;
}

.service-icon-modal {
  font-size: 40px;
}

.service-details {
  font-family: 'Poppins', sans-serif;
}

.service-details h4 {
  color: #425066;
}

.service-details ul {
  list-style-type: disc;
  padding-left: 24px;
  color: #444B53;
}

.service-details li {
  margin-bottom: 8px;
  line-height: 1.5;
}
</style>

