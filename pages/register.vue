<template> 
    <NuxtLayout name="authentication">
        <div class="block-content">
            <div class="align-items-center flex justify-content-center lg:px-8 md:px-6 px-4 py-8 surface-ground ng-star-inserted">
                <div class="surface-card p-4 shadow-2 border-round w-full lg:w-6">
                <div class="text-center mb-5">
                    <img src="/images/blocks/logos/hyper.svg" alt="Image" height="50" class="mb-3">
                    <span class="text-600 font-medium line-height-3">Create an account?</span>
                </div>
                <div>
                    <label for="email1" class="block text-900 font-medium mb-2">Full Name</label>
                    <input id="email1" type="text" placeholder="Email address" pinputtext="" class="p-inputtext p-component p-element w-full mb-3">
                    <label for="email1" class="block text-900 font-medium mb-2">Email</label>
                    <input id="email1" type="text" placeholder="Email address" pinputtext="" class="p-inputtext p-component p-element w-full mb-3">
                    
                    <label for="password1" class="block text-900 font-medium mb-2">Password</label>
                    <input id="password1" type="password" placeholder="Password" pinputtext="" class="p-inputtext p-component p-element w-full mb-3">
                    <div class="flex align-items-center justify-content-between mb-6">
                    
                    </div>
                    <button pbutton="" pripple="" label="Sign In" icon="pi pi-user" class="p-element p-ripple w-full p-button p-component">
                        <span class="p-button-icon p-button-icon-left pi pi-user" aria-hidden="true"></span>
                        <span class="p-button-label">Sign Up</span>
                        <span class="p-ink"></span>
                        </button>
                    </div>
                </div>
            </div>
           
        </div>
        
    </NuxtLayout> 
</template>
<script setup>
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