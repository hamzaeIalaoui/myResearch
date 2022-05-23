'use strict';

const mongoose = require('mongoose');
const studentSchem=require('../models/Student');


mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true });



const addStudent=async (req,res,next)=>{
   try{
         const Student=new studentSchem({
              id:req.body.id,
              name:req.body.name,
              classification:req.body.classification,
              school:req.body.school
         })
         const result=await Student.save()
         res.send(result)
        

   }
    catch(err){
        res.send(err)
       

    }

}

module.exports={
    addStudent
}