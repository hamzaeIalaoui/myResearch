const express=require('express');
const {getAllUsers,signInOutlook,checkValidToken}=require('../controllers/UserController');

const router=express.Router();

router.get('/get-all-users',getAllUsers);
router.post('/sign-in-outlook',signInOutlook);
router.post('/check-valid-token',checkValidToken);









module.exports={
    routes:router
}