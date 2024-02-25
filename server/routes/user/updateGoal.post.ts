import { prisma } from "~~/prisma/db";
import nodemailer from "nodemailer";
import * as dotenv from 'dotenv'
import nuxtConfig from "~~/nuxt.config";
import bcrypt from "bcrypt";

export default defineEventHandler(async (event)=>{
    const response = {};
    

    const { data:{id,calories,user_id ,proteins,fats} } = await readBody(event);
    try {
    
        const updateGoal = await prisma.goal.update({
            where:{
                id: id
            },
            data: {
        
                fats: fats,
                proteins: proteins,
                calories: calories,
                
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