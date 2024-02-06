<template>
    <NuxtLayout name="dashboard">
        <section class="section">
            <div class="container-fluid pt-5">
                <div class="row">
                    <div class="text-900 font-medium text-xl mb-3">Claims</div>
                    <div class="surface-card p-4 shadow-2 border-round p-fluid">
                        <div class="grid formgrid p-fluid">
                            <div class="field mb-4 col-12 md:col-12"> 
                                <label for="customer_name" class="font-medium text-900">ALL CLAIMS</label> 
                                <DataTable :value="claims" showGridlines tableStyle="min-width: 50rem">
                                    <Column field="price" header="Full Name">
                                        <template #body="slotProps">
                                            {{slotProps.data.owner.name}} {{slotProps.data.owner.surname}}
                                        </template>
                                    </Column>
                                    <Column field="rating" header="Claim Number">
                                        <template #body="slotProps">
                                            {{slotProps.data.claim_number}}
                                        </template>
                                    </Column>
                                    <Column field="rating" header="Policy Number">
                                        <template #body="slotProps">
                                            {{slotProps.data.owner.policy_number}}
                                        </template>
                                    </Column>
                                    <Column field="rating" header="Vehicle Make">
                                        <template #body="slotProps">
                                            {{slotProps.data.vehicle_make}}
                                        </template>
                                    </Column>
                                    <Column field="rating" header="Model">
                                        <template #body="slotProps">
                                            {{slotProps.data.vehicle_model}}
                                        </template>
                                    </Column>
                                    <Column field="rating" header="Year of Manufacture">
                                        <template #body="slotProps">
                                            {{formatDate(slotProps.data.year_of_manufacture)}}
                                        </template>
                                    </Column>
                                    <Column field="rating" header="Date of Accident">
                                        <template #body="slotProps">
                                            {{formatDate(slotProps.data.date_of_accident)}}
                                        </template>
                                    </Column>
                                    <Column field="rating" header="No of Passengers">
                                        <template #body="slotProps">
                                            {{slotProps.data.persons_in_vehicle ? (slotProps.data.persons_in_vehicle.length) + 1 : 1}}
                                        </template>
                                    </Column>
                                    <Column field="rating" header="No of Injured People">
                                        <template #body="slotProps">
                                            {{slotProps.data.persons_injured ? (slotProps.data.persons_injured.length) + 1 : 1}}
                                        </template>
                                    </Column>
                                    <Column field="rating" header="Insurer">
                                        <template #body="slotProps">
                                            {{slotProps.data?.insurer?.organization ? slotProps.data?.insurer?.organization : "NOT ASSIGNED"}}
                                        </template>
                                    </Column>
                                    <Column field="rating" header="Status">
                                        <template #body="slotProps">
                                            {{slotProps.data.claim_status}}
                                        </template>
                                    </Column>
                                    <Column header="Actions">
                                        <template #body="slotProps">
                                        <SplitButton
                                            icon="pi pi-ellipsis-v"
                                            :model="[
                                                { label: 'View Detail', icon: 'pi pi-fw pi-eye', command: () => navigateTo(`/admin/claim-${slotProps.data?.id}`) },
                                                { label: 'Forward to Insurer', icon: 'pi pi-fw pi-eye', command: () => assignInsurer(slotProps.data?.id) },
                                                { label: 'View Report', icon: 'pi pi-fw pi-eye', command: () => openAttachment(slotProps.data?.report) },
                                                { label: 'Send Auth Letter to Client', icon: 'pi pi-fw pi-eye', command: () => sendAuth(slotProps.data?.id) }
                                            ]"
                                        ></SplitButton>

                                    </template>
                                   </Column>
                                </DataTable>
                            </div>
                           </div>
                           <Dialog v-model:visible="forward_modal2" modal header="Upload Authorisation Letter" :style="{ width: '75vw' }">
                            <div class="">
                                <FileUpload class="upload" name="attachment" url="/claims/authletter" @upload="onAdvancedUpload($event)" :multiple="false" accept="application/pdf" :maxFileSize="1000000">
                                    <template #empty>
                                        <p>Upload Authorisation Letter</p><br><p>Click Choose and then upload for each file</p>
                                    </template>
                                </FileUpload>
                            </div>
                            <template #footer>
                                <Button label="Cancel" icon="pi pi-times" @click="forward_modal2 = false" text />
                            </template>
                        </Dialog>
                           <Dialog v-model:visible="forward_modal" modal header="Foward to Insurer" :style="{ width: '50vw' }">
                            <div class="flex flex-wrap">
                            

                            <label for="password3" class="block text-900 font-medium mb-2">Select Insurer</label>
                            <DropDown v-model="selected_insurer" class="w-full mb-4" optionLabel="organization" optionValue="id" :options="insurers" placeholder="Select Insurer"/>
                            
                            
                            </div>
                            <template #footer>
                                <Button label="Cancel" icon="pi pi-times" @click="forward_modal = false" text />
                                <Button label="Save" @click="fowardClaim()" icon="pi pi-check" autofocus />
                            </template>
                        </Dialog>
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
    const claims = ref()
    const claim_id = ref()
    const selected_insurer = ref()
    const forward_modal = ref(false)
    const forward_modal2 = ref(false)
    const insurers = ref()
    const postal_code = ref()
    const short_name = ref()
    const commodities = storeToRefs(adminStore).commodities
    const selectedCommodities = storeToRefs(adminStore).selectedCommodities
    
    definePageMeta({ 
        middleware: ["auth"]
    });
    const onAdvancedUpload = async (event) => {
        const { attachment:{attachment_name}, success, message } = JSON.parse(event.xhr.response);
         console.log({attachment_name})
        if(success){
            let data = {
                claim_id: claim_id.value,
                attachment_name: attachment_name
            }
            let result = await adminStore.addAuthLetter(data)
            if (result?.data?.success) {
                let clientss  = await adminStore.getClaims().then((data) => {
            
                    claims.value = data.data.users
                })
            forward_modal2.value = false
                toast.add({ severity: 'success', summary: 'Authorisation successfully sent', detail: message, life: 5000 });
            } else {
                toast.add({ severity: 'warn', summary: 'Upload Failed', detail: message, life: 5000 });
            }
        }else {
            toast.add({ severity: 'warn', summary: 'Upload Failed', detail: message, life: 5000 });
        }
    };

    onMounted( async ()=> {
        let clientss  = await adminStore.getClaims().then((data) => {
            
            claims.value = data.data.users
        })
        let result:any  = await adminStore.getAllInsurers().then((data) => {
       insurers.value = data?.data.users
   })
    })
   const viewDetail = (id) => {

   }
   const openAttachment = async (arg: String) => {
        console.log("openResume",arg)
        let file_url = "./public/uploads/" + arg;
        let pdfBuffer = await adminStore.viewPDF(file_url);
        //Open the pdf in another tab
        const arr = new Uint8Array(pdfBuffer);
        const file = new Blob([arr], { type: 'application/pdf' });
        const fileURL = URL.createObjectURL(file);
        window.open(fileURL);
    };

   const assignInsurer = (id) => {
    claim_id.value = id,
    forward_modal.value = true
   }
   const sendAuth = (id) => {
    claim_id.value = id,
    forward_modal2.value = true
   }

   const fowardClaim = async () => {
      let data = {
        claim_id: claim_id.value,
        insurer_id: selected_insurer.value
      }

      let result = await adminStore.forwardToInsurer(data);
      if(result.data.success){
       addLineItem.value = false
       forward_modal.value = false
       let clientss  = await adminStore.getClaims().then((data) => {
            
            claims.value = data.data.users
        })
       toast.add({severity:'success', summary: 'You are registered', detail:'The Claim has been forwarded to Insurer', life: 3000});
      //  navigateTo('/login')

    }
    else{

        toast.add({severity:'warn', summary: 'Error!', detail:result.data.message, life: 3000});
      
    }

   }

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