import { useAuthStore } from "../stores/auth";

export default defineNuxtRouteMiddleware (async (to, from) => {
  const authStore = useAuthStore();
  const isValid: any = await authStore.me();
  console.log('bnhjn',isValid)
  if(isValid.success === false){

    return navigateTo('/login', {

      external: false

    })
  }
});