<template>
  <div class="team-member-modal pa-4">
    <!-- Header con imagen y título -->
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
          <p class="member-modal-subtitle">{{ member?.title }}</p>
        </div>
      </div>
    </v-card-title>

    <!-- Separador -->
    <v-divider class="mx-6 divider-header"></v-divider>
    
    <v-card-text class="pa-6 pt-4">
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
            <li v-for="(exp, index) in member.fullProfile.experiencia" :key="'exp-' + index">
              {{ exp }}
            </li>
          </ul>
        </div>

        <!-- Educación -->
        <div v-if="member.fullProfile.educacion?.length" class="profile-section educacion-section">
          <h3 class="section-title">Educación</h3>
          <ul class="education-list">
            <li v-for="(edu, index) in member.fullProfile.educacion" :key="'edu-' + index">
              {{ edu }}
            </li>
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
defineProps({
  member: {
    type: Object,
    default: null
  }
})
</script>

<style scoped lang="scss">
.team-member-modal {
  width: 100%;
  font-family: 'Poppins', sans-serif;
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
  .member-modal-title {
    font-size: 18px;
  }
  
  .member-modal-subtitle {
    font-size: 13px;
  }

  .icon-container-modal {
    width: 56px;
    height: 56px;
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
