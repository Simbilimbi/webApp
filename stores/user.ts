import { defineStore } from 'pinia';
import axios from 'axios';

export const useUserStore = defineStore('user', {
    state: ()=>({
       
        
    }),
    getters: {},
    actions: {
        async  addFood(info){
            var data = JSON.stringify({
                "data": info,
            });
            var config = {
                method: 'post',
                url: '/user/createFoodItems',
                headers: { 
                    'Content-Type': 'application/json'
                },
                data: data
            };

            const result: any = await axios(config).then(function (response) {
                return {
                    data: response.data,
                    success: true
                 }
            })
            .catch(function (error) {
                console.log(error);
                return {
                    success: false
                 }
            });
           
            console.log("mvbilimbi football club",result)
            return result;
        },
        async  createMeal(info){
            var data = JSON.stringify({
                "data": info,
            });
            var config = {
                method: 'post',
                url: '/user/createMeal',
                headers: { 
                    'Content-Type': 'application/json'
                },
                data: data
            };

            const result: any = await axios(config).then(function (response) {
                return {
                    data: response.data,
                    success: true
                 }
            })
            .catch(function (error) {
                console.log(error);
                return {
                    success: false
                 }
            });
           
            console.log("mvbilimbi football club",result)
            return result;
        },
        async  createGoal(info){
            var data = JSON.stringify({
                "data": info,
            });
            var config = {
                method: 'post',
                url: '/user/createGoal',
                headers: { 
                    'Content-Type': 'application/json'
                },
                data: data
            };

            const result: any = await axios(config).then(function (response) {
                return {
                    data: response.data,
                    success: true
                 }
            })
            .catch(function (error) {
                console.log(error);
                return {
                    success: false
                 }
            });
           
            console.log("mvbilimbi football club",result)
            return result;
        },
        async  updateGoal(info){
            var data = JSON.stringify({
                "data": info,
            });
            var config = {
                method: 'post',
                url: '/user/updateGoal',
                headers: { 
                    'Content-Type': 'application/json'
                },
                data: data
            };

            const result: any = await axios(config).then(function (response) {
                return {
                    data: response.data,
                    success: true
                 }
            })
            .catch(function (error) {
                console.log(error);
                return {
                    success: false
                 }
            });
           
            console.log("mvbilimbi football club",result)
            return result;
        },
        async  getGoal(){
           
            var config = {
                method: 'post',
                url: '/user/getGoal',
                headers: { 
                    'Content-Type': 'application/json'
                },
            
            };

            const result: any = await axios(config).then(function (response) {
                return {
                    data: response.data,
                    success: true
                 }
            })
            .catch(function (error) {
                console.log(error);
                return {
                    success: false
                 }
            });
           
            console.log("mvbilimbi football club",result)
            return result;
        },
        async  getMeals(){
            
            var config = {
                method: 'post',
                url: '/user/getMeals',
                headers: { 
                    'Content-Type': 'application/json'
                }
            };

            const result: any = await axios(config).then(function (response) {
                return {
                    data: response.data,
                    success: true
                 }
            })
            .catch(function (error) {
                console.log(error);
                return {
                    success: false
                 }
            });
           
            console.log("mvbilimbi football club",result)
            return result;
        },
        async  getAllFooditems(){
            
            var config = {
                method: 'post',
                url: '/user/getAllFoodItems',
                headers: { 
                    'Content-Type': 'application/json'
                },
    
            };

            const result: any = await axios(config).then(function (response) {
                return {
                    data: response.data,
                    success: true
                 }
            })
            .catch(function (error) {
                console.log(error);
                return {
                    success: false
                 }
            });
           
            console.log("mvbilimbi football club",result)
            return result;
        },
        async  updateMeal(info){
            var data = JSON.stringify({
                "data": info,
            });
            var config = {
                method: 'post',
                url: '/user/updateMeal',
                headers: { 
                    'Content-Type': 'application/json'
                },
                data: data
            };

            const result: any = await axios(config).then(function (response) {
                return {
                    data: response.data,
                    success: true
                 }
            })
            .catch(function (error) {
                console.log(error);
                return {
                    success: false
                 }
            });
           
            console.log("mvbilimbi football club",result)
            return result;
        },
        async  getBreakFastMeal(){
            
            var config = {
                method: 'post',
                url: '/user/getBreakFastMeal',
                headers: { 
                    'Content-Type': 'application/json'
                }
            };

            const result: any = await axios(config).then(function (response) {
                return {
                    data: response.data,
                    success: true
                 }
            })
            .catch(function (error) {
                console.log(error);
                return {
                    success: false
                 }
            });
           
            console.log("mvbilimbi football club",result)
            return result;
        },
        async  getLunchMeal(){
            
            var config = {
                method: 'post',
                url: '/user/getLunchMeal',
                headers: { 
                    'Content-Type': 'application/json'
                }
            };

            const result: any = await axios(config).then(function (response) {
                return {
                    data: response.data,
                    success: true
                 }
            })
            .catch(function (error) {
                console.log(error);
                return {
                    success: false
                 }
            });
           
            console.log("mvbilimbi football club",result)
            return result;
        },
        async  getDinnerMeal(){
            
            var config = {
                method: 'post',
                url: '/user/getDinnerMeal',
                headers: { 
                    'Content-Type': 'application/json'
                }
            };

            const result: any = await axios(config).then(function (response) {
                return {
                    data: response.data,
                    success: true
                 }
            })
            .catch(function (error) {
                console.log(error);
                return {
                    success: false
                 }
            });
           
            console.log("mvbilimbi football club",result)
            return result;
        },
        async  getSnacksMeal(){
            
            var config = {
                method: 'post',
                url: '/user/getSnacks',
                headers: { 
                    'Content-Type': 'application/json'
                }
            };

            const result: any = await axios(config).then(function (response) {
                return {
                    data: response.data,
                    success: true
                 }
            })
            .catch(function (error) {
                console.log(error);
                return {
                    success: false
                 }
            });
           
            console.log("mvbilimbi football club",result)
            return result;
        },
        async  getTodayMeals(){
            
            var config = {
                method: 'post',
                url: '/user/getTodayMeals',
                headers: { 
                    'Content-Type': 'application/json'
                }
            };

            const result: any = await axios(config).then(function (response) {
                return {
                    data: response.data,
                    success: true
                 }
            })
            .catch(function (error) {
                console.log(error);
                return {
                    success: false
                 }
            });
           
            console.log("mvbilimbi football club",result)
            return result;
        },
        async  getMonthlyMeals(){
            
            var config = {
                method: 'post',
                url: '/user/getMonthlyMeals',
                headers: { 
                    'Content-Type': 'application/json'
                }
            };

            const result: any = await axios(config).then(function (response) {
                return {
                    data: response.data,
                    success: true
                 }
            })
            .catch(function (error) {
                console.log(error);
                return {
                    success: false
                 }
            });
           
            console.log("mvbilimbi football club",result)
            return result;
        },
    }
   })