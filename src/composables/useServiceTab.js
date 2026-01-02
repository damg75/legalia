import { ref } from 'vue'

// Estado compartido para la tab seleccionada
const selectedTabState = ref(null)

export function useServiceTab() {
  const setSelectedTab = (tab) => {
    if (tab === 'naturales' || tab === 'juridicas') {
      selectedTabState.value = tab
    }
  }

  const getSelectedTab = () => {
    return selectedTabState.value
  }

  const clearSelectedTab = () => {
    selectedTabState.value = null
  }

  return {
    selectedTabState,
    setSelectedTab,
    getSelectedTab,
    clearSelectedTab
  }
}
