const express=require('express');
const {addProject, getProjectById,getProjectByTitle,deleteProjectById,updateProjectById}=require('../controllers/projectController');

const router=express.Router();

router.post('/',addProject);
router.get('/get_id/:id',getProjectById);
router.post('/delete/:id',deleteProjectById);
router.get('/get_title/:title',getProjectByTitle);
router.post('/update/:id',updateProjectById);


module.exports={
    routes:router
}
