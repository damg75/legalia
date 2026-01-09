<template>
  <div class="team-member-modal">
    <!-- Header sticky con imagen y título -->
    <div class="modal-sticky-header">
      <v-card-title class="pa-6 pb-2">
        <div class="d-flex align-start">
          <div class="icon-container-modal mr-4">
            <v-img
              v-if="member?.profileUrl"
              :src="member.profileUrl"
              class="member-image-modal"
              cover
            />
            <v-icon v-else size="60" color="#9CA3AF">mdi-account-circle</v-icon>
          </div>
          <div class="flex-grow-1">
            <h2 class="member-modal-title">{{ member?.name }}</h2>
            <p class="member-modal-subtitle" v-html="formattedTitle"></p>
          </div>
        </div>
      </v-card-title>

      <!-- Separador -->
      <v-divider class="mx-6 divider-header"></v-divider>
    </div>
    
    <v-card-text ref="scrollableContent" class="pa-6 pt-4 modal-scrollable-content">
      <!-- Si tiene fullProfile, mostrar estructura completa -->
      <template v-if="member?.fullProfile">
        <!-- Prefacio -->
        <div class="profile-section prefacio-section">
          <p v-if="member.fullProfile.prefacio?.texto" class="prefacio-texto">
            {{ member.fullProfile.prefacio.texto }}
          </p>
          <ul v-if="member.fullProfile.prefacio?.bullets?.length" class="prefacio-bullets">
            <li v-for="(bullet, index) in member.fullProfile.prefacio.bullets" :key="'prefacio-' + index">
              {{ bullet }}
            </li>
          </ul>
        </div>

        <!-- Experiencia -->
        <div v-if="member.fullProfile.experiencia?.length" class="profile-section experiencia-section">
          <h3 class="section-title">Experiencia</h3>
          <ul class="experience-list">
            <template v-for="(exp, index) in member.fullProfile.experiencia" :key="'exp-' + index">
              <!-- Si es string simple -->
              <li v-if="typeof exp === 'string'">
                {{ exp }}
              </li>
              <!-- Si es objeto con subitems -->
              <template v-else>
                <li class="exp-parent">
                  {{ exp.texto }}
                </li>
                <ul v-if="exp.subitems?.length" class="experience-subitems">
                  <li v-for="(subitem, subIndex) in exp.subitems" :key="'sub-' + index + '-' + subIndex">
                    {{ subitem }}
                  </li>
                </ul>
              </template>
            </template>
          </ul>
        </div>

        <!-- Educación -->
        <div v-if="member.fullProfile.educacion?.length" class="profile-section educacion-section">
          <h3 class="section-title">Educación</h3>
          <ul class="education-list">
            <template v-for="(edu, index) in member.fullProfile.educacion" :key="'edu-' + index">
              <!-- Si es string simple -->
              <li v-if="typeof edu === 'string'">
                {{ edu }}
              </li>
              <!-- Si es objeto con subitems -->
              <template v-else>
                <li class="edu-parent">
                  {{ edu.texto }}
                </li>
                <ul v-if="edu.subitems?.length" class="education-subitems">
                  <li v-for="(subitem, subIndex) in edu.subitems" :key="'edusub-' + index + '-' + subIndex">
                    {{ subitem }}
                  </li>
                </ul>
              </template>
            </template>
          </ul>
        </div>
      </template>

      <!-- Fallback: Descripción simple si no tiene fullProfile -->
      <template v-else>
        <div v-if="member?.description" class="member-description-section">
          <p class="member-description-text" v-html="member.description"></p>
        </div>
      </template>
    </v-card-text>
  </div>
</template>

<script setup>
import { computed, ref, watch, nextTick } from 'vue'

const props = defineProps({
  member: {
    type: Object,
    default: null
  }
})

const scrollableContent = ref(null)

// Formatear el título para hacer salto de línea en " y " y " en "
const formattedTitle = computed(() => {
  if (!props.member?.title) return ''
  return props.member.title
    .replace(/ y /g, '<br>y ')
    .replace(/ en /g, '<br>en ')
})

// Resetear scroll cuando cambia el miembro seleccionado
watch(() => props.member, () => {
  nextTick(() => {
    if (scrollableContent.value?.$el) {
      scrollableContent.value.$el.scrollTop = 0
    } else if (scrollableContent.value) {
      scrollableContent.value.scrollTop = 0
    }
  })
})
</script>

<style scoped lang="scss">
.team-member-modal {
  width: 100%;
  font-family: 'Poppins', sans-serif;
  display: flex;
  flex-direction: column;
  max-height: 100%;
  overflow: hidden;
}

/* Header sticky */
.modal-sticky-header {
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: #FFFFFF;
  flex-shrink: 0;
  padding-top: 16px;
}

/* Contenido scrolleable */
.modal-scrollable-content {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
}

/* Header Section */
.icon-container-modal {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #F3F4F6;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;
}

.member-image-modal {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
}

.member-modal-title {
  font-family: 'Poppins', sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.3;
  color: #1F2937;
  margin: 0;
}

.member-modal-subtitle {
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: #6B7280;
  margin: 4px 0 0 0;
}

/* Divider */
.divider-header {
  border-color: #E5E7EB;
  opacity: 1;
}

/* Profile Sections */
.profile-section {
  margin-bottom: 24px;
  
  &:last-child {
    margin-bottom: 0;
  }
}

.section-title {
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #1F2937;
  margin: 0 0 12px 0;
  padding-bottom: 8px;
  border-bottom: 2px solid #E5E7EB;
}

/* Prefacio */
.prefacio-section {
  margin-top: 8px;
}

.prefacio-texto {
  font-family: 'Poppins', sans-serif;
  font-size: 15px;
  font-weight: 500;
  line-height: 1.6;
  color: #374151;
  margin: 0 0 16px 0;
}

.prefacio-bullets,
.experience-list,
.education-list {
  list-style: none;
  padding: 0;
  margin: 0;
  
  li {
    position: relative;
    padding-left: 20px;
    margin-bottom: 10px;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    line-height: 1.5;
    color: #4B5563;
    
    &:before {
      content: '•';
      position: absolute;
      left: 0;
      color: #63071E; // Vinotinto Legalia
      font-weight: bold;
    }
    
    &:last-child {
      margin-bottom: 0;
    }
  }
}

.prefacio-bullets li {
  margin-bottom: 8px;
}

/* Subitems anidados en experiencia */
.experience-subitems {
  list-style: none;
  padding: 0;
  margin: 8px 0 12px 20px;
  
  li {
    position: relative;
    padding-left: 20px;
    margin-bottom: 6px;
    font-family: 'Poppins', sans-serif;
    font-size: 13px;
    line-height: 1.5;
    color: #6B7280;
    
    &:before {
      content: '◦';
      position: absolute;
      left: 0;
      color: #63071E;
      font-weight: normal;
    }
    
    &:last-child {
      margin-bottom: 0;
    }
  }
}

.exp-parent,
.edu-parent {
  font-weight: 600;
  color: #374151 !important;
}

/* Subitems anidados en educación */
.education-subitems {
  list-style: none;
  padding: 0;
  margin: 8px 0 12px 20px;
  
  li {
    position: relative;
    padding-left: 20px;
    margin-bottom: 6px;
    font-family: 'Poppins', sans-serif;
    font-size: 13px;
    line-height: 1.5;
    color: #6B7280;
    
    &:before {
      content: '◦';
      position: absolute;
      left: 0;
      color: #63071E;
      font-weight: normal;
    }
    
    &:last-child {
      margin-bottom: 0;
    }
  }
}

/* Fallback Description */
.member-description-section {
  margin-top: 16px;
}

.member-description-text {
  font-family: 'Poppins', sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.7;
  color: #374151;
  margin: 0;
  text-align: justify;
}

/* Responsive */
@media (max-width: 600px) {
  .modal-sticky-header {
    padding-top: 12px;
  }

  .member-modal-title {
    font-size: 14px;
    line-height: 1.2;
    word-break: break-word;
  }
  
  .member-modal-subtitle {
    font-size: 11px;
    line-height: 1.4;
  }

  .icon-container-modal {
    width: 46px;
    height: 46px;
  }

  .section-title {
    font-size: 15px;
  }

  .prefacio-texto {
    font-size: 14px;
  }

  .prefacio-bullets li,
  .experience-list li,
  .education-list li {
    font-size: 13px;
  }

  .member-description-text {
    font-size: 14px;
  }

  .v-card-title {
    padding: 16px !important;
    padding-bottom: 8px !important;
  }

  .v-card-text {
    padding: 16px !important;
    padding-top: 8px !important;
  }
}
</style>
