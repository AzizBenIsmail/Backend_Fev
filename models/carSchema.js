const mongoose = require("mongoose");
const carSchema = new mongoose.Schema(
  {
    model: String,
    matricule: String,
    prix : Number,
},
  { timestamps: true }
);

const car = mongoose.model("car", carSchema);
module.exports = car;
