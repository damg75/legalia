import { ref } from 'vue'

// Estado compartido para la tab seleccionada
const selectedTabState = ref(null)
const shouldScrollToTabs = ref(false)

export function useServiceTab() {
  const setSelectedTab = (tab, scroll = false) => {
    if (tab === 'naturales' || tab === 'juridicas') {
      selectedTabState.value = tab
      shouldScrollToTabs.value = scroll
    }
  }

  const getSelectedTab = () => {
    return selectedTabState.value
  }

  const clearSelectedTab = () => {
    selectedTabState.value = null
  }

  const getShouldScroll = () => {
    return shouldScrollToTabs.value
  }

  const clearShouldScroll = () => {
    shouldScrollToTabs.value = false
  }

  return {
    selectedTabState,
    shouldScrollToTabs,
    setSelectedTab,
    getSelectedTab,
    clearSelectedTab,
    getShouldScroll,
    clearShouldScroll
  }
}
