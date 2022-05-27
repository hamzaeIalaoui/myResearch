'use strict';

const mongoose = require('mongoose');
const FacultySchem = require('../models/Faculty');

mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true });

const addFaculty = async (req, res, next) => {
    try {
        const Faculty = new FacultySchem({
           id:req.body.id,
           FullName:req.body.FullName,
           email:req.body.email,
           Phone:req.body.Phone,
           OfficeHours:req.body.OfficeHours,
           OfficeLocation:req.body.OfficeLocation,
           ResearchInterests:req.body.ResearchInterests,
           SelectedPublications:req.body.SelectedPublications,
           Description:req.body.Description
        });
        const result = await Faculty.save();
        res.status(200).json(result);
    } catch (err) {
        res.send(err);
    }
}

const getFacultyById = async (req, res, next) => {
    try {
        const result = await FacultySchem.find({id:req.params.id});
        res.status(200).json(result);
    } catch (err) {
        res.send(err);
    }
}
const getFacultyByName = async (req, res, next) => {
    try {
        const result = await FacultySchem.find({FullName:req.params.name});
        res.status(200).json(result);
    } catch (err) {
        res.send(err);
    }
}
const deleteFacultyById = async (req, res, next) => {
    try {
        const result = await FacultySchem.deleteOne({id:req.params.id});
        res.status(200).json(result);
    } catch (err) {
        res.send(err);
    }
}
const updateFacultyById = async (req, res, next) => {
    try {
        const result = await FacultySchem.updateOne({id:req.params.id},{
            FullName:req.body.FullName,
            email:req.body.email,
            Phone:req.body.Phone,
            OfficeHours:req.body.OfficeHours,
            OfficeLocation:req.body.OfficeLocation,
            ResearchInterests:req.body.ResearchInterests,
            SelectedPublications:req.body.SelectedPublications,
            Description:req.body.Description
        });
        res.status(200).json(result);
    } catch (err) {
        res.send(err);
    }
}


module.exports = {
    addFaculty,
    getFacultyById,
    getFacultyByName,
    deleteFacultyById,
    updateFacultyById
}