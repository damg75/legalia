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
    
    <v-card-text class="pa-6 pt-2">
      <!-- Descripción -->
      <div v-if="member?.description" class="member-description-section">
        <p class="member-description-text" v-html="member.description"></p>
      </div>
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

/* Description */
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
    font-size: 20px;
  }
  
  .member-modal-subtitle {
    font-size: 14px;
  }

  .icon-container-modal {
    width: 60px;
    height: 60px;
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
