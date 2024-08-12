const mongoose=require('mongoose');
const Catagory=require('../schema/catogeries');
const foodsSchema=new mongoose.Schema({
    foodname:String,
    categories:String
});
const Foods=mongoose.model('Foods',foodsSchema);
module.exports=Foods;
