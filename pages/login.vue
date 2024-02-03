<template>
    <NuxtLayout name="authentication">
        <div class="block-content">
            <div class="">
                <div class="flex">
                <div class="surface-section w-full md:w-6 p-6 md:p-8">
                    <div class="mb-5">
                    <img src="/images/blocks/logos/hyper.svg" alt="Image" height="50" class="mb-3">
                    <div class="text-900 text-3xl font-medium mb-3">Welcome Back</div>
                    <span class="text-600 font-medium mr-2">Don't have an account?</span>
                     <NuxtLink class="font-medium no-underline text-blue-500 cursor-pointer" to="/register">Create today!</NuxtLink>
                    </div>
                    <div>
                    <label for="email2" class="block text-900 font-medium mb-2">Email</label>
                    <input class="p-inputtext p-component w-full mb-3 p-3" data-pc-name="inputtext" data-pc-section="root" id="email2" type="text" placeholder="Email address">
                    <label for="password2" class="block text-900 font-medium mb-2">Password</label>
                    <input class="p-inputtext p-component w-full mb-3 p-3" data-pc-name="inputtext" data-pc-section="root" id="password2" type="password" placeholder="Password">
                    <div class="flex align-items-center justify-content-between mb-6">
                        <div class="flex align-items-center">
                        <div class="p-checkbox p-component mr-2" data-pc-name="checkbox" data-pc-section="root" id="rememberme2">
                            <div class="p-hidden-accessible" data-pc-section="hiddeninputwrapper" data-p-hidden-accessible="true">
                            <input type="checkbox" data-pc-section="hiddeninput">
                            </div>
                            <div class="p-checkbox-box" data-pc-section="input" data-p-highlight="false" data-p-disabled="false" data-p-focused="false">
                            <!---->
                            </div>
                        </div>
                        <label for="rememberme2">Remember me</label>
                        </div>
                        <a class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot password?</a>
                    </div>
                    <button class="p-button p-component w-full p-3" type="button" aria-label="Sign In" data-pc-name="button" data-pc-section="root" data-pd-ripple="true">
                        <span class="p-button-icon p-button-icon-left pi pi-user" data-pc-section="icon"></span>
                        <span class="p-button-label" data-pc-section="label">Sign In</span>
                        <!---->
                        <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
                    </button>
                    </div>
                </div>
                <div class="hidden md:block w-6 bg-no-repeat bg-cover" style="background-image: url(/images/food.png);"></div>
                </div>
            </div>
        <!---->
        </div>
    </NuxtLayout>
</template>

<script setup lang="ts">
    import { useToast } from "primevue/usetoast";
    import { storeToRefs } from "pinia";
    import { useAuthStore } from "~/stores/auth";

   

    const toast = useToast();
    const authStore = useAuthStore()
    const email = storeToRefs(authStore).login_email
    const password = storeToRefs(authStore).login_password
    // const employeeData = storeToRefs(authStore).employeeData
    // const employee_id = storeToRefs(authStore).employee_id
    const isLoading = ref(false);

    const goToRegister = async () => {

        navigateTo('/register')
        
    }

    const login = async ()=>{
        //Load animation
        isLoading.value = true;
        let result = await authStore.login()
            console.log("result rangu iri")
            console.log(result)

            //On login success
            if(result.data.success){
                //Get JWT token
                const token = result.data.token;
                navigateTo('/')
                // window.location.href = "/";
            }else {
                isLoading.value = false;
                toast.add({severity:'warn', summary: 'Warning Message', detail: result.data.message, life: 6000});
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