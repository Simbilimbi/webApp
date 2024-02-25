import { prisma } from "~~/prisma/db";
import nodemailer from "nodemailer";
import * as dotenv from 'dotenv'
import nuxtConfig from "~~/nuxt.config";
import bcrypt from "bcrypt";

export default defineEventHandler(async (event)=>{
    const response = {};
    

    const { data:{user_id,name} } = await readBody(event);
    try {
    
        const createMeal = await prisma.meal.create({
            data: {
                user_id: user_id,
                name: name,
                
                
                
                
            }
        });
        response['registered'] = createMeal
        response['success'] = true

  
      } catch (error) {
        response['success'] = false
        response['message'] = error.toString()
      };
    
   
   
    return response;
});