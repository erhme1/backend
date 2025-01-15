import { Request, Response, Router } from "express";
import { foodCategoryModel } from "../models/food-category";

export const foodCategoryRouter = Router();

foodCategoryRouter.get("/", async (req, res) => {
    const items = await foodCategoryModel.find();
    res.json(items);
});

foodCategoryRouter.post("/", async (req: Request, res: Response) => {
    const newItem = await foodCategoryModel.create({
        categoryName: req.body.categoryName
    });

    res.json({
        message: "New category added",
        newItem,
    })
});

foodCategoryRouter.get('/:id', async (req: Request, res: Response) => {
    const id = req.params.id;
    const item = await foodCategoryModel.findById(id);
    res.json(item);
})

foodCategoryRouter.put(":id", async (req: Request, res: Response) => {
    const updatedItem = await foodCategoryModel.findByIdAndUpdate(
        req.params.id,
        { categoryName: req.body.categoryName },
        { new: true }
    );
    res.json(updatedItem);
});

foodCategoryRouter.delete("/:id", async (req: Request, res: Response) => {
    const deletedItem = await foodCategoryModel.findByIdAndDelete(req.params.id);
    res.json(deletedItem);
});