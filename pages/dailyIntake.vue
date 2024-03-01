<template>
    <NuxtLayout name="dashboard">
        <section class="section">
            <div class="container-fluid pt-5">
                <div class="surface-card p-4 shadow-2 border-round">
                  <div class="font-medium text-3xl text-900 mb-3">Today's Meals</div>
                      <div class="grid formgrid p-fluid">
                            <div class="field mb-4 col-12 md:col-4">
                                <Button @click="addLineItem = true" label="Add Food Item" icon="pi pi-plus" class="p-button p-component p-button-secondary p-button-outlined w-auto" outlined />
                            </div>
                            <div class="field mb-4 col-12 md:col-4">
                                <Button @click="visible1 = true" label="Create Meal" icon="pi pi-plus" class="p-button p-component p-button-secondary p-button-outlined w-auto" outlined />
                            </div>
                            <div class="field mb-4 col-12 md:col-4">
                                <Button @click="dialogue_goal = true" label="Set Goal" icon="pi pi-plus" class="p-button p-component p-button-secondary p-button-outlined w-auto" outlined />
                            </div>
                      </div> 
                      <ul class="list-none p-0 m-0 border-top-1 border-300">
                        <li class="flex align-items-center py-3 px-2 flex-wrap surface-ground">
                          <div class="text-500 w-full md:w-2 font-medium">Calories Remaining</div>
                          <div class="text-900 w-full md:w-10">{{ total_calories ? total_calories:0 }} - {{ calories ? calories: 0 }} = {{ remaining_calories ? remaining_calories: 0}} </div>
                        </li>
                        <li class="flex align-items-center py-3 px-2 flex-wrap surface-ground">
                          <div class="text-500 w-full md:w-2 font-medium">Meals</div>
                          <div class="text-900 w-full md:w-10">
                            <div class="grid mt-0 mr-0">
                              <div class="col-12 md:col-6" v-for="meal in meal_types">
                                <div class="p-3 border-1 surface-border border-round surface-card" >
                                  <div v-if="visible==true" class="p-dialog-mask p-component-overlay p-component-overlay-enter w-full" data-pc-section="mask" style=" height: 100%; width: 100%; left: 0px; top: 0px; display: flex; justify-content: center; align-items: center; pointer-events: auto; z-index: 1101;">
                                  <div class="p-dialog p-component" role="dialog" aria-labelledby="pv_id_20_header" aria-modal="true" resizable="false" data-pc-name="dialog" data-pc-section="root" pv_id_12="" style="display: flex; flex-direction: column; pointer-events: auto; width: 60%;" data-pd-focustrap="true">
                                    <span class="p-hidden-accessible p-hidden-focusable" tabindex="0" role="presentation" aria-hidden="true" data-p-hidden-accessible="true" data-p-hidden-focusable="true" data-pc-section="firstfocusableelement"></span>
                                    <div class="p-dialog-header w-full" data-pc-section="header"  style="height: 300%;">
                                      <div class="flex flex-column gap-2">
                                        <h1 class="m-0 text-900 font-semibold text-xl line-height-3">Select food for your Meal</h1>
                                        <span class="text-600 text-base">My Foods.</span>
                                      </div>
                                      
                                    </div>
                                    <div class="p-dialog-content" data-pc-section="content">
                                      <div class="surface-ground px-4 py-5 md:px-6 lg:px-8 w-full" style="height: 500%;">
                                        <div class="field mb-4 col-12 md:col-6"> 
                                
                                <input class="p-inputtext p-component" id="first_name" v-model="food_name" type="text">
                             </div>
                                        <div class="grid">
                                          <div class="col-12 md:col-6 lg:col-4" v-for="food in food_items">
                                            <div class="surface-card shadow-2 p-3 border-round w-full" style="height: 100%;" paginator :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]">
                                              <div class="flex justify-content-between mb-3">
                                                <div>
                                                  <span class="block text-500 font-medium mb-3">{{ food.name }}</span>
                                                </div>
                                                <div class="flex align-items-center justify-content-center bg-blue-100 border-round" style="width: 2.5rem; height: 2.5rem;">
                                                  <span @click="logFood(food.id)"><i class="pi pi-plus text-blue-500 text-xl" ></i></span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="p-dialog-footer" data-pc-section="footer">
                                      <div class="flex gap-3 justify-content-end border-top-1 surface-border pt-5">
                                        <button class="p-button p-component p-button-text" type="button" aria-label="Cancel" data-pc-name="button" data-pc-section="root" data-pd-ripple="true">
                                          <!---->
                                          <span class="p-button-label" data-pc-section="label" @click="visible=false">Cancel</span>
                                          <!---->
                                          <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
                                        </button>
                                        <button class="p-button p-component p-button-rounded" type="button" aria-label="Update" data-pc-name="button" data-pc-section="root" data-pd-ripple="true">
                                          <!---->
                                          <span class="p-button-label" data-pc-section="label">Update</span>
                                          <!---->
                                          <span role="presentation" aria-hidden="true" data-p-ink="true" data-p-ink-active="false" class="p-ink" data-pc-name="ripple" data-pc-section="root"></span>
                                        </button>
                                      </div>
                                    </div>
                                    <span class="p-hidden-accessible p-hidden-focusable" tabindex="0" role="presentation" aria-hidden="true" data-p-hidden-accessible="true" data-p-hidden-focusable="true" data-pc-section="lastfocusableelement"></span>
                                    </div>
                                  </div>

                                  <div class="text-900 mb-2">
                                    <i class="pi pi-github mr-2"></i>
                                    <span class="font-medium" style="display: flex; justify-content: space-between;">
                                      <span> {{meal.name}} </span>
                                      <span> {{meal.name =="BreakFast" ? break_meal_calories : meal.name=="Lunch" ? lunch_meal_calories: meal.name=="Dinner" ? dinner_meal_calories: meal.name=="Snacks" ? snacks_meal_calories: 0 }} </span>
                                    </span>
                                  </div>
                                  <div class="text-700" >
                                    <Button label="Add Food" @click="select_meal_food(meal)" severity="help" outlined />
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
            <Dialog v-model:visible="addLineItem" maximizable modal header="Add Food" position="center" :style="{ width: '55vw' }">
                        <div class="grid formgrid p-fluid">
                            <div class="field mb-4 col-12 md:col-6"> 
                                <label for="first_name" class="font-medium text-900">Food name</label> 
                                <input class="p-inputtext p-component" id="first_name" v-model="food_name" type="text">
                             </div>
                            <div class="field mb-4 col-12 md:col-6"> 
                                <label for="surname" class="font-medium text-900">Fats in grams</label> 
                                <input class="p-inputtext p-component" v-model="fat_amount" id="surname" type="text"> 
                            </div>
                            <div class="field mb-4 col-12 md:col-6"> 
                                <label for="username" class="font-medium text-900">Proteins in grams</label> 
                                <input class="p-inputtext p-component" v-model="protein_amount" id="username" type="text"> 
                            </div>
                            <div class="field mb-4 col-12 md:col-6"> 
                                <label for="user_email" class="font-medium text-900">Carbs in grams</label> 
                                <input class="p-inputtext p-component" v-model="carbs_amount" id="user_email" type="text"> 
                            </div>
                            
                            <div class="field mb-4 col-12 md:col-6"> 
                                <label for="age" class="font-medium text-900">Calories</label> 
                                <input class="p-inputtext" v-model="description" id="age" type="text"> 
                            </div>
                            </div>
                            <div class="surface-border border-top-1 opacity-50 mb-4 col-12"></div>
                          
                           <button class="p-button p-component w-auto" type="button" aria-label="Add Food" @click="addFood()"> <span class="p-button-icon p-button-icon-left pi pi-file"></span> <span class="p-button-label">Add Food</span>
                              <span class="p-ink" role="presentation" aria-hidden="true"></span>
                           </button>
                </Dialog>
                <Dialog v-model:visible="visible1" modal header="Create Meal" :style="{ width: '25rem' }">
                        
                          <div class="align-items-center gap-3 mb-3">
                              <label for="username" class="font-semibold w-6rem">Meal</label>
                              <DropDown class="w-full" id="username" v-model="selected_meal"  :options="meal_types1" autocomplete="off" />
                          </div>
                          
                          <div class="flex justify-content-end gap-2">
                              <Button type="button" label="Cancel" severity="secondary" @click="visible1 = false"></Button>
                              <Button type="button" label="Create" @click="createMeal"></Button>
                          </div>
                </Dialog>
                <Dialog v-model:visible="dialogue_goal" modal header="Calorie and Macro Goal" :style="{ width: '25rem' }">
                          <div class="align-items-center gap-3 mb-3">
                              <label for="username" class="font-semibold w-6rem">Calories</label>
                              <InputText id="username" v-model="set_goal" class="" autocomplete="off" />
                          </div>
                          <div class="flex justify-content-end gap-2">
                              <Button type="button" label="Cancel" severity="secondary" ></Button>
                              <Button type="button" label="Save" @click="createGoal()"></Button>
                          </div>
                </Dialog>
         </section>
    </NuxtLayout>
</template>
  
<script setup lang="ts">
 import { useToast } from "primevue/usetoast";
import { useAuthStore } from '@/stores/auth';
import { storeToRefs } from "pinia";
import {useUserStore} from "~/stores/user"
import moment from "moment";
import Swal from "sweetalert2"
import { data } from "jquery";
const toast = useToast();
const userStore = useUserStore()
const authStore = useAuthStore();
const visible= ref(false)
const meal_types = ref([])
const food_items = ref([])
const selected_meal_id = ref()
const break_meal_calories = ref()
const dinner_meal_calories = ref()
const lunch_meal_calories = ref()
const snacks_meal_calories = ref()
const calories = ref()
const remaining_calories = ref()
const total_calories = ref()

const visible1 = ref(false)
const addLineItem = ref(false)
const dialogue_goal = ref(false)
const food_name = ref()
const fat_amount = ref()
const protein_amount = ref()
const carbs_amount = ref()
const description = ref()
const id = authStore.userData.id
const set_goal= ref()

const meal_types1 = ref(['BreakFast','Lunch','Dinner','Snacks'])
const selected_meal = ref()
const resetFood = ()=>{
  fat_amount.value = null
  food_name.value =null
  protein_amount.value = null
  carbs_amount.value = null
  description.value = null
}

const createMeal =async ()=>{
  let data = {
    name: selected_meal.value,
    user_id: id
  }
  let result = await userStore.createMeal(data)
  console.log('result',result)
  if (result.data.success){
    visible1.value = false   
    toast.add({severity:'success', summary: 'Meal Created', detail:'You have Successfully created a meal', life: 3000});
    selected_meal.value = null
  }
  else{
    visible1.value = false
    toast.add({severity:'warn', summary: 'Error!', detail:'Creation Failed', life: 3000});
    selected_meal.value = null

  }
}

const createGoal = async () =>{
  let message = {
    user_id: id,
    calories: set_goal.value
  }
  let result = await userStore.createGoal(message)
  if (result.data.success){
    dialogue_goal.value = false  
    let result =  await userStore.getTodayMeals().then((data)=>{
     meal_types.value = data.data.goal
   }) 
    toast.add({severity:'success', summary: 'Goal Created', detail:'You have Successfully created a goal', life: 3000});
    set_goal.value = null
  }
  else{
    dialogue_goal.value = false
    toast.add({severity:'warn', summary: 'Error!', detail:'Creation Failed', life: 3000});
    set_goal.value = null

  }
}

const addFood = async ()=>{
    let message = {
        name: food_name.value,
        fats: fat_amount.value ,
        proteins : protein_amount.value ,
        carbs: carbs_amount.value,
        calories: Number(description.value)
    }

    let result = await userStore.addFood(message)
    console.log('result',result)
    if (result.data.success) {
        
                      
        Swal.fire({
        icon: 'success',
        title: ' Food Successfully Added',
        timer: 4000})
        resetFood()
        addLineItem.value = false
    }
   
    else {
        toast.add({severity:'warn', summary: 'Failed', detail:'Creation Failed', life: 3000});
    }

    
}

 

onMounted(async() => {
  userStore.getAllFooditems().then((data)=>{
    food_items.value = data.data.registered
  })
   let result =  await userStore.getTodayMeals().then((data)=>{
     meal_types.value = data.data.goal
   })
   
   await userStore.getGoal().then((data)=>{
    total_calories.value = data.data.goal[0].calories
   })
  let simba = await userStore.getAllFooditems()
  console.log('ddd',simba)
    
  
   
   await userStore.getBreakFastMeal().then((data)=>{
       break_meal_calories.value = data.data.goal.reduce((acc, meal) => {
        return acc + meal.food.reduce((sum, food) => {
          return sum + (parseInt(food.calories));
        }, 0);
      }, 0);        
   })

   await userStore.getLunchMeal().then((data)=>{
       lunch_meal_calories.value = data.data.goal.reduce((acc, meal) => {
        return acc + meal.food.reduce((sum, food) => {
          return sum + (parseInt(food.calories));
        }, 0);
      }, 0);        
   })

   await userStore.getDinnerMeal().then((data)=>{
       dinner_meal_calories.value = data.data.goal.reduce((acc, meal) => {
        return acc + meal.food.reduce((sum, food) => {
          return sum + (parseInt(food.calories));
        }, 0);
      }, 0);        
   })

   await userStore.getSnacksMeal().then((data)=>{
       snacks_meal_calories.value = data.data.goal.reduce((acc, meal) => {
        return acc + meal.food.reduce((sum, food) => {
          return sum + (parseInt(food.calories));
        }, 0);
      }, 0);        
   })

   calories.value = break_meal_calories.value + lunch_meal_calories.value + dinner_meal_calories.value + snacks_meal_calories.value
   remaining_calories.value = Number(total_calories.value) - calories.value
});

const select_meal_food = (meal)=>{
 visible.value = true
 selected_meal_id.value = meal.id
}


 const logFood = async (food_id)=>{

  let data = {
    id : selected_meal_id.value,
    food_id: food_id
  }

  console.log('mbilimbi',food_id)
  let result = await userStore.updateMeal(data)
  console.log('hu')

  if (result.data.success){
    
    await userStore.getMeals()
    await userStore.getBreakFastMeal().then((data)=>{
       break_meal_calories.value = data.data.goal.reduce((acc, meal) => {
        return acc + meal.food.reduce((sum, food) => {
          return sum + (parseInt(food.fats)*9) + (parseInt(food.proteins)*4) + (parseInt(food.carbs)*4);
        }, 0);
      }, 0);        
    })
    
   calories.value = break_meal_calories.value + lunch_meal_calories.value + dinner_meal_calories.value + snacks_meal_calories.value
   remaining_calories.value = Number(total_calories.value) - calories.value
    await userStore.getLunchMeal().then((data)=>{
       lunch_meal_calories.value = data.data.goal.reduce((acc, meal) => {
        return acc + meal.food.reduce((sum, food) => {
          return sum + (parseInt(food.fats)*9) + (parseInt(food.proteins)*4) + (parseInt(food.carbs)*4);
        }, 0);
      }, 0);        
   })
   
   calories.value = break_meal_calories.value + lunch_meal_calories.value + dinner_meal_calories.value + snacks_meal_calories.value
   remaining_calories.value = Number(total_calories.value) - calories.value
   await userStore.getDinnerMeal().then((data)=>{
       dinner_meal_calories.value = data.data.goal.reduce((acc, meal) => {
        return acc + meal.food.reduce((sum, food) => {
          return sum + (parseInt(food.fats)*9) + (parseInt(food.proteins)*4) + (parseInt(food.carbs)*4);
        }, 0);
      }, 0);        
   })
   
   calories.value = break_meal_calories.value + lunch_meal_calories.value + dinner_meal_calories.value + snacks_meal_calories.value
   remaining_calories.value = Number(total_calories.value) - calories.value
   await userStore.getSnacksMeal().then((data)=>{
       snacks_meal_calories.value = data.data.goal.reduce((acc, meal) => {
        return acc + meal.food.reduce((sum, food) => {
          return sum + (parseInt(food.fats)*9) + (parseInt(food.proteins)*4) + (parseInt(food.carbs)*4);
        }, 0);
      }, 0);        
   })

   remaining_calories.value = Number(total_calories.value) - calories.value
    toast.add({severity:'success', summary: 'Food Logged', detail:'Food successfully logged', life: 3000});
    visible.value = false  
  }
  else{
    visible.value = false
    toast.add({severity:'warn', summary: 'Error!', detail:'Creation Failed', life: 3000});
    

  }

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