<template>
   <NuxtLayout name="dashboard">
    <section class="section">
          <div class="container-fluid pt-5">
              <div  class="row" >
                <div class="text-600 font-medium text-xl mb-3 col-10">Today</div>
                <div class="col-2">
                  <Button label="Edit" @click="visible=true" severity="info" rounded />
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
                </div>
                <div  class="col-12 md:col-6" >
                    <Skeleton v-if="loading === true" class="mb-30" height="9rem" width="13rem"></Skeleton>
                    <div v-else class="card-style mb-1 row" >
                      <div class="content md:col-12  ">
                            <h3 class="mb-20 text-bold" style="font-size: 1.5rem">Calories</h3>
                            <h5 style="font-size: 1.5rem" class="text-bold "><sup class="text-gray" style="font-size: 0.8rem; margin-left: 5px;">Remaining = Goal - Food</sup></h5>
                            <ProgressBar :value="40" class="w-full"> 34 </ProgressBar>
                            <div style="display: inline-block;">
                                <div>
                                    <h6 class="mb-2 mt-7"><sup class="text-gray" style="font-size: 1.2rem; margin-left: 5px;"> <span class="pi pi-flag"></span> Base Goal {{ 3500 }} </sup> </h6>
                                </div>
                                <div>
                                    <h6> <sup class="text-gray" style="font-size: 1.2rem; margin-left: 5px;"> <span class="pi pi-reddit"></span> Food  {{ 2340 }}</sup>  </h6>
                               </div>
                      </div>
                    </div>
                  </div>
                </div>
               
                <div class="col-6 md:col-6">
                        <div class="card-style">
                            <h2>Total Macros Comparison Intake</h2>
                            <Chart type="doughnut" :data="chartData" :options="chartOptions" class="w-full md:w-30rem"  />
                        </div>
                    </div>
              </div>
          </div>
    </section>
    
   
   
   </NuxtLayout>
</template>
<script setup lang="ts">
  import { useAuthStore } from '@/stores/auth';
  const authStore = useAuthStore();
  const visible = ref(false)

definePageMeta({ 
        middleware: ["auth"]
    });

    onMounted(() => {
    chartData.value = setChartData();
    chartOptions.value = setChartOptions();
});

const chartData = ref();
const chartOptions = ref();

const setChartData = () => {
    const documentStyle = getComputedStyle(document.body);

    return {
        labels: ['Fats', 'Proteins', 'Carbs'],
        datasets: [
            {
                data: [540, 325, 702],
                backgroundColor: [documentStyle.getPropertyValue('--cyan-500'), documentStyle.getPropertyValue('--orange-500'), documentStyle.getPropertyValue('--gray-500')],
                hoverBackgroundColor: [documentStyle.getPropertyValue('--cyan-400'), documentStyle.getPropertyValue('--orange-400'), documentStyle.getPropertyValue('--gray-400')]
            }
        ]
    };
};

const setChartOptions = () => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    return {
        plugins: {
            legend: {
                labels: {
                    cutout: '10%',
                    color: textColor
                }
            }
        }
    };
};
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
   .icon-card{
    width: 110%;
  } 
  .dashboard{
    margin-right: 20px;
  }

</style>