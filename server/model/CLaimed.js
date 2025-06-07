const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const claimedSchema = new Schema({
    title: { type: String, required: true },
    desc: { type: String, required: true },
    user: { type: mongoose.Types.ObjectId, ref: "User", required: true },
    quantity: { type: String, required: true },
    expiryDate: { type: Date, required: true },
    img: { type: String, required: true },
    location: {type: String, required: true},
});

module.exports = mongoose.model("claimedFood", claimedSchema);