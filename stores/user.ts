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
        }
    }
   })