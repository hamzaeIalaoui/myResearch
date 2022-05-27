'use strict';

const mongoose = require('mongoose');
const studentSchem=require('../models/Student');


mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true });



const addStudent=async (req,res,next)=>{
   try{
         const Student=new studentSchem({
                id:req.body.id,
                FullName:req.body.FullName,
                email:req.body.email,
                ResearchInterests:req.body.ResearchInterests,
                experience:req.body.experience,
                publications:req.body.publications,
                CV:req.body.CV
            });
            const result=await Student.save();
            res.status(200).json(result);
   }
    catch(err){
        res.send(err);
    }

}

//get student by name
const getStudentByName=async (req,res,next)=>{
    try{
        const result=await studentSchem.find({FullName:req.params.name});
        res.status(200).json(result);
    }
    catch(err){
        res.send(err);
    }
}
//get student by id
const getStudentById=async (req,res,next)=>{
    try{
        const result=await studentSchem.find({id:req.params.id});
        res.status(200).json(result);
    }
    catch(err){
        res.send(err);
    }
}
//delete student by id
const deleteStudentById=async (req,res,next)=>{
    try{
        const result=await studentSchem.deleteOne({id:req.params.id});
        res.status(200).json(result);
    }
    catch(err){
        res.send(err);
    }
}
//update student by id
const updateStudentById=async (req,res,next)=>{
    try{
        const result=await studentSchem.updateOne({id:req.params.id},{$set:{
            FullName:req.body.FullName,
            email:req.body.email,
            ResearchInterests:req.body.ResearchInterests,
            experience:req.body.experience,
            publications:req.body.publications,
            CV:req.body.CV
        }});
        res.status(200).json(result);
    }
    catch(err){
        res.send(err);
    }
}



module.exports={
    addStudent,
    getStudentByName,
    getStudentById,
    deleteStudentById,
    updateStudentById
}