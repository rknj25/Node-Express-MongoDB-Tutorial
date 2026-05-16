import express from 'express';
import {userRegister,login, forgotPassword, changePass} from '../controller/userAuth.js';
// import login from '../controller/userAuth.js'

const router=express.Router();

router.post('/register',userRegister);
router.post('/login',login);
router.post('/forgotPassword',forgotPassword);
router.post('/changePass',changePass)
export default router;