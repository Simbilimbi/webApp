import { prisma } from "~~/prisma/db";
import nodemailer from "nodemailer";
import * as dotenv from 'dotenv'
import nuxtConfig from "~~/nuxt.config";
import bcrypt from "bcrypt";

export default defineEventHandler(async (event)=>{
    const response = {};
    

    const { data:{calories,user_id ,proteins,fats} } = await readBody(event);
    try {
    
        const setGoal = await prisma.goal.create({
            data: {
                user_id: user_id,
               
                calories: calories,
                
            }
        });
        response['goal'] = setGoal
        response['success'] = true

  
      } catch (error) {
        response['success'] = false
        response['message'] = error.toString()
      };
    
   
   
    return response;
});