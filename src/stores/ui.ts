import { defineStore } from 'pinia';
import { ref } from "vue"

export const useUIStore = defineStore('UI', () => {
  const isMenuOpened = ref(false);

  const OPEN_OR_CLOSE_MENU = () => {
    isMenuOpened.value = !isMenuOpened.value;
  };

 
  return {
    isMenuOpened,
    OPEN_OR_CLOSE_MENU,

  };
});