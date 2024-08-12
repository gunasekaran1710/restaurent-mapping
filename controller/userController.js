const repository=require('../userRepository/repository');
async function createhotal(req,res){
    try{
        const hotal1=await repository.createhotal1(req.body);
        res.status(201).json(hotal1);


    }
    catch(err){
        res.status(400).json('error');
    }

}
async function createcategory(req,res){
    try{
        const category2=await repository.createcategory1(req.body);
        res.status(201).json(category2);
    }
    catch(err){
        res.status(400).json('error');
    }
}
async function createfoods(req,res){
    try{
        const foods2=await repository.createfoods1(req.body);
        res.status(201).json(foods2);

    }
    catch (err){
        res.status(400).json('error');
    }
}
async function viewcategory(req,res){
    try{
        const cat2=await repository.viewcategory1(req.body);
        res.status(201).json(cat2);

    }
    catch(err){
        res.status(400).json('error');
    }

}
async function viewfoods(req,res){
    try{
        const food3=await repository.viewfoods1(req.body);
        res.status(201).json(food3);

    }
    catch(err){
        res.status(400).json('error');
    }
}
module.exports={createhotal,createcategory,createfoods,viewcategory,viewfoods};