const express = require("express")
const claimedRouter = express.Router();
const { getAllFoods , addFood ,
     updateFood ,getById , 
    deleteFood , getByUserId} = require("../controller/claimed-controller");

claimedRouter.get("/",getAllFoods);
claimedRouter.post('/add', addFood);
claimedRouter.put("/update/:id",  updateFood);
claimedRouter.get("/:id", getById);
claimedRouter.delete("/:id",deleteFood);
claimedRouter.get("/user/:id",getByUserId)
module.exports = claimedRouter;