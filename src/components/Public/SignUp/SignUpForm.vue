<template>
  <form class="space-y-6" @submit.prevent="makeCall">
    <div>
      <label for="email" class="block text-sm font-medium leading-6 text-gray-900"
        >Email address</label
      >
      <input
        v-model.lazy="email"
        id="email"
        name="email"
        type="email"
        autocomplete="email"
        required="true"
        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
      <p v-show="isEmailNotValid" class="absolute text-sm text-rose-600 ml-1">
        Provide valid email
      </p>
    </div>

    <div>
      <label for="password" class="block text-sm font-medium leading-6 text-gray-900"
        >Password</label
      >
      <input
        v-model.lazy="password"
        id="password"
        name="password"
        type="password"
        required="true"
        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
      <p v-show="isPasswordNotValid" class="absolute text-sm text-rose-600 ml-1">
        Atleast 8 characters, 1 lowercase, 1 uppercase, 1 number
      </p>
    </div>

    <div>
      <label for="repeatPassword" class="block text-sm font-medium leading-6 text-gray-900"
        >Repeat password</label
      >
      <input
        v-model.lazy="repeatPassword"
        id="repeatPassword"
        name="repeatPassword"
        type="password"
        required="true"
        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
      <p v-show="isRepeatedPasswordNotValid" class="absolute text-sm text-rose-600 ml-1">
        Provide valid repeated password
      </p>
    </div>

    <terms-and-conditions-note />

    <div>
      <button
        type="submit"
        class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Sign up
      </button>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { emailValidator } from '@/utils/validators/emailValidator'
import { passwordValidator } from '@/utils/validators/passwordValidator'
import { repeatedPasswordValidator } from '@/utils/validators/repeatedPasswordValidator'

import { ref, computed } from 'vue'
import TermsAndConditionsNote from '@/components/Shared/TermsAndConditionsNote.vue'

const email = ref('')
const password = ref('')
const repeatPassword = ref('')

const isEmailNotValid = computed(() => {
  const isEmailValid = emailValidator(email.value)
  if (email.value.length === 0) return false
  return !isEmailValid
})
const isPasswordNotValid = computed(() => {
  const isPasswordValid = passwordValidator(password.value)
  if (password.value.length === 0) return false
  return !isPasswordValid
})

const isRepeatedPasswordNotValid = computed(() => {
  const isRepeatedPasswordValid = repeatedPasswordValidator(password.value, repeatPassword.value)
  if (repeatPassword.value.length === 0) return false
  return !isRepeatedPasswordValid
})

const makeCall = async function (event: Event) {
  event.preventDefault()

  try {
    const response = await fetch('http://127.0.0.1:3000/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' // Specify content type if sending JSON data
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
        repeatPassword: repeatPassword.value
        // Include other necessary data in the request body
      })
    })

    if (response.ok) {
      // Request successful
      const data = await response.json()
      console.log('Response data:', data)
    } else {
      // Handle errors or non-successful responses
      console.error('Request failed with status:', response.status)
    }
  } catch (error) {
    console.error('Error:', error)
  }
}
</script>
