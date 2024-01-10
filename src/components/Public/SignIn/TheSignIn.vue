<template>
  <div
    class="flex min-h-full flex-1 flex-col justify-center py-12 lg:py-28 sm:px-6 lg:px-8 bg-gray-50"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <!--  -->
      <h2 class="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Sign in to your account
      </h2>

      <p class="lg:mt-5 text-center text-sm text-gray-500">
        Not a member?
        {{ ' ' }}
        <router-link to="/signup">
          <a class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Create free account here
          </a></router-link
        >
      </p>
    </div>

    <div class="mt-4 sm:mx-auto sm:w-full sm:max-w-[480px]">
      <div class="bg-white px-6 py-5 lg:p-12 shadow sm:rounded-lg sm:px-12">
        <sign-in-form />

        <other-sign-in-methods />

        <terms-and-conditions-note />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import SignInForm from '@/Components/Public/SignIn/SignInForm.vue'
import OtherSignInMethods from '@/Components/Public/SignIn/OtherSignInMethods.vue'
import TermsAndConditionsNote from '@/components/Shared/TermsAndConditionsNote.vue'
</script>

<style scoped>
html {
  height: 100%;
  --tw-bg-opacity: 1;
  /* background-color: rgb(249 250 251 / var(--tw-bg-opacity)); */
}

body {
  height: 100%;
}
</style>
