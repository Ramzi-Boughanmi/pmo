const express = require('express')
//controller function
const {signupUser, loginUser}= require('../controllers/userController')
const router = express.Router()

//login route
router.post('/login', () => {})

//signup route
router.post('/signup',() => {})

module.exports= router