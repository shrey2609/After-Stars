const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name : {
        type: String,
        required: true,
    },

    email :  {
        type: String,
        required: true,
        unique: true,
    },

    password: {
        type: String,
        required: true,
        minlength: 6
    },

    role : {
        type:String,
        required: true
    },

    donatedFoods: [{ type: mongoose.Types.ObjectId, ref: "Food", required: true }],
    claimedFoods: [{ type: mongoose.Types.ObjectId, ref: "CLaimed", required: false }]
})

module.exports =  mongoose.model("User", userSchema);