<template>
    <NuxtLayout name="dashboard">
        <section class="section">
            <div class="container-fluid pt-5">
                <div class="row">
                    <div class="text-900 font-medium text-xl mb-3">KYC Page</div>
                    <div class="surface-card p-4 shadow-2 border-round p-fluid">
                        <div class="grid formgrid p-fluid">
                            <div class="field mb-4 col-12 md:col-12"> 
                                <label for="customer_name" class="font-medium text-900">CUSTOMER KYC</label> 
                                <DataTable :value="clients" showGridlines tableStyle="min-width: 50rem">
                                    <Column field="price" header="Full Name">
                                        <template #body="slotProps">
                                            {{slotProps.data.name}} {{slotProps.data.surname}}
                                        </template>
                                    </Column>
                                    <Column field="rating" header="Policy Name">
                                        <template #body="slotProps">
                                            {{slotProps.data.policy_number}}
                                        </template>
                                    </Column>
                                    <Column field="rating" header="Email Address">
                                        <template #body="slotProps">
                                            {{slotProps.data.email}}
                                        </template>
                                    </Column>
                                    <Column field="rating" header="Date of Birth">
                                        <template #body="slotProps">
                                            {{formatDate(slotProps.data.date_of_birth)}}
                                        </template>
                                    </Column>
                                    <Column field="rating" header="Gender">
                                        <template #body="slotProps">
                                            {{slotProps.data.gender}}
                                        </template>
                                    </Column>
                                    <Column field="rating" header="Preffered Communication">
                                        <template #body="slotProps">
                                            {{slotProps.data.preffered_communication}}
                                        </template>
                                    </Column>
                                    <Column field="rating" header="Residential Address">
                                        <template #body="slotProps">
                                            {{slotProps.data.residential_address}}
                                        </template>
                                    </Column>
                                    <Column field="rating" header="Occupation">
                                        <template #body="slotProps">
                                            {{slotProps.data.occupation}}
                                        </template>
                                    </Column>
                                    <Column field="rating" header="Industry">
                                        <template #body="slotProps">
                                            {{slotProps.data.industry}}
                                        </template>
                                    </Column>
                                    <Column field="rating" header="Next of Kin Name & Number">
                                        <template #body="slotProps">
                                            {{slotProps.data.next_of_kin_name}}({{ slotProps.data.next_of_kin_mobile_number  }})
                                        </template>
                                    </Column>
                                    <Column field="rating" header="How Did You Hear About Us">
                                        <template #body="slotProps">
                                            {{slotProps.data.how_did_you_hear_about_us}}
                                        </template>
                                    </Column>
                                </DataTable>
                            </div>
                           </div> 
                    
                    </div>
                </div>
            </div>
        </section>
    </NuxtLayout>
</template>
<script setup lang="ts">
    import { useToast } from "primevue/usetoast";
    import { storeToRefs } from "pinia";
    import moment from "moment";
    import { ref } from 'vue';
    import { useAuthStore } from "~/stores/auth";
    import { useAdminStore } from "~/stores/admin";

    const authStore = useAuthStore()
    const adminStore = useAdminStore()
    const suppliers = storeToRefs(adminStore).suppliers
    const toast = useToast()
    const addLineItem = ref<boolean>(false)
    const supplier_code = ref()
    const supplier_name = ref()
    const clients = ref()
    const postal_code = ref()
    const short_name = ref()
    const commodities = storeToRefs(adminStore).commodities
    const selectedCommodities = storeToRefs(adminStore).selectedCommodities
    
    definePageMeta({ 
        middleware: ["auth"]
    });

    onMounted( async ()=> {
        let clientss  = await adminStore.getClients().then((data) => {
            
            clients.value = data.data.users
        })
    })


   const formatDate = (dat) => {
    const inputDate = new Date(dat);

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const day = inputDate.getDate();
    const month = months[inputDate.getMonth()];
    const year = inputDate.getFullYear();

    const formattedDate = `${day} ${month} ${year}`;

    return formattedDate
   }
  
   
  
</script>
  
  <style>
    .card-style {
    background: #fff;
    box-sizing: border-box;
    padding: 25px 30px;
    height: 100%;
    position: relative;
    border: 1px solid #fff;
    box-shadow: 0px 10px 20px rgb(200 208 216 / 0%);
    border-radius: 10px;
    }
    .row.dashtop {
    margin-bottom: 30px;
    }
    .c-dashboardInfo {
    margin-bottom: 15px;
    }
    .c-dashboardInfo .wrap {
      background: #ffffff;
      box-shadow: 2px 10px 20px rgb(0 0 0 / 10%);
      border-radius: 5px;
      text-align: center;
      position: relative;
      border: solid 1px white;
      border-color: red solid 2px;
      overflow: hidden;
      padding: 40px 25px 20px;
      height: 100%;
  }
    .c-dashboardInfo__title,
    .c-dashboardInfo__subInfo {
    color: #6c6c6c;
    font-size: 1.18em;
    }
    .c-dashboardInfo span {
    display: block;
    }
    .c-dashboardInfo__count {
    font-weight: 600;
    font-size: 2.5em;
    line-height: 64px;
    color: #323c43;
    }
    .c-dashboardInfo .wrap:after {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 15px;
      content: "";
  }
  .loader{
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    z-index: 9999;
   }
  
    .c-dashboardInfo:nth-child(1) .wrap:after {
      background: linear-gradient(82.59deg, #6477c6 0%, #4a6cf7 100%);
    }
    .c-dashboardInfo:nth-child(2) .wrap:after {
      background: linear-gradient(82.59deg, #6477c6 0%, #4a6cf7 100%);
    }
    .c-dashboardInfo:nth-child(3) .wrap:after {
      background: linear-gradient(82.59deg, #6477c6 0%, #4a6cf7 100%);
    }
    .c-dashboardInfo:nth-child(4) .wrap:after {
      background: linear-gradient(82.59deg, #6477c6 0%, #4a6cf7 100%);
    }
    .c-dashboardInfo:nth-child(5) .wrap:after {
      background: linear-gradient(82.59deg, #6477c6 0%, #4a6cf7 100%);
    }
    .c-dashboardInfo__title svg {
    color: #d7d7d7;
    margin-left: 5px;
    }
    .MuiSvgIcon-root-19 {
    fill: currentColor;
    width: 1em;
    height: 1em;
    display: inline-block;
    font-size: 24px;
    transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    user-select: none;
    flex-shrink: 0;
    }
  
  </style>