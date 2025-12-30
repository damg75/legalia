import { ref } from 'vue'

export function useTeamMember() {
  const isMemberModalOpen = ref(false)
  const selectedMember = ref(null)

  const handleMemberHeaderClick = (member) => {
    selectedMember.value = member
    isMemberModalOpen.value = true
  }

  const closeMemberModal = () => {
    isMemberModalOpen.value = false
    selectedMember.value = null
  }

  return {
    isMemberModalOpen,
    selectedMember,
    handleMemberHeaderClick,
    closeMemberModal
  }
}
