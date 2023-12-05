<template>
    <form class="space-y-5" action="#" method="POST">
        <div>
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                <input
                    v-model.lazy="email"
                    id="email"
                    name="email"
                    type="email"
                    autocomplete="email"
                    required="true"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            <p v-show="isEmailNotValid" class="absolute text-sm text-rose-600 ml-1">Provide valid email</p>
        </div>

        <div>
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                <input
                    v-model.lazy="password"
                    id="password"
                    name="password" 
                    type="password"
                    autocomplete="current-password" 
                    required="true"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            <p v-show="isPasswordNotValid" class="absolute text-sm text-rose-600 ml-1">Provide valid password</p>

        </div>

        <div class="flex items-center justify-between">
            <div class="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                <label for="remember-me" class="ml-3 block text-sm leading-6 text-gray-900">Remember me</label>
            </div>

            <div class="text-sm leading-6">
                <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
            </div>
        </div>

        <div>
            <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
        </div>
    </form>
</template>

<script lang="ts" setup>
import { emailValidator } from '@/utils/validators/emailValidator';
import { passwordValidator } from '@/utils/validators/passwordValidator';
import {ref, computed} from "vue"




const email = ref('')
// const isEmailValid = ref(true)

const isEmailNotValid = computed(() => {
    const isEmailValid = emailValidator(email.value)
    if(email.value.length === 0) return false
    return !isEmailValid
})



const password = ref('')

const isPasswordNotValid = computed(() => {
    console.log(password.value)
    const isPasswordValid = passwordValidator(password.value)
    if(password.value.length === 0) return false
    return !isPasswordValid
})


</script>