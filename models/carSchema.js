const mongoose = require("mongoose");
const carSchema = new mongoose.Schema(
  {
    model: String,
    matricule: String,
    prix : Number,
    owner : {type : mongoose.Schema.Types.ObjectId,ref: 'User'} // many 
    //owners : [{type : mongoose.Schema.Types.ObjectId,ref: 'User'}] // many 
    
},
  { timestamps: true }
);

const Car = mongoose.model("Car", carSchema);
module.exports = Car;
