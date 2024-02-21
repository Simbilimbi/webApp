<template>
    <NuxtLayout name="dashboard">
        <section class="section">
            <div class="container-fluid pt-5">
                <div class="surface-card p-4 shadow-2 border-round">
                    <div class="font-medium text-3xl text-900 mb-3">Today's Meals</div>
                    <div class="text-500 mb-5">Egestas sed tempus urna et pharetra pharetra massa massa ultricies.</div>
                    <ul class="list-none p-0 m-0 border-top-1 border-300">
                      <li class="flex align-items-center py-3 px-2 flex-wrap surface-ground">
                        <div class="text-500 w-full md:w-2 font-medium">Calories Remaining</div>
                        <div class="text-900 w-full md:w-10">2 300 - 0 =  2 300</div>
                      </li>
                      <li class="flex align-items-center py-3 px-2 flex-wrap surface-ground">
                        <div class="text-500 w-full md:w-2 font-medium">Meals</div>
                        <div class="text-900 w-full md:w-10">
                          <div class="grid mt-0 mr-0">
                            <div class="col-12 md:col-6">
                              <div class="p-3 border-1 surface-border border-round surface-card">
                                <div class="text-900 mb-2">
                                  <i class="pi pi-github mr-2"></i>
                                  <span class="font-medium" style="display: flex; justify-content: space-between;">
                                    <span>Breakfast</span>
                                    <span>{{ 0 }}</span>
                                  </span>
                                </div>
                                <div class="text-700" >
                                  <Button label="Add Food" @click="visible=true" severity="help" outlined />
                                </div>
                              </div>
                            </div>
                            <div class="col-12 md:col-6">
                              <div class="p-3 border-1 surface-border border-round surface-card">
                                <div class="text-900 mb-2">
                                  <i class="pi pi-github mr-2"></i>
                                  <span class="font-medium" style="display: flex; justify-content: space-between;">
                                    <span>Lunch</span>
                                    <span>{{ 0 }}</span>
                                  </span>
                                </div>
                                <div class="text-700">
                                  <Button label="Add Food" @click="visible=true" severity="help" outlined />
                                </div>
                              </div>
                            </div>
                            <div class="col-12 md:col-6">
                              <div class="p-3 border-1 surface-border border-round surface-card">
                                <div class="text-900 mb-2">
                                  <i class="pi pi-github mr-2"></i>
                                  <span class="font-medium" style="display: flex; justify-content: space-between;">
                                    <span>Dinner</span>
                                    <span>{{ 0 }}</span>
                                  </span>
                                </div>
                                <div class="text-700">
                                  <Button label="Add Food" @click="visible=true" severity="help" outlined />
                                </div>
                              </div>
                            </div>
                            <div class="col-12 md:col-6">
                              <div class="p-3 border-1 surface-border border-round surface-card">
                                <div class="text-900 mb-2">
                                  <i class="pi pi-github mr-2"></i>
                                  <span class="font-medium" style="display: flex; justify-content: space-between;">
                                    <span>Snacks</span>
                                    <span>{{ 0 }}</span>
                                  </span>
                                </div>
                                <div class="text-700">
                                  <Button label="Add Food" @click="visible=true" severity="help" outlined />
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>
                      </li>
                      <li class="flex align-items-center py-3 px-2 flex-wrap">
                          <div class="text-500 w-full md:w-2 font-medium">Complete Day Log</div>
                          <div class="text-900 w-full md:w-10">
                            <Button label="Submit" severity="secondary" text />
                            
                          </div>
                        </li>
                    </ul>
                </div>
            </div>
            <Dialog v-model:visible="visible" modal header="Calorie and Macro Goal" :style="{ width: '25rem' }">
                          <span class="p-text-secondary block mb-5">Update your information.</span>
                          <div class="align-items-center gap-3 mb-3">
                              <label for="username" class="font-semibold w-6rem">Calories</label>
                              <InputText id="username" class="" autocomplete="off" />
                          </div>
                          
                          <div class="flex justify-content-end gap-2">
                              <Button type="button" label="Cancel" severity="secondary" @click="visible = false"></Button>
                              <Button type="button" label="Save" @click="visible = false"></Button>
                          </div>
                </Dialog>
         </section>
    </NuxtLayout>
  </template>
  
  <script setup lang="ts">

  const visible= ref(false)

onMounted(() => {
    chartData.value = setChartData();
    chartOptions.value = setChartOptions();
});

const chartData = ref();
const chartOptions = ref();

const setChartData = () => {
    return {
        labels: ['Fats', 'Carbs', 'Proteins', ],
        datasets: [
            {
                
                data: [540, 325, 702],
                backgroundColor: ['rgba(249, 115, 22, 0.2)', 'rgba(6, 182, 212, 0.2)', 'rgb(107, 114, 128, 0.2)', 'rgba(139, 92, 246 0.2)'],
                borderColor: ['rgb(249, 115, 22)', 'rgb(6, 182, 212)', 'rgb(107, 114, 128)', 'rgb(139, 92, 246)'],
                borderWidth: 1
            }
        ]
    };
};
const setChartOptions = () => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    return {
        plugins: {
            legend: {
                labels: {
                    color: textColor
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder
                }
            },
            y: {
                beginAtZero: true,
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder
                }
            }
        }
    };
}
 
  //    import { useToast } from "primevue/usetoast";
  //    import { storeToRefs } from "pinia";
  //   //  import {useAdminStore} from "~/stores/admin"
  //    import moment from "moment";
  
    
  
  //    // definePageMeta({ 
  //    //     middleware: ["auth"]
  //    // });
  // const toast = useToast();
  // const selectGender = ref()
  // const gender1 = ref(["FEMALE","MALE"]);
  // const user_type = ref(["ADMIN","HR_OFFICER","HR_MANAGER","HR_DIRECTOR","FINANCE"])
  // const title_options = ref(["Mr","Mrs","Ms"])
  // const adminStore = useAdminStore()
  const addLineItem = ref(false)
  const food_name = ref()
  const fat_amount = ref()
  const protein_amount = ref()
  const carbs_amount = ref()
  const food_image = ref
  // const users = storeToRefs(adminStore).users
  // const name = storeToRefs(adminStore).name
  // const surname = storeToRefs(adminStore).surname
  // const username = storeToRefs(adminStore).username
  // const email = storeToRefs(adminStore).email
  // const phone = storeToRefs(adminStore).phone
  // const gender = storeToRefs(adminStore).gender
  // const title = storeToRefs(adminStore).title
  // const age = storeToRefs(adminStore).age
  // const accountTypes = storeToRefs(adminStore).profile
  // const password = storeToRefs(adminStore).password
  // const cost_centers = storeToRefs(adminStore).centers
  // const selected_center = storeToRefs(adminStore).selected_center
  // const commodities = storeToRefs(adminStore).cost_commodities
  // const selectedCommodities = storeToRefs(adminStore).selectedCommodities
  
  // onMounted( async () => {
  //   let cost_centers = await adminStore.getAllCost()
  //   let users  = await adminStore.getAllUsers()
  // })
  // const register = async () =>{
  
  // let result = await adminStore.registerUser();
  // console.log ("my result")
  // console.log(result.data)
  // console.log(result.data.success)
  // if(result.data.success){
  //        addLineItem.value = false
  //        toast.add({severity:'success', summary: 'You are registered', detail:'You will be notified once your account is activated', life: 3000});
  //       //  navigateTo('/login')
  
  //     }
  //     else{
  
  //         toast.add({severity:'warn', summary: 'Error!', detail:result.data.message, life: 3000});
       
  //     }
  // } 
  
  // const selectCommodityCodes = async (value) => {
  //   selectedCommodities.value = null
  //   let result = await adminStore.getManySelectedCommodities(value)
  
  // }
  
   
  
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