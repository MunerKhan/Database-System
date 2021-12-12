const express = require('express');
const router = express.Router();

const req = require('express/lib/request');
const authController = require('../controllers/auth');


router.post("/register",authController.register);


module.exports = router;