const express=require('express');
const {addStudent, getStudentById,getStudentByName,deleteStudentById,updateStudentById}=require('../controllers/studentController');

const router=express.Router();


router.post('/',addStudent);
router.get('/get_id/:id',getStudentById);
router.post('/delete/:id',deleteStudentById);
router.get('/get_name/:name',getStudentByName);
router.post('/update/:id',updateStudentById);




module.exports={
    routes:router
}