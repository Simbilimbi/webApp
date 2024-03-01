import { prisma } from "~~/prisma/db";
import nodemailer from "nodemailer";
import * as dotenv from 'dotenv';
import nuxtConfig from "~~/nuxt.config";
import bcrypt from "bcrypt";

export default defineEventHandler(async (event) => {
  const response = {};
  const { data: { id } } = await readBody(event);

  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const getMeals = await prisma.meal.findMany({
      where: {
        name: 'BreakFast',
        created_at: {
          gte: today,
        },
      },
      include: {
        food: true,
      },
    });

    response['goal'] = getMeals;
    response['success'] = true;
  } catch (error) {
    response['success'] = false;
    response['message'] = error.toString();
  }

  return response;
});