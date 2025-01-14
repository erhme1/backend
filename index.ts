import express, { Request, Response } from "express";
import { config, configDotenv } from "dotenv";
 
const PORT = 1000;
const app = express();
const mongoose = require('mongoose');
app.use(express.json());
 
configDotenv();
 
 
const connectMongoDB = async () => {
    const URI = process.env.MONGODB_URI;
    await mongoose.connect(URI);
}
connectMongoDB();
const FOOD_CATEGORY_SCHEMA = new mongoose.Schema(
    {categoryName: String,},
    {timestamps: true}
);
const foodCategoryModel = mongoose.model(
    "FoodCategory",
    FOOD_CATEGORY_SCHEMA,
    "food-category"
)
 
app.get(`/food-category`, async (req: Request, res: Response) => {
    const FoodCategories = await foodCategoryModel.find();
    res.json({
        message: "Sain bna uu!",
        data: FoodCategories
    });
});
 
app.get("/create", async (req: Request, res: Response) => {
    const newItem = await foodCategoryModel.create({
        categoryName: "buuz",
    });
    res.send ({message: "nemegdlee", newItem});
});
 
app.get("/food-category/: id", async(req: Request, res: Response) => {
    const {id} = req.params;
    const FoodCategories = await foodCategoryModel.find(id);
    res.json({
        message: history,
        data: FoodCategories
    })
})
 
 
app.delete("/delete", async (req: Request, res: Response) => {
    const deleteItem = await foodCategoryModel.findByIdAndDelete(req.params.id);
    res.send ({message: "hasagdlaa", deleteItem});
});
 
 
 
 
app.put("/food-category/:id", async(req: Request, res: Response) => {
    const findCategory = await foodCategoryModel.findByIdAndUpdate(req.params.id);
    
})
 
 
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
 