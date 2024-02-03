<template>
  <div>
    <aside class="sidebar-nav-wrapper">
      <div @click="goToHome()" class="navbar-logo">
        <img width="180"  alt="logo" style="margin-top: 10%; margin-bottom: 5px;">
      </div>
      <nav  class="sidebar-nav">
        
        
      </nav>
      <div class="promo-box">
        <h3>OACEY</h3>
        <p>{{currentYear()}}</p>
      </div>
    </aside>
    <div class="overlay"></div>
  </div>
</template>

<script setup lang="ts">
    import moment from 'moment';
    import { useToast } from "primevue/usetoast";
    import {useAuthStore} from "~~/stores/auth"
    import {FilterMatchMode,FilterOperator} from 'primevue/api';
    import { storeToRefs } from "pinia";

    const toast:any = useToast();
    const authStore:any = useAuthStore();

    const first_name = ref<string>();
    const last_name = ref<string>();
    const id = storeToRefs(authStore).id
    const id2 = ref(authStore.id)
    const role = ref<string>();
    console.log("hb",role.value,id.value,id2.value)

  const goToHome =async () => {

    navigateTo('/')
    
  }

  const currentYear = () => {

    let current_year = moment().year()
    return current_year
  }
  onMounted(async ()=>    {
    
    let result = authStore.me().then((data)=> {
      console.log(data)
      id.value = data?.user?.id
    })
  });

//  const admin_menus = ref([
//             {
//                 key: '1',
//                 label: 'Admin Menu',
//                 icon: 'pi pi-fw pi-cog',
//                 items: [{
//                         key: '1_0',
//                         label: 'Register Users',
//                         icon: 'pi pi-fw pi-user-plus',
//                         to: '/admin/register'
//                     },
//                     {
//                         key: '1_1',
//                         label: 'Create Routing',
//                         icon: 'pi pi-fw pi-arrows-h',
//                         to: '/admin/createRouting'
//                     },
//                     {
//                         key: '1_2',
//                         label: 'Create Companies',
//                         icon: 'pi pi-fw pi-arrows-h',
//                         to: '/admin/createCompanies'
//                     }
//                 ]
//             },
           
//         ]);

  

  
 
 ;
  
       
        (async ()=>{
        let userData:any = await authStore.me().then(userData =>{
            console.log("myuser data"),
            console.log("my userData object",userData)
            let myArray2 = []
            if (userData && userData.user && userData.user.company_access && userData.user.company_access[0] && userData.user.company_access[0].access_list && userData.user.company_access[0].access_list.length > 0) 
                {
                myArray2 = userData.user.company_access[0].access_list;
                }
            first_name.value = userData.user.first_name;
            last_name.value = userData.user.last_name;
            if (userData && userData.user && userData.user.profile) {
                role.value = userData.user.profile;
                }
            });

        })();
      
  const logout = async () => {
  const result = await authStore.logout();

  if(result.success){
    window.location.href = "/login";
    if(!process.server){
      localStorage.userData = "{}";
    }
  }
}
</script>

<style>
  .p-datepicker.p-component {
    width: 350px;
    height: 450px; 
  }

  .sidebar-nav-wrapper {
    overflow: hidden !important;
  }
  nav.sidebar-nav {
    margin: 5px;
  }
  .p-panelmenu .p-panelmenu-header .p-panelmenu-header-content .p-panelmenu-header-action {
    padding: 1.25rem;
    font-weight: 500;
    font-size: 14px;
    color: black;
 }
</style>