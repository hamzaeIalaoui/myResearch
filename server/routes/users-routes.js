const express=require('express');
const {getAllUsers}=require('../controllers/UserController');

const router=express.Router();

router.get('/get-all-users',getAllUsers);









module.exports={
    routes:router
}