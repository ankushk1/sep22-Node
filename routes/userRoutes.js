const express = require("express");
const router = express.Router();

// console.log('routes File initialized')
const { signup, signin } = require("../controller/userController");
const { validateJWT } = require("../jwt/jwt");

router.post("/signup", signup);
router.post("/signin", signin)


router.get('/test', validateJWT ,(req, res) => {
  console.log('controller called')
})


module.exports = router;




