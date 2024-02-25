import { prisma } from "~~/prisma/db";
import nodemailer from "nodemailer";
import * as dotenv from 'dotenv'
import nuxtConfig from "~~/nuxt.config";
import bcrypt from "bcrypt";

export default defineEventHandler(async (event)=>{
    const response = {};
    

    const { data:{id,food_id} } = await readBody(event);
    try {
    
        const updateMeal = await prisma.meal.update({
            where:{
                id: id
            },
            data: {
                food :{
                  connect: { id: food_id}
                }  
            }
        });
        response['updatedMeal'] = updateMeal
        response['success'] = true

  
      } catch (error) {
        response['success'] = false
        response['message'] = error.toString()
      };
    
   
   
    return response;
});