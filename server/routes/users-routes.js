const express=require('express');
const {getAllUsers,signInOutlook}=require('../controllers/UserController');

const router=express.Router();

router.get('/get-all-users',getAllUsers);
router.post('/sign-in-outlook',signInOutlook);









module.exports={
    routes:router
}