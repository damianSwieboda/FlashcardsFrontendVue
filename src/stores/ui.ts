import { defineStore } from 'pinia';
import { ref } from "vue"




export const useUIStore = defineStore('UI', () => {
  const isMenuOpen = ref(false);
  const isPageScrolled = ref(false)


  const OPEN_OR_CLOSE_MENU = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };
  const PAGE_IS_SCROLLED = () => {
    isPageScrolled.value = true
  }
  const PAGE_IS_NOT_SCROLLED = () => {
    isPageScrolled.value = false
  }

  return {
    isMenuOpen,
    isPageScrolled,
    OPEN_OR_CLOSE_MENU,
    PAGE_IS_SCROLLED,
    PAGE_IS_NOT_SCROLLED
  };
});