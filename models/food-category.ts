import mongoose, { model, Mongoose, Schema } from "mongoose";

const FOOD_CATEGORY_SCHEMA = new Schema(
    {categoryName: String,},
    {timestamps: true}
);
const foodCategoryModel = model(
    "FoodCategory",
    FOOD_CATEGORY_SCHEMA,
    "food-category"
);

export { foodCategoryModel };