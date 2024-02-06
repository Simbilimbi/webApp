<template>
  <div>
    <aside class="sidebar-nav-wrapper">
      <div @click="goToHome()" class="navbar-logo">
        <img width="180" src="/images/logo.png" alt="logo" style="margin-top: 10%; margin-bottom: 5px;">
      </div>
      <nav  class="sidebar-nav">
       
        <PanelMenu   :model="admin_menus"/>
        <PanelMenu :model="insurer_menus"/>
        <hr>
        <PanelMenu :model="assesor_menus"/>
      
      </nav>
      
      
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

  const goToHome =async () => {

    navigateTo('/')
    
  }

  const currentYear = () => {

    let current_year = moment().year()
    return current_year
  }
  onMounted(async ()=>    {
    
    let result = authStore.me().then((data)=> {
      id.value = data?.user?.id
    })
  });


  const admin_menus = ref([
            {
                key: '1',
                label: 'Food Items',
                icon:  'pi pi-reddit',
                to:'/admin/register',
                
            },
           
        ]);
        const insurer_menus = ref([
            {
                key: '2',
                label: 'Todays Nutrients',
                icon: 'pi pi-fw pi-sun',
                to:'/admin/register'
            },
           
        ]);
        const assesor_menus = ref([
            {
                key: '1',
                label: 'Macro Overview',
                icon: 'pi pi-fw pi-chart-bar',
                to:"/admin/register"
               
            },
           
        ]);

  const officer_menus = ref([
      {
          key: '1',
          label: 'Originator Menu',
          icon: 'pi pi-fw pi-align-justify',
          items: [{
                  key: '1_0',
                  label: 'Report Generation',
                  icon: 'pi pi-fw pi-chart-pie',
                  to: '/officer/generate'
              },
              {
                  key: '1_1',
                  label: 'My Reports',
                  icon: 'pi pi-fw pi-clone',
                  to: '/officer/reports'
              }
          ]
      },
      
  ]);
  const bank_menus = ref([
      {
          key: '1',
          label: 'Bank File Generation',
          icon: 'pi pi-fw pi-qrcode',
          items: [{
                  key: '1_0',
                  label: 'File Generation',
                  icon: 'pi pi-fw pi-chart-pie',
                  to: '/officer/bank_file_generation'
              }
          ]
      },
      
  ]);
  const approval_menus = ref([
      {
          key: '1',
          label: 'Approver Menu',
          icon: 'pi pi-fw pi-align-justify',
          items: [{
                  key: '1_0',
                  label: 'Pending Approvals',
                  icon: 'pi pi-fw pi-chart-pie',
                  to: '/approvals/pending'
              }
          ]
      },
      
  ]);
  const recruitment_menus = ref([
      {
          key: '1',
          label: 'E-recruitment',
          icon: 'pi pi-fw pi-align-justify',
          items: [{
                  key: '1_0',
                  label: 'Dashboard',
                  icon: 'pi pi-fw pi-chart-pie',
                  to: '/e-recruitment/dashboard'
              },
              {
                  key: '1_1',
                  label: 'Openings List',
                  icon: 'pi pi-fw pi-chart-pie',
                  to: '/e-recruitment/openings'
              }
          ]
      },
      
  ]);
  const applicant_menus = ref([
      {
          key: '1',
          label: 'E-CLAIMS',
          icon: 'pi pi-fw pi-bookmark-fill',
          items: [{
                  key: '1_0',
                  label: 'Claim Initiation',
                  icon: 'pi pi-fw pi-file',
                  to: '/client/claimInitiation'
              },
              {
                  key: '1_1',
                  label: 'My Claims',
                  icon: 'pi pi-fw pi-briefcase',
                  to: '/client/claims'
              },
              {
                  key: '1_2',
                  label: 'My Profile',
                  icon: 'pi pi-fw pi-user',
                  to: '/client/profile'
              }
          ]
      },
      
  ]);
  
       
        (async ()=>{
        let userData:any = await authStore.me().then(userData =>{
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