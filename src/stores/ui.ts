import { defineStore } from 'pinia';
import { ref } from "vue"

export const useUIStore = defineStore('UI', () => {
  const isNavigationMenuOpen = ref(false);
  const isUserMenuOpen = ref(false)
  const isPageScrolled = ref(false)

  const OPEN_NAVIGATION_MENU =() => {
    isNavigationMenuOpen.value = true;
  }
  const CLOSE_NAVIGATION_MENU =() => {
    isNavigationMenuOpen.value = false;
  }

  // used when page is reloaded on mobile devices
  const CLOSE_MOBILE_NAVIGATION_MENU = () => {
    if(window.innerWidth < 1024){
      isNavigationMenuOpen.value = false;
    }
  }
  const OPEN_OR_CLOSE_NAVIGATION_MENU = () => {
    isNavigationMenuOpen.value = !isNavigationMenuOpen.value;

  }
  
  const OPEN_USER_MENU = () => {
    isUserMenuOpen.value = true
  }
  const CLOSE_USER_MENU = () => {
    isUserMenuOpen.value = false
  }
  const OPEN_OR_CLOSE_USER_DESKROP_MENU = () => {
    if(window.innerWidth > 1024){
      isUserMenuOpen.value = !isUserMenuOpen.value
    }
    

  }

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
    OPEN_NAVIGATION_MENU,
    CLOSE_NAVIGATION_MENU,
    CLOSE_MOBILE_NAVIGATION_MENU,
    OPEN_OR_CLOSE_NAVIGATION_MENU,
    OPEN_USER_MENU,
    CLOSE_USER_MENU,
    OPEN_OR_CLOSE_USER_DESKROP_MENU,
    PAGE_IS_SCROLLED,
    PAGE_IS_NOT_SCROLLED,
  };
});