const mongoose=require('mongoose');
const Catagory=require('../schema/catogeries');
const hotalSchema=new mongoose.Schema({
    hotalname:String,
    categories: [{ type:mongoose. Schema.Types.ObjectId, ref: 'Category' }],
});
const Hotal=mongoose.model('Hotal',hotalSchema);
module.exports=Hotal;
