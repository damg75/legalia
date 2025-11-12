<template>
  <v-container fluid class="form-section py-12">
    <v-container class="px-4 px-md-8">
      <v-row class="justify-center">
        <v-col cols="12" md="8" lg="8">
          <!-- Título y subtítulo -->
          <div class="text-center mb-8">
            <h2 class="form-title mb-3">Únete a nuestro equipo</h2>
            <p class="form-subtitle">
              Completa este formulario y da el primer paso hacia tu próxima<br>
              oportunidad profesional.
            </p>
          </div>

          <!-- Formulario -->
          <v-card class="form-card pa-8" elevation="2">
            <v-form ref="formRef" v-model="valid" :disabled="loading" @submit.prevent="handleSubmit">
              <!-- Nombre y Apellido -->
              <div class="form-field mb-6">
                <label class="field-label" for="name">
                  <v-icon size="18" class="mr-1" color="#9CA3AF">mdi-account</v-icon>
                  Nombre y Apellido<span class="text-red">*</span>
                </label>
                <v-text-field id="name" v-model="formData.name" variant="outlined"
                  placeholder="Ingresa tu nombre completo" :rules="nameRules" density="comfortable" class="mt-2" />
              </div>

              <!-- Email -->
              <div class="form-field mb-6">
                <label class="field-label" for="email">
                  <v-icon size="18" class="mr-1" color="#9CA3AF">mdi-email</v-icon>
                  Email<span class="text-red">*</span>
                </label>
                <v-text-field id="email" v-model="formData.email" variant="outlined" placeholder="tuemail@ejemplo.com"
                  :rules="emailRules" density="comfortable" class="mt-2" />
              </div>

              <!-- Teléfono -->
              <div class="form-field mb-6">
                <label class="field-label" for="phone">
                  <v-icon size="18" class="mr-1" color="#9CA3AF">mdi-phone</v-icon>
                  Teléfono<span class="text-red">*</span>
                </label>
                <v-text-field id="phone" v-model="formData.phone" variant="outlined" placeholder="+1 (555) 123-4567"
                  :rules="phoneRules" density="comfortable" class="mt-2" />
              </div>

              <!-- Experiencia -->
              <div class="form-field mb-6">
                <label class="field-label" for="experience">
                  <v-icon size="18" class="mr-1" color="#9CA3AF">mdi-briefcase</v-icon>
                  Describe tu experiencia académica y laboral<span class="text-red">*</span>
                </label>
                <v-textarea id="experience" v-model="formData.experience" variant="outlined"
                  placeholder="Ej. Estudios, certificaciones, experiencia en..." :rules="experienceRules" rows="5"
                  class="mt-2" />
              </div>

              <!-- Adjuntar archivo -->
              <div class="form-field mb-6">
                <label class="field-label">
                  <v-icon size="18" class="mr-1" color="#9CA3AF">mdi-paperclip</v-icon>
                  Adjuntar currículum<span class="text-red">*</span>
                </label>
                <div class="file-upload-wrapper mt-2">
                  <input ref="fileInput" type="file" accept=".pdf,.doc,.docx" style="display: none"
                    @change="handleFileChange" />
                  <v-btn variant="outlined" color="#6B7280" block size="large" @click="$refs.fileInput.click()"
                    :disabled="loading">
                    <v-icon start>mdi-cloud-upload</v-icon>
                    Seleccionar archivo (PDF/Word)
                  </v-btn>

                  <!-- Archivo adjunto -->
                  <div v-if="selectedFile" class="file-selected mt-3">
                    <v-chip closable color="#10B981" text-color="white" size="large" @click:close="removeFile">
                      <v-icon start>mdi-file-document</v-icon>
                      {{ selectedFile.name }} ({{ formatFileSize(selectedFile.size) }})
                    </v-chip>
                  </div>
                  <div v-if="fileError" class="file-error mt-2">
                    {{ fileError }}
                  </div>
                </div>
              </div>

              <!-- Botón de envío -->
              <v-btn type="submit" color="#63071E" size="x-large" block :loading="loading"
                :disabled="!valid || !selectedFile" class="submit-button">
                <v-icon start>mdi-send</v-icon>
                Enviar solicitud
              </v-btn>

              <!-- Nota de confidencialidad -->
              <div class="confidentiality-note text-center mt-4">
                <v-icon size="16" color="#6B7280">mdi-lock</v-icon>
                <span class="ml-1">Tu información será tratada con total confidencialidad</span>
              </div>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- Dialog de éxito -->
    <v-dialog v-model="successDialog" max-width="500">
      <v-card>
        <v-card-title class="d-flex align-center justify-center pa-6">
          <v-icon color="success" size="48" class="mr-3">mdi-check-circle</v-icon>
          <span class="text-h5">¡Solicitud enviada!</span>
        </v-card-title>
        <v-card-text class="text-center pb-6">
          <p>Tu solicitud ha sido enviada exitosamente. Nos pondremos en contacto contigo pronto.</p>
        </v-card-text>
        <v-card-actions class="justify-center pb-6">
          <v-btn color="success" variant="flat" @click="closeSuccessDialog" style="border-radius: 16px;">
            Entendido
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Dialog de error -->
    <v-dialog v-model="errorDialog" max-width="500">
      <v-card>
        <v-card-title class="d-flex align-center justify-center pa-6">
          <v-icon color="error" size="48" class="mr-3">mdi-alert-circle</v-icon>
          <span class="text-h5">Error</span>
        </v-card-title>
        <v-card-text class="text-center pb-6">
          <p>{{ errorMessage }}</p>
        </v-card-text>
        <v-card-actions class="justify-center pb-6">
          <v-btn color="error" variant="flat" @click="errorDialog = false" style="border-radius: 16px;">
            Cerrar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'

// Referencias
const formRef = ref(null)
const fileInput = ref(null)
const valid = ref(false)
const loading = ref(false)
const successDialog = ref(false)
const errorDialog = ref(false)
const errorMessage = ref('')

// Estados del formulario
const formData = ref({
  name: '',
  email: '',
  phone: '',
  experience: ''
})

const selectedFile = ref(null)
const fileError = ref('')

// Validaciones
const nameRules = [
  v => !!v || 'El nombre es requerido',
  v => (v && v.length >= 3) || 'El nombre debe tener al menos 3 caracteres'
]

const emailRules = [
  v => !!v || 'El email es requerido',
  v => /.+@.+\..+/.test(v) || 'El email debe ser válido'
]

const phoneRules = [
  v => !!v || 'El teléfono es requerido',
  v => (v && v.length >= 10) || 'El teléfono debe tener al menos 10 caracteres'
]

const experienceRules = [
  v => !!v || 'La experiencia es requerida',
  v => (v && v.length >= 20) || 'Describe tu experiencia con al menos 20 caracteres'
]

// Manejo de archivos
const handleFileChange = (event) => {
  const file = event.target.files[0]
  if (!file) return

  // Validar tipo de archivo
  const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
  if (!allowedTypes.includes(file.type)) {
    fileError.value = 'Solo se permiten archivos PDF o Word'
    selectedFile.value = null
    return
  }

  // Validar tamaño (máximo 5MB)
  const maxSize = 5 * 1024 * 1024 // 5MB en bytes
  if (file.size > maxSize) {
    fileError.value = 'El archivo no debe superar los 5MB'
    selectedFile.value = null
    return
  }

  fileError.value = ''
  selectedFile.value = file
}

const removeFile = () => {
  selectedFile.value = null
  fileError.value = ''
  if (fileInput.value) {
    fileInput.value.value = ''
  }
}

const formatFileSize = (bytes) => {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i]
}

// Manejo del envío del formulario
const handleSubmit = async () => {
  const { valid: isValid } = await formRef.value.validate()

  if (!isValid || !selectedFile.value) {
    return
  }

  loading.value = true

  try {
    // Preparar FormData para envío
    const submitData = new FormData()
    submitData.append('name', formData.value.name)
    submitData.append('email', formData.value.email)
    submitData.append('phone', formData.value.phone)
    submitData.append('experience', formData.value.experience)
    submitData.append('curriculum', selectedFile.value)

    // Simular petición a API (2 segundos)
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Simular respuesta exitosa
    console.log('FormData preparado:', {
      name: formData.value.name,
      email: formData.value.email,
      phone: formData.value.phone,
      experience: formData.value.experience,
      file: selectedFile.value.name
    })

    // Mostrar diálogo de éxito
    successDialog.value = true

    // Limpiar formulario
    resetForm()

  } catch (error) {
    console.error('Error al enviar formulario:', error)
    errorMessage.value = 'Hubo un error al enviar tu solicitud. Por favor, intenta nuevamente.'
    errorDialog.value = true
  } finally {
    loading.value = false
  }
}

const resetForm = () => {
  formData.value = {
    name: '',
    email: '',
    phone: '',
    experience: ''
  }
  removeFile()
  formRef.value?.resetValidation()
}

const closeSuccessDialog = () => {
  successDialog.value = false
}
</script>

<style scoped>
.form-section {
  background-color: #F9FAFB;
}

.form-title {
  font-family: 'Poppins', sans-serif;
  font-size: 36px;
  font-weight: 700;
  color: #000000;
}

.form-subtitle {
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #6B7280;
  line-height: 1.6;
}

.form-card {
  border-radius: 16px;
  background-color: #FFFFFF;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08) !important;
}

.form-field {
  width: 100%;
}

.field-label {
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #374151;
  display: flex;
  align-items: center;
}

.text-red {
  color: #EF4444;
  margin-left: 2px;
}

.file-upload-wrapper {
  width: 100%;
}

.file-selected {
  display: flex;
  justify-content: center;
}

.file-error {
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  color: #EF4444;
  text-align: center;
}

/* Botones generales */
:deep(.v-btn) {
  text-transform: none !important;
}

.submit-button {
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 600;
  text-transform: none;
  letter-spacing: 0;
  height: 52px !important;
}

.confidentiality-note {
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  color: #6B7280;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Responsive */
@media (max-width: 960px) {
  .form-title {
    font-size: 32px;
  }

  .form-subtitle {
    font-size: 15px;
  }

  .form-card {
    padding: 24px !important;
  }
}

@media (max-width: 600px) {
  .form-title {
    font-size: 24px;
  }

  .form-subtitle {
    font-size: 14px;
  }

  .form-card {
    padding: 20px !important;
  }

  .submit-button {
    font-size: 15px;
    height: 48px !important;
  }
}
</style>
