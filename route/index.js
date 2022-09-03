const express=require('express');
const router=express.Router();
const controller=require('../controller/users_horoscope_controller');
router.get('/',controller.home);
router.post('/users_horoscope_details',controller.horoscope_details);
module.exports=router;