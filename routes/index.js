// This index.js file will be the entry point for the routes.
const express = require("express");
//To create Router Handler
const router = express.Router();

const homeController = require('../controllers/home_controller');
console.log('Router loaded');


router.get('/',homeController.home);


module.exports = router;