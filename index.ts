import express, { Request, Response } from "express";
import { config, configDotenv } from "dotenv";
import { foodCategoryRouter } from "./router/food-category";
import { foodRouter } from "./router/food";
const cors = require('cors');
 
const PORT = 1000;
const app = express();
const mongoose = require('mongoose');
app.use(cors());
app.use(express.json());
 
configDotenv();
 
 
const connectMongoDB = async () => {
    const URI = process.env.MONGODB_URI;
    await mongoose.connect(URI);
}
connectMongoDB();
// const FOOD_CATEGORY_SCHEMA = new mongoose.Schema(
//     {categoryName: String,},
//     {timestamps: true}
// );
// const foodCategoryModel = mongoose.model(
//     "FoodCategory",
//     FOOD_CATEGORY_SCHEMA,
//     "food-category"
// )
 
app.use("/food-category/", foodCategoryRouter);
app.use('/food/', foodRouter);
app.use('/order/', foodCategoryRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
