import { prisma } from "~~/prisma/db";
import nodemailer from "nodemailer";
import * as dotenv from 'dotenv'
import nuxtConfig from "~~/nuxt.config";
import bcrypt from "bcrypt";

export default defineEventHandler(async (event)=>{
    const response = {};
    

    const { data:{user_id,running} } = await readBody(event);
    try {
    
        const createMeal = await prisma.running.create({
            data: {
                user_id: user_id,
                distance: parseFloat(running),
                
                
                
                
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