import { defineStore } from "pinia"

export const useNavigationStore = defineStore('navigation', ()=>{

    const pricingNavigation = {
        text: "Pricing", url:"/pricing"
    }
    
    const publicNavigationList = [
        {text: "Figma", url: "/"},
        {text: "Features", url: "/features"},
        {text: "About", url: "/about"},
        {text: "Account", url: "/account"},
    ]

    const userNavigationList = [
        {text: "Your Profile", url: "/profile"},
        {text: "Settings", url: "/settings"},
        {text: "Sign out", url: "/signOut"},
    ]

    return {
        pricingNavigation,
        publicNavigationList,
        userNavigationList
    }
})