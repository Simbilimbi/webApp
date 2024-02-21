<template> 
    <NuxtLayout name="authentication">
        <div class="container-scroller">
            <div class="">
              <main style="background-color: white;">
                <div class="container-fluid page-body-wrapper full-page-wrapper p-0" >
                  <div class="content-wrapper d-flex align-items-center auth px-0" >
                    <div class="row w-100 mx-0">
                      <div class="col-lg-4 mx-auto">
                        <div class="auth-form-white text-left py-5 px-5 px-sm-5 shadow-lg rounded" style="background-color: white;">
                          <!-- <div class="brand-logo" style="width: 50%; margin-bottom: 1rem;">
                            <img src="/images/logo.svg" alt="logo" style="width: 70%;">
                          </div> -->
                          <h4 class="fw-white mb-4">Register an account</h4>
                          <form class="pt-1" >
                            <div class="grid formgrid p-fluid" style="margin-top: -1.4rem;">
                              <div class="field mb-2 col-6 md:col-6">
                                <input class="p-inputtext p-component mt-4" data-pc-name="inputtext" data-pc-section="root" type="text" placeholder="Name" required="" validate="" v-model="name">
                              </div>
                              <div class="field mb-2 col-6 md:col-6">
                                <input class="p-inputtext p-component mt-4" data-pc-name="inputtext" data-pc-section="root" type="text" placeholder="Surname" required="" validate="" v-model="surname">
                              </div>
                            </div>
                            <div class="grid formgrid p-fluid">
                              <div class="field mb-2 col-6 md:col-6">
                                <input class="p-inputtext p-component p-filled mt-3" data-pc-name="inputtext" data-pc-section="root" type="email" placeholder="Email" required="" validate="" v-model="email">
                              </div>
                              <div class="field mb-2 col-6 md:col-6">
                                <input class="p-inputtext p-component mt-3" data-pc-name="inputtext" data-pc-section="root" type="text" placeholder="Phone" required="" validate="" v-model="phone">
                              </div>
                            </div>
                            <div class="form-group mt-3 row">
                              <div class="col-md-12">
                                <input class="p-inputtext w-full p-component p-password-input" data-pc-name="inputtext" data-pc-section="input" type="password" aria-controls="pv_id_11_panel" aria-expanded="false" aria-haspopup="true" placeholder="Password" required="" v-model="password">
                                <!---->
                                <!-- <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon" aria-hidden="true" data-pc-section="showicon">
                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0.0535499 7.25213C0.208567 7.59162 2.40413 12.4 7 12.4C11.5959 12.4 13.7914 7.59162 13.9465 7.25213C13.9487 7.2471 13.9506 7.24304 13.952 7.24001C13.9837 7.16396 14 7.08239 14 7.00001C14 6.91762 13.9837 6.83605 13.952 6.76001C13.9506 6.75697 13.9487 6.75292 13.9465 6.74788C13.7914 6.4084 11.5959 1.60001 7 1.60001C2.40413 1.60001 0.208567 6.40839 0.0535499 6.74788C0.0512519 6.75292 0.0494023 6.75697 0.048 6.76001C0.0163137 6.83605 0 6.91762 0 7.00001C0 7.08239 0.0163137 7.16396 0.048 7.24001C0.0494023 7.24304 0.0512519 7.2471 0.0535499 7.25213ZM7 11.2C3.664 11.2 1.736 7.92001 1.264 7.00001C1.736 6.08001 3.664 2.80001 7 2.80001C10.336 2.80001 12.264 6.08001 12.736 7.00001C12.264 7.92001 10.336 11.2 7 11.2ZM5.55551 9.16182C5.98308 9.44751 6.48576 9.6 7 9.6C7.68891 9.59789 8.349 9.32328 8.83614 8.83614C9.32328 8.349 9.59789 7.68891 9.59999 7C9.59999 6.48576 9.44751 5.98308 9.16182 5.55551C8.87612 5.12794 8.47006 4.7947 7.99497 4.59791C7.51988 4.40112 6.99711 4.34963 6.49276 4.44995C5.98841 4.55027 5.52513 4.7979 5.16152 5.16152C4.7979 5.52513 4.55027 5.98841 4.44995 6.49276C4.34963 6.99711 4.40112 7.51988 4.59791 7.99497C4.7947 8.47006 5.12794 8.87612 5.55551 9.16182ZM6.2222 5.83594C6.45243 5.6821 6.7231 5.6 7 5.6C7.37065 5.6021 7.72553 5.75027 7.98762 6.01237C8.24972 6.27446 8.39789 6.62934 8.4 7C8.4 7.27689 8.31789 7.54756 8.16405 7.77779C8.01022 8.00802 7.79157 8.18746 7.53575 8.29343C7.27994 8.39939 6.99844 8.42711 6.72687 8.37309C6.4553 8.31908 6.20584 8.18574 6.01005 7.98994C5.81425 7.79415 5.68091 7.54469 5.6269 7.27312C5.57288 7.00155 5.6006 6.72006 5.70656 6.46424C5.81253 6.20842 5.99197 5.98977 6.2222 5.83594Z" fill="currentColor"></path>
                                </svg>
                                <span class="p-hidden-accessible" aria-live="polite" data-pc-section="hiddenaccesible" data-p-hidden-accessible="true">Strong</span> -->
                              </div>
                            </div>
                            <div class="form-group mb-3 row">
                              <div class="col-md-12" data-pc-name="password" >
                                <input class="p-inputtext w-full p-component p-password-input" data-pc-name="inputtext" data-pc-section="input" type="password" aria-controls="pv_id_12_panel" aria-expanded="false" aria-haspopup="true" placeholder="Confirm Password" required="" v-model="confirmed_password">
                                <!---->
                                <!-- <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon" aria-hidden="true" data-pc-section="showicon">
                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0.0535499 7.25213C0.208567 7.59162 2.40413 12.4 7 12.4C11.5959 12.4 13.7914 7.59162 13.9465 7.25213C13.9487 7.2471 13.9506 7.24304 13.952 7.24001C13.9837 7.16396 14 7.08239 14 7.00001C14 6.91762 13.9837 6.83605 13.952 6.76001C13.9506 6.75697 13.9487 6.75292 13.9465 6.74788C13.7914 6.4084 11.5959 1.60001 7 1.60001C2.40413 1.60001 0.208567 6.40839 0.0535499 6.74788C0.0512519 6.75292 0.0494023 6.75697 0.048 6.76001C0.0163137 6.83605 0 6.91762 0 7.00001C0 7.08239 0.0163137 7.16396 0.048 7.24001C0.0494023 7.24304 0.0512519 7.2471 0.0535499 7.25213ZM7 11.2C3.664 11.2 1.736 7.92001 1.264 7.00001C1.736 6.08001 3.664 2.80001 7 2.80001C10.336 2.80001 12.264 6.08001 12.736 7.00001C12.264 7.92001 10.336 11.2 7 11.2ZM5.55551 9.16182C5.98308 9.44751 6.48576 9.6 7 9.6C7.68891 9.59789 8.349 9.32328 8.83614 8.83614C9.32328 8.349 9.59789 7.68891 9.59999 7C9.59999 6.48576 9.44751 5.98308 9.16182 5.55551C8.87612 5.12794 8.47006 4.7947 7.99497 4.59791C7.51988 4.40112 6.99711 4.34963 6.49276 4.44995C5.98841 4.55027 5.52513 4.7979 5.16152 5.16152C4.7979 5.52513 4.55027 5.98841 4.44995 6.49276C4.34963 6.99711 4.40112 7.51988 4.59791 7.99497C4.7947 8.47006 5.12794 8.87612 5.55551 9.16182ZM6.2222 5.83594C6.45243 5.6821 6.7231 5.6 7 5.6C7.37065 5.6021 7.72553 5.75027 7.98762 6.01237C8.24972 6.27446 8.39789 6.62934 8.4 7C8.4 7.27689 8.31789 7.54756 8.16405 7.77779C8.01022 8.00802 7.79157 8.18746 7.53575 8.29343C7.27994 8.39939 6.99844 8.42711 6.72687 8.37309C6.4553 8.31908 6.20584 8.18574 6.01005 7.98994C5.81425 7.79415 5.68091 7.54469 5.6269 7.27312C5.57288 7.00155 5.6006 6.72006 5.70656 6.46424C5.81253 6.20842 5.99197 5.98977 6.2222 5.83594Z" fill="currentColor"></path>
                                </svg> -->
                                <span class="p-hidden-accessible" aria-live="polite" data-pc-section="hiddenaccesible" data-p-hidden-accessible="true">Enter a password</span>
                              </div>
                              <!---->
                            </div>
                            <div class="mt-1">
                              <Button label="Create User" @click="createUser()"/>
                            </div>
                            <div class="text-center fw-light"> Already have an account? <a href="/login" class="text-primary text-decoration-none">Login</a>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
    </main>
  </div>
</div>
        
    </NuxtLayout> 
</template>
<script setup>
import { storeToRefs } from "pinia";
import {useToast}  from "primevue/usetoast";
import { useRegisterStore } from "~/stores/register";
import Swal from "sweetalert2";
 

definePageMeta({
    middleware: ["not-auth"]
});

const toast = useToast();
const registerStore = useRegisterStore()
const name = ref()
const surname = ref ()
const email = ref()
const phone = ref()
const password = ref()
const confirmed_password = ref()

const createUser = async ()=>{
    let message = {
        name: name.value,
        surname: surname.value ,
        email : email.value ,
        phone: phone.value,
        password: password.value
    }

    let result = await registerStore.createUser(message)
    console.log('result',result)
    if (result.data.success) {
                      
        Swal.fire({
        icon: 'success',
        title: ' You have successfully been successfully registered',
        timer: 4000})
        
        navigateTo('/login')
    
    }
    else {
        toast.add({severity:'warn', summary: 'Failed', detail:'Creation Failed', life: 3000});
    }

    
}


</script>
<style>
.auth .brand-logo {
        margin-bottom: 2rem;
        text-align: center;
    }
    .auth .auth-form-light {
        background: #ffffff9c !important;
    }
    button.p-button.p-component.p-disabled.p-button-loading.p-button-loading-label-only.bg-secondary.btn.btn-bg.text-white {
        width: 100% !important;
        height: 70px !important;
    }
    .w-full.lg\:w-6.p-4.lg\:p-7.surface-card {
    margin: auto;
    }
    input.p-inputtext.p-component.w-full.mb-4 {
    height: 70px;
}
    button.p-button.p-component.bg-primary.btn.btn-bg.text-white {
        height: 70px !important;
    }
    button.p-button.p-component.bg-primary.btn.btn-bg.text-white {
        width: 100%;
        height: 50px;
    
    }
    button.p-button.p-component.w-full {
    
    }
</style>