const express=require('express');
const router=express.Router();


const MenuItem=require('../models/menu.js');


router.post('/',async (req,res)=>{
    const data=req.body;
    const newmenuitem=new MenuItem(data);
    try{
    const response=await newmenuitem.save();
    res.status(200).json(response);
    }catch(err){
       res.status(400).json({error:err.message})
    }

})

router.get('/',async (req,res)=>{
    try{
    const response= await MenuItem.find(req.query);
    if(response.length==0){
        res.status(404).json("No items found");
     }
    else res.status(200).json(response);
    }
    catch(err){
        res.status(500).json({error:err})
    }
})

router.get('/:taste',async (req,res)=>{
     try{
     const taste=req.params.taste;
     const want={...req.query,taste:taste};
     const response=await MenuItem.find(want);
     if(response.length==0){
        res.status(404).json("No such item found");
     }
     else res.status(201).json(response);
    }catch(err){
       res.status(500).json({error:err.message});
    }
}) 

router.put('/:id',async (req,res)=>{
   try{ 
    const itemid=req.params.id;
    const updatedddata=req.body;
    const response=await MenuItem.findByIdAndUpdate(itemid,updatedddata,{
        new:true,
        runValidators:true
    })
    if(!response){
        res.status(404).json("No such item found");
    }
    else res.status(201).json(response);
    }catch(err){
        res.status(400).json({error:err.message});
    }
})
router.put('/',async (req,res)=>{
    try{ 
     const updatedddata=req.body;
     MenuItem.updateMany
     const response=await MenuItem.updateMany(req.query,updatedddata,{
         new:true,
         runValidators:true
     })
     if(response.modifiedCount==0){
         res.status(404).json("item not found");
     }
     else res.status(201).json(response);
    }catch(err){
         res.status(400).json({error:err.message});
     }
 })

 router.delete('/:id',async (req,res)=>{
    try{
        const itemid=req.params.id;
        const response=await MenuItem.findByIdAndDelete(itemid);
        if(!response){
            res.status(404).json("Item to be deleted not found");
        }
       else  res.status(201).json({deleteditem:response});
    }catch(err){
        res.status(500).json({error:err.message});
    }
 })
 router.delete('/',async (req,res)=>{
    try{
       
        const response=await MenuItem.deleteOne(req.query);
        if(response.deletedCount==0){
            res.status(404).json("Item to be deleted not found");
        }
        else res.status(201).json({deleteditem:response});
    }catch(err){
        res.status(500).json({error:err.message});
    }
 })

module.exports=router;