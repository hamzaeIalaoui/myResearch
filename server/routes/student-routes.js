const express=require('express');
const {getAssignments}=require('../controllers/StudentController');


const router=express.Router();

router.post('/get-assignments',getAssignments);

module.exports={
    routes:router
}