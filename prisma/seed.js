const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const prisma = new PrismaClient();

const load = async () => {
    try {
        // await prisma.user.deleteMany();
        // console.log("Deleted records in user table");

        const lastLoginIpAddress = "127.0.0.1";
      let  food_items = [
            {
                "name": "Chicken Roti",
                "calories": 257,
                "fat": "14",
                "carbs": "0",
                "protein": "35"
            },
            {
                "name": "Pani Puri",
                "calories": 70,
                "fat": "3",
                "carbs": "8",
                "protein": "1"
            },
            {
                "name": "Naan Bread",
                "calories": 190,
                "fat": "5",
                "carbs": "30",
                "protein": "5"
            },
            {
                "name": "Indian Curry Chicken",
                "calories": 190,
                "fat": "7",
                "carbs": "4",
                "protein": "33"
            },
            {
                "name": "Butter Chicken",
                "calories": 485,
                "fat": "34.86",
                "carbs": "10.36",
                "protein": "33.28"
            },
            {
                "name": "Egg Fried Rice",
                "calories": 240,
                "fat": "9",
                "carbs": "35",
                "protein": "14"
            },
            {
                "name": "Pizza Margherita",
                "calories": 120,
                "fat": "7",
                "carbs": "12",
                "protein": "3"
            },
            {
                "name": "Chicken Biryani",
                "calories": 255,
                "fat": "13",
                "carbs": "23",
                "protein": "13"
            },
            {
                "name": "Veg Biryani",
                "calories": 169,
                "fat": "4.26",
                "carbs": "28.77",
                "protein": "4"
            },
            {
                "name": "Egg",
                "calories": 74,
                "fat": "4.97",
                "carbs": "0.38",
                "protein": "6.29"
            },
            {
                "name": "Eggplant",
                "calories": 24,
                "fat": "0.19",
                "carbs": "5.7",
                "protein": "1.01"
            },
            {
                "name": "Okra",
                "calories": 31,
                "fat": "0.1",
                "carbs": "7.03",
                "protein": "2"
            },
            {
                "name": "Sweet Potato",
                "calories": 86,
                "fat": "0.05",
                "carbs": "20.12",
                "protein": "1.57"
            },
            {
                "name": "Potato",
                "calories": 104,
                "fat": "2.4",
                "carbs": "19.36",
                "protein": "1.66"
            },
            {
                "name": "Cassava",
                "calories": 160,
                "fat": "0.28",
                "carbs": "38.06",
                "protein": "1.36"
            },
            {
                "name": "Butter",
                "calories": 100,
                "fat": "11",
                "carbs": "0",
                "protein": "0"
            },
            {
                "name": "Cooked Octopus",
                "calories": 53,
                "fat": "2.3",
                "carbs": "3.03",
                "protein": "4.8"
            },
            {
                "name": "Basmati Rice",
                "calories": 121,
                "fat": "0.38",
                "carbs": "25.22",
                "protein": "3.54"
            },
            {
                "name": "Pasta with Meat Sauce",
                "calories": 329,
                "fat": "13.06",
                "carbs": "33.33",
                "protein": "20.22"
            },
            {
                "name": "Cheeseburger",
                "calories": 319,
                "fat": "15.15",
                "carbs": "31.75",
                "protein": "14.77"
            },
            {
                "name": "Apple",
                "calories": 72,
                "fat": "0.23",
                "carbs": "19.06",
                "protein": "0.36"
            },
            {
                "name": "Pineapple",
                "calories": 48,
                "fat": "0.12",
                "carbs": "12.63",
                "protein": "0.54"
            },
            {
                "name": "Mango",
                "calories": 135,
                "fat": "0.56",
                "carbs": "35.19",
                "protein": "1.06"
            },
            {
                "name": "Lychee",
                "calories": 6,
                "fat": "0.04",
                "carbs": "1.59",
                "protein": "0.08"
            },
            {
                "name": "Fish Curry",
                "calories": 241,
                "fat": "11.02",
                "carbs": "4.57",
                "protein": "29.76"
            },
            {
                "name": "Orange",
                "calories": 62,
                "fat": "0.16",
                "carbs": "15.39",
                "protein": "1.23"
            },
            {
                "name": "Peanut Butter",
                "calories": 208,
                "fat": "17",
                "carbs": "6",
                "protein": "8"
            },
            {
                "name": "Lemon",
                "calories": 17,
                "fat": "0.17",
                "carbs": "5.41",
                "protein": "0.64"
            },
            {
                "name": "Stewed Chicken Breast",
                "calories": 182,
                "fat": "7.36",
                "carbs": "0",
                "protein": "27.16"
            },
            {
                "name": "Ice Cream",
                "calories": 267,
                "fat": "14.26",
                "carbs": "32.45",
                "protein": "4.68"
            },
            {
                "name": "Tiramisu",
                "calories": 283,
                "fat": "18.2",
                "carbs": "24.41",
                "protein": "4.77"
            },
            {
                "name": "Beef Steak",
                "calories": 210,
                "fat": "12.70",
                "carbs": "0",
                "protein": "22.45"
            },
            {
                "name": "Chicken Breast",
                "calories": 195,
                "fat": "7.72",
                "carbs": "0",
                "protein": "29.55"
            },
            {
                "name": "Banana",
                "calories": 105,
                "fat": "0.39",
                "carbs": "26.95",
                "protein": "1.29"
            },
            {
                "name": "Beef Stew",
                "calories": 235,
                "fat": "10.15",
                "carbs": "17.03",
                "protein": "18.49"
            },
            {
                "name": "Lentils, Cooked",
                "calories": 165,
                "fat": "6.76",
                "carbs": "18.73",
                "protein": "8.39"
            },
            {
                "name": "Red Kidney Beans, Cooked",
                "calories": 127,
                "fat": "0.5",
                "carbs": "22.8",
                "protein": "8.67"
            },
            {
                "name": "White Bread",
                "calories": 266,
                "fat": "3.29",
                "carbs": "50.61",
                "protein": "7.64"
            },
            {
                "name": "Carrot",
                "calories": 25,
                "fat": "0.15",
                "carbs": "5.84",
                "protein": "0.57"
            },
            {
                "name": "Fruit Salad",
                "calories": 108,
                "fat": "1.63",
                "carbs": "25",
                "protein": "1.27"
            },
            {
                "name": "Egg Salad Sandwich",
                "calories": 485,
                "fat": "34.76",
                "carbs": "28.33",
                "protein": "13.72"
            },
            {
                "name": "Fried Chicken",
                "calories": 137,
                "fat": "9.16",
                "carbs": "4.64",
                "protein": "8.45"
            },
            {
                "name": "Beer",
                "calories": 155,
                "fat": "0",
                "carbs": "12.78",
                "protein": "1.66"
            },
            {
                "name": "Cauliflower",
                "calories": 25,
                "fat": "0.1",
                "carbs": "5.3",
                "protein": "1.98"
            },
            {
                "name": "Cheddar Cheese",
                "calories": 113,
                "fat": "9.28",
                "carbs": "0.36",
                "protein": "6.97"
            },
            {
                "name": "Canned Tomatoes",
                "calories": 20,
                "fat": "0",
                "carbs": "5",
                "protein": "1"
            },
            {
                "name": "Onions",
                "calories": 42,
                "fat": "0.08",
                "carbs": "10.11",
                "protein": "0.92"
            },
            {
                "name": "Garlic",
                "calories": 4,
                "fat": "0.02",
                "carbs": "0.99",
                "protein": "0.19"
            },
            {
                "name": "Champagne glass",
                "calories": 87,
                "fat": "0",
                "carbs": "2.8",
                "protein": "0.07"
            },
            {
                "name": "Biscuit",
                "calories": 130,
                "fat": "2",
                "carbs": "27",
                "protein": "3"
            },
            {
                "name": "Fish, cooked",
                "calories": 127,
                "fat": "1.38",
                "carbs": "0",
                "protein": "26.33"
            },
            {
                "name": "Cappucino with Sugar",
                "calories": 30,
                "fat": "0.14",
                "carbs": "7.14",
                "protein": "0.31"
            },
            {
                "name": "Coffee and Cream",
                "calories": 26,
                "fat": "1.47",
                "carbs": "2.91",
                "protein": "0.39"
            },
            {
                "name": "Croissant",
                "calories": 231,
                "fat": "11.97",
                "carbs": "26.11",
                "protein": "4.67"
            },
            {
                "name": "Pain Au Chocolat",
                "calories": 230,
                "fat": "13",
                "carbs": "24",
                "protein": "3"
            },
            {
                "name": "Dal Puri",
                "calories": 110,
                "fat": "3",
                "carbs": "16",
                "protein": "3"
            },
            {
                "name": "Naan Bread",
                
                    "calories": 190,
                    "fat": "5",
                    "carbs": "30",
                    "protein": "5"
                
            },
            {
                "name": "Indian Curry Chicken",
                
                    "calories": 190,
                    "fat": "7",
                    "carbs": "4",
                    "protein": "33"
                
                
            },
            {
                "name": "Butter Chicken",
                
                    "calories": 485,
                    "fat": "34.86",
                    "carbs": "10.36",
                    "protein": "33.28"                
            },
            {
                "name": "Egg Fried Rice",
                
                    "calories": 240,
                    "fat": "9",
                    "carbs": "35",
                    "protein": "14"
                
               
            },
            {
                "name": "Pizza Margherita",
                
                    "calories": 120,
                    "fat": "7",
                    "carbs": "12",
                    "protein": "3"
                
            },
            {
                "name": "Chicken Biryani",
            
                    "calories": 255,
                    "fat": "13",
                    "carbs": "23",
                    "protein": "13"
               
            },
            {
                "name": "Veg Biryani",
                
                    "calories": 169,
                    "fat": "4.26",
                    "carbs": "28.77",
                    "protein": "4"
                },
             
            {
                "name": "Egg",
                
                "calories": 74,
                "fat": "4.97",
                "carbs": "0.38",
                "protein": "6.29"
                
            },
            {
                "name": "Eggplant",
                "calories": 24,
                "fat": "0.19",
                "carbs": "5.7",
                "protein": "1.01"
               
            },
            {
                "name": "Okra",
                "calories": 31,
                "fat": "0.1",
                "carbs": "7.03",
                "protein": "2"
                
            },
            {
                "name": "Sweet Potato",
                
                "calories": 86,
                "fat": "0.05",
                "carbs": "20.12",
                "protein": "1.57"
                
            },
            {
                "name": "Potato",
                "calories": 104,
                "fat": "2.4",
                "carbs": "19.36",
                "protein": "1.66"
            
            
            },
            {
                "name": "Cassava",
                "calories": 160,
                "fat": "0.28",
                "carbs": "38.06",
                "protein": "1.36"
               
            },
            {
                "name": "Butter",
                "calories": 100,
                "fat": "11",
                "carbs": "0",
                "protein": "0"
              },
              {
                "name": "Cooked Octopus",
                "calories": 53,
                "fat": "2.3",
                "carbs": "3.03",
                "protein": "4.8"
              },
              {
                "name": "Basmati Rice",
                "calories": 121,
                "fat": "0.38",
                "carbs": "25.22",
                "protein": "3.54"
              },
              {
                "name": "Pasta with Meat Sauce",
                "calories": 329,
                "fat": "13.06",
                "carbs": "33.33",
                "protein": "20.22"
              },
              {
                "name": "Cheeseburger",
                "calories": 319,
                "fat": "15.15",
                "carbs": "31.75",
                "protein": "14.77"
              },
              {
                "name": "Apple",
                "calories": 72,
                "fat": "0.23",
                "carbs": "19.06",
                "protein": "0.36"
              },
              {
                "name": "Pineapple",
                "calories": 48,
                "fat": "0.12",
                "carbs": "12.63",
                "protein": "0.54"
              },
              {
                "name": "Mango",
                "calories": 135,
                "fat": "0.56",
                "carbs": "35.19",
                "protein": "1.06"
              },
              {
                "name": "Avocado",
                "calories": 160,
                "fat": "15",
                "carbs": "9",
                "protein": "2"
              },
              {
                "name": "Lychee",
                "calories": 6,
                "fat": "0.04",
                "carbs": "1.59",
                "protein": "0.08"
              },
              {
                "name": "Fish Curry",
                "calories": 241,
                "fat": "11.02",
                "carbs": "4.57",
                "protein": "29.76"
              },
              {
                "name": "Orange",
                "calories": 62,
                "fat": "0.16",
                "carbs": "15.39",
                "protein": "1.23"
              },
              {
                "name": "Watermelon",
                "calories": 46,
                "fat": "0.23",
                "carbs": "11.48",
                "protein": "0.93"
              },
              {
                "name": "Salmon",
                "calories": 41,
                "fat": "1.68",
                "carbs": "0",
                "protein": "6.13"
              },
              {
                "name": "Green Peas",
                "calories": 117,
                "fat": "0.58",
                "carbs": "20.97",
                "protein": "7.86"
              },
              {
                "name": "Mixed Salad Greens",
                "calories": 9,
                "fat": "0.13",
                "carbs": "1.76",
                "protein": "0.84"
              },
              {
                "name": "Pasta",
                "calories": 220,
                "fat": "1.29",
                "carbs": "42.95",
                "protein": "8.07"
              },
              {
                "name": "Taro Leaves",
                "calories": 12,
                "fat": "0.21",
                "carbs": "1.88",
                "protein": "1.39"
              },
              {
                "name": "Dark Chocolate 70%",
                "calories": 70,
                "fat": "4.5",
                "carbs": "6",
                "protein": "1"
              },
              {
                "name": "Corn",
                "calories": 132,
                "fat": "1.82",
                "carbs": "29.29",
                "protein": "4.96"
              },
              {
                "name": "Lamb",
                "calories": 292,
                "fat": "20.77",
                "carbs": "0",
                "protein": "24.32"
              },
              {
                "name": "Brie Cheese",
                "calories": 334,
                "fat": "27.68",
                "carbs": "0.45",
                "protein": "20.75"
              },
              {
                "name": "Blueberries",
                "calories": 83,
                "fat": "0.48",
                "carbs": "21.01",
                "protein": "1.07"
              },
              {
                "name": "Ground Beef",
                "calories": 77,
                "fat": "5.2",
                "carbs": "0",
                "protein": "7.1"
              },
              {
                "name": "Donut",
                "calories": 260,
                "fat": "11",
                "carbs": "34",
                "protein": "4"
              }
          
        ]
        //Hash password
        // const password = "password";
        // const salt = await bcrypt.genSalt();
        // const hash = await bcrypt.hash(password, salt);

        
        for (const foodItem of food_items) {
            await prisma.food.create({
                data: {
                    name: foodItem.name,
                    calories: foodItem.calories,
                    fats: foodItem.fat,
                    carbs: foodItem.carbs,
                    proteins: foodItem.protein
                }
            
        
        }).then(()=> {
            console.log("Chicken Roti successfully created")
         })
        }
         
    } catch (e) {
        console.error(e);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    };
}

load();