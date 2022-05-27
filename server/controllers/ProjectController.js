'use strict';

const mongoose = require('mongoose');
const ProjectSchem=require('../models/Project');



const addProject=async (req,res,next)=>{
    try{
            const Project=new ProjectSchem({
                 Title:req.body.Title,
                 Description:req.body.Description,
                 Supervisors:req.body.Supervisors,
                 members:req.body.members
                });
                const result=await Project.save();
                res.status(200).json(result);
    }
     catch(err){
          res.send(err);
     }
    
    }
const getProjectById=async (req,res,next)=>{
    try{
        const result=await ProjectSchem.find({_id:req.params.id});
        res.status(200).json(result);
    }
    catch(err){
        res.send(err);
    }
}
const getProjectByTitle=async (req,res,next)=>{
    try{
        const result=await ProjectSchem.find({Title:req.params.title});
        res.status(200).json(result);
    }
    catch(err){
        res.send(err);
    }
}
const deleteProjectById=async (req,res,next)=>{
    try{
        const result=await ProjectSchem.deleteOne({_id:req.params.id});
        res.status(200).json(result);
    }
    catch(err){
        res.send(err);
    }
}

const updateProjectById=async (req,res,next)=>{
    try{
        const result=await ProjectSchem.updateOne({_id:req.params.id},{$set:{Title:req.body.Title,Description:req.body.Description,Supervisors:req.body.Supervisors,members:req.body.members}});
        res.status(200).json(result);
    }
    catch(err){
        res.send(err);
    }
}

module.exports={
    addProject,
    getProjectById,
    getProjectByTitle,
    deleteProjectById,
    updateProjectById
}
