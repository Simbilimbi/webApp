import { prisma } from "~~/prisma/db";
import nodemailer from "nodemailer";
import * as dotenv from 'dotenv'
import nuxtConfig from "~~/nuxt.config";
import bcrypt from "bcrypt";

export default defineEventHandler(async (event)=>{
    const response = {};
    

    const { data:{id,calories,user_id } } = await readBody(event);
    try {
    
        const updateGoal = await prisma.goal.update({
            where:{
                id: user_id
            },
            data: {
        
                calories: calories
                
            }
        });
        response['goal'] = updateGoal
        response['success'] = true

  
      } catch (error) {
        response['success'] = false
        response['message'] = error.toString()
      };
    
   
   
    return response;
});