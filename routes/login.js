const express = require('express');
const router = express.Router();

const req = require('express/lib/request');
const logController = require('../controllers/login');


router.post("/login",logController.login);


module.exports = router;