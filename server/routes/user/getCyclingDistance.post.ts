import { prisma } from "~~/prisma/db";
import nodemailer from "nodemailer";
import * as dotenv from 'dotenv'
import nuxtConfig from "~~/nuxt.config";
import bcrypt from "bcrypt";

export default defineEventHandler(async (event) => {
  const response = {};
  const {} = await readBody(event);

  try {
    const currentDate = new Date();
    const currentDay = currentDate.getDay();
    console.log('cc', currentDay)
    const weekStart = new Date(currentDate);
    weekStart.setDate(currentDate.getDate() - currentDay);
    weekStart.setHours(0, 0, 0, 0); // Set the time to 00:00:00.000
    const weekEnd = new Date(currentDate);
    weekEnd.setDate(currentDate.getDate() + (6 - currentDay));
    console.log('weekstart is : ', weekStart)

    const distanceCycled = await prisma.cycling.findMany({
      where: {
      created_at: {
          gte: weekStart,
          lte: weekEnd
      }
      }

    });

    const distanceRan = await prisma.running.findMany({
      where: {
        created_at: {
          gte: weekStart,
          lte: weekEnd
        }
      }

    });
    response['distanceCycled'] = distanceCycled;
    response['distanceRan'] = distanceRan;
    response['success'] = true;


  } catch (error) {
    response['success'] = false;
    response['message'] = error.toString();
  }

  return response;
});