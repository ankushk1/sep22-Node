const express = require("express");
const router = express.Router();

// console.log('routes File initialized')
const { signup } = require("../controller/userController");


router.post("/signup", signup);
// router.post("/signin", signin)


module.exports = router;




