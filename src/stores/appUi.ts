import { defineStore } from 'pinia';
import { ref } from "vue"

export const useAppUIStore = defineStore('appUI', () => {
  const isNavigationMenuOpen = ref(false);


  const OPEN_NAVIGATION_MENU =() => {
    isNavigationMenuOpen.value = true;
  }  
  const CLOSE_NAVIGATION_MENU =() => {
    isNavigationMenuOpen.value = false;
  }
  const OPEN_OR_CLOSE_NAVIGATION_MENU = () => {
    isNavigationMenuOpen.value = !isNavigationMenuOpen.value;
  }


  return {
    isNavigationMenuOpen,
    CLOSE_NAVIGATION_MENU,
    OPEN_NAVIGATION_MENU,
    OPEN_OR_CLOSE_NAVIGATION_MENU
  };
});