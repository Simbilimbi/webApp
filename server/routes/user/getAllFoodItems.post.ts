import { prisma } from "~~/prisma/db";
import nodemailer from "nodemailer";
import * as dotenv from 'dotenv'
import nuxtConfig from "~~/nuxt.config";
import bcrypt from "bcrypt";

export default defineEventHandler(async (event)=>{
    const response = {};
    

    const { data:{fats,name ,proteins,carbs, imageUrl} } = await readBody(event);
    try {
    
        const addFood = await prisma.foodSource.create({
            data: {
                name: name,
                fats: fats,
                proteins: proteins,
                carbs: carbs,
                imageUrl: imageUrl,  
            }
        });
        response['registered'] = addFood
        response['success'] = true

  
      } catch (error) {
        response['success'] = false
        response['message'] = error.toString()
      };
    
   
   
    return response;
});