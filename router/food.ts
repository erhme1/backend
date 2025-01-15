import { Request, Response, Router } from "express";
import { foodCategoryModel } from "../models/food-category";

export const foodRouter = Router();

foodRouter.get("/", async (req, res) => {
    res.send({
        message: 'FOOOODDD'
    });
});
