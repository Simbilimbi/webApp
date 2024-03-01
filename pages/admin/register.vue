<template>
   <NuxtLayout name="dashboard">
    <section class="section">
            <div class="container-fluid pt-5">
                <div class="row">
                    <div class="text-900 font-medium text-xl mb-3">Add Food</div>
                    <div class="surface-card p-4 shadow-2 border-round p-fluid">
                        <div class="grid formgrid p-fluid">
                            <div class="field mb-4 col-12 md:col-4">
                                <Button @click="addLineItem = true" label="Add Food Item" icon="pi pi-plus" class="p-button p-component p-button-secondary p-button-outlined w-auto" outlined />
                            </div>
                            <div class="field mb-4 col-12 md:col-4">
                                <Button @click="visible = true" label="Create Meal" icon="pi pi-plus" class="p-button p-component p-button-secondary p-button-outlined w-auto" outlined />
                            </div>
                            <div class="field mb-4 col-12 md:col-4">
                                <Button @click="dialogue_goal = true" label="Set Goal" icon="pi pi-plus" class="p-button p-component p-button-secondary p-button-outlined w-auto" outlined />
                            </div>
                            
                           </div> 
                    </div>
                </div>
            </div>
        </section>
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
                                <label for="age" class="font-medium text-900">Description</label> 
                                <input class="p-inputtext" v-model="description" id="age" type="text"> 
                            </div>
                            </div>
                            <div class="surface-border border-top-1 opacity-50 mb-4 col-12"></div>
                          
                           <button class="p-button p-component w-auto" type="button" aria-label="Add Food" @click="addFood()"> <span class="p-button-icon p-button-icon-left pi pi-file"></span> <span class="p-button-label">Add Food</span>
                              <span class="p-ink" role="presentation" aria-hidden="true"></span>
                           </button>
        </Dialog>
        <Dialog v-model:visible="visible" modal header="Create Meal" :style="{ width: '25rem' }">
                        
                          <div class="align-items-center gap-3 mb-3">
                              <label for="username" class="font-semibold w-6rem">Meal</label>
                              <DropDown class="w-full" id="username" v-model="selected_meal"  :options="meal_types" autocomplete="off" />
                          </div>
                          
                          <div class="flex justify-content-end gap-2">
                              <Button type="button" label="Cancel" severity="secondary" @click="visible = false"></Button>
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
   </NuxtLayout>
 </template>
 
 <script setup lang="ts">
    import { useToast } from "primevue/usetoast";
    import { useAuthStore } from '@/stores/auth';
    import { storeToRefs } from "pinia";
    import {useUserStore} from "~/stores/user"
    import moment from "moment";
    import Swal from "sweetalert2"
   
 
   definePageMeta({ 
       middleware: ["auth"]
   });
const toast = useToast();
const userStore = useUserStore()
const authStore = useAuthStore();


onMounted(()=>{
   userStore.getAllFooditems()
  


})

const visible = ref(false)
const addLineItem = ref(false)
const dialogue_goal = ref(false)
const food_name = ref()
const fat_amount = ref()
const protein_amount = ref()
const carbs_amount = ref()
const description = ref()
const id = authStore.userData.id
const set_goal= ref()

const my_meals = ref(['BreakFast','Lunch','Dinner','Snacks'])
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
    visible.value = false   
    toast.add({severity:'success', summary: 'Meal Created', detail:'You have Successfully created a meal', life: 3000});
    selected_meal.value = null
  }
  else{
    visible.value = false
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
        description: description.value
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