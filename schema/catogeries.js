const mongoose=require('mongoose');
const Foods=require('../schema/foods');
const catagorieSchema=new mongoose.Schema({
    categoryname:String,
    hotel:String,
    foods: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Foods' }]
});
const Category=mongoose.model('Category',catagorieSchema);
module.exports=Category;
