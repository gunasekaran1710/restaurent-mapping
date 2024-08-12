const Foods=require('../schema/foods');
const Hotal=require('../schema/hotal');
const Category=require('../schema/catogeries');
const { viewcategory } = require('../controller/userController');
async function createhotal1 (data){
    const hotal3=new Hotal(data);
    const hotal4=await hotal3.save();
    console.log(hotal3);
    return hotal3;
}
async function createcategory1(data){
    const catagory3=new Category(data);
    const catagory4=await catagory3.save();
    //save the catogorie on the hotal
    const update=await Hotal.updateMany({hotalname:data.hotel}, {$addToSet: {categories:[catagory4._id] }});
    console.log(catagory4);
    return catagory3;

}
async function createfoods1(data){
    const foods3=new Foods(data);
    const foods4=await foods3.save();
//save the food on the catagory
    const update=await Category.updateMany({categoryname:data.categories}, { $addToSet: {foods:[foods4._id] }} );
    console.log(update);
    console.log(foods4);
    return foods3;
}
async function viewcategory1(data){
    const hotalId={ _id:data._id};
    console.log(hotalId)
    const hotel = await Hotal.findById({_id:data._id}).populate('categories');
    console.log(hotel);
    return hotel;
}
async function viewfoods1(data){
    const catid={_id:data._id};
    console.log(catid);
    const cat=await Category.findById({_id:data._id}).populate('foods');
    console.log(cat);
    return cat;
}

module.exports={createhotal1,createcategory1,createfoods1,viewcategory1,viewfoods1};