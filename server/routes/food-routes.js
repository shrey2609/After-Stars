const express = require("express")
const foodRouter = express.Router();
const { getAllFoods , addFood ,
     updateFood ,getById , 
    deleteFood , getByUserId} = require("../controller/food-controller");

foodRouter.get("/",getAllFoods);
foodRouter.post('/add', addFood);
foodRouter.put("/update/:id",  updateFood);
foodRouter.get("/:id", getById);
foodRouter.delete("/:id",deleteFood);
foodRouter.get("/user/:id",getByUserId)
module.exports = foodRouter;