import { defineStore } from 'pinia';
import { ref } from "vue"




export const useUIStore = defineStore('UI', () => {
  const isNavigationMenuOpen = ref(false);
  const isUserMenuOpen = ref(false)
  const isPageScrolled = ref(false)


  const OPEN_OR_CLOSE_NAVIGATION_MENU = () => {
    isNavigationMenuOpen.value = !isNavigationMenuOpen.value;
  };
  const PAGE_IS_SCROLLED = () => {
    isPageScrolled.value = true
  }
  const PAGE_IS_NOT_SCROLLED = () => {
    isPageScrolled.value = false
  }

  return {
    isNavigationMenuOpen,
    isUserMenuOpen,
    isPageScrolled,
    OPEN_OR_CLOSE_NAVIGATION_MENU,
    PAGE_IS_SCROLLED,
    PAGE_IS_NOT_SCROLLED
  };
});