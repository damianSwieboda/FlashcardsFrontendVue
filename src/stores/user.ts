import { defineStore } from "pinia";
import { ref } from "vue"


export const useUserStore = defineStore("user", ()=>{

    const isSignIn = ref(false)
    
    const SIGN_IN_USER = () => {
        isSignIn.value = true
    }

    return {
        isSignIn,
        SIGN_IN_USER
    }
})