const express=require('express');
const {addFaculty, getFacultyById,getFacultyByName,deleteFacultyById,updateFacultyById}=require('../controllers/facultyController');

const router=express.Router();


router.post('/',addFaculty);
router.get('/get_id/:id',getFacultyById);
router.post('/delete/:id',deleteFacultyById);
router.get('/get_name/:name',getFacultyByName);
router.post('/update/:id',updateFacultyById);


module.exports={
    routes:router
}
