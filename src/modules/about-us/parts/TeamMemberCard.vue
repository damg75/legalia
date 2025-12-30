<template>
  <div class="team-card-wrapper">
    <!-- Profile Image - Outside and on top -->
    <div class="profile-image-container" @click="handleHeaderClick">
      <v-img
        v-if="member.profileUrl"
        :src="member.profileUrl"
        class="profile-image"
        cover
      />
      <div v-else class="profile-placeholder">
        <v-icon size="80" color="#9CA3AF">mdi-account-circle</v-icon>
      </div>
    </div>

    <!-- Card Content -->
    <v-card class="team-card" elevation="2">
      <v-card-text class="team-card-content">
        <!-- Member Info -->
        <div class="member-header" @click="handleHeaderClick">
          <h3 class="member-name">{{ member.name }}</h3>
          <p class="member-title">{{ member.title }}</p>
        </div>
        
        <!-- Dashed Divider -->
        <div class="dashed-divider"></div>
        
        <!-- Description -->
        <p class="member-description">{{ member.description }}</p>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup>
const emit = defineEmits(['header-click'])

const props = defineProps({
  member: {
    type: Object,
    required: true,
    default: () => ({
      id: '',
      name: '',
      title: '',
      description: '',
      profileUrl: ''
    })
  }
})

const handleHeaderClick = () => {
  emit('header-click', props.member)
}
</script>

<style scoped>
.team-card-wrapper {
  position: relative;
  width: 100%;
  max-width: 400px;
  padding-top: 80px;
}

.profile-image-container {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.profile-image-container:hover {
  transform: translateX(-50%) scale(1.05);
}

.profile-image {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  object-fit: cover;
  border: 6px solid #FFFFFF;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.profile-placeholder {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background-color: #E5E7EB;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 6px solid #FFFFFF;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.team-card {
  border-radius: 16px;
  background-color: #FFFFFF;
  width: 100%;
  height: 550px;
  display: flex;
  flex-direction: column;
}

.team-card-content {
  padding: 100px 24px 32px 24px !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  overflow: hidden;
}

.dashed-divider {
  width: 100%;
  border-top: 2px dashed #D1D5DB;
  margin: 12px 0;
  flex-shrink: 0;
}

.member-header {
  cursor: pointer;
  width: 100%;
}

.member-name {
  font-family: 'Poppins', sans-serif;
  font-size: 22px;
  font-weight: 700;
  color: #1E293B;
  text-align: center;
  line-height: 1.3;
  margin-bottom: 8px;
  flex-shrink: 0;
}

.member-title {
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #6B7280;
  text-align: center;
  line-height: 1.5;
  margin-bottom: 0;
  flex-shrink: 0;
}

.member-description {
  font-family: 'Poppins', sans-serif;
  font-size: 13px;
  font-weight: 400;
  color: #4B5563;
  line-height: 1.6;
  text-align: justify;
  width: 100%;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 100%;
  padding-right: 4px;
  margin-top: 8px;
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
  transition: scrollbar-color 0.3s ease;
}

/* Scrollbar styling - minimalista y oculto por defecto */
.member-description::-webkit-scrollbar {
  width: 3px;
}

.member-description::-webkit-scrollbar-track {
  background: transparent;
}

.member-description::-webkit-scrollbar-thumb {
  background: transparent;
  border-radius: 10px;
  transition: background 0.3s ease;
}

/* Mostrar scrollbar solo al hacer hover o scroll */
.member-description:hover::-webkit-scrollbar-thumb,
.member-description:active::-webkit-scrollbar-thumb {
  background: rgba(209, 213, 219, 0.4);
}

.member-description:hover::-webkit-scrollbar-thumb:hover {
  background: rgba(156, 163, 175, 0.6);
}

/* Para Firefox */
.member-description:hover {
  scrollbar-color: rgba(209, 213, 219, 0.4) transparent;
}

.member-description:active {
  scrollbar-color: rgba(156, 163, 175, 0.6) transparent;
}

/* Responsive */
@media (max-width: 960px) {
  .team-card-wrapper {
    padding-top: 60px;
    max-width: 90%;
    margin: 0 auto;
  }

  .profile-image,
  .profile-placeholder {
    width: 120px;
    height: 120px;
    border: 4px solid #FFFFFF;
  }

  .team-card {
    height: 480px;
  }

  .team-card-content {
    padding: 70px 20px 24px 20px !important;
  }

  .member-name {
    font-size: 18px;
  }

  .member-title {
    font-size: 13px;
  }

  .member-description {
    font-size: 12px;
  }

  .dashed-divider {
    margin: 12px 0;
  }
}

@media (max-width: 600px) {
  .team-card-wrapper {
    padding-top: 50px;
  }

  .profile-image,
  .profile-placeholder {
    width: 100px;
    height: 100px;
    border: 3px solid #FFFFFF;
  }

  .team-card {
    height: 450px;
  }

  .team-card-content {
    padding: 60px 16px 20px 16px !important;
  }

  .member-name {
    font-size: 16px;
  }

  .member-title {
    font-size: 12px;
  }

  .member-description {
    font-size: 11px;
    text-align: justify;
  }

  .dashed-divider {
    margin: 10px 0;
    border-top-width: 1.5px;
  }
}
</style>
