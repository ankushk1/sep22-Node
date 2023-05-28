const express = require("express");
const router = express.Router();

// console.log('routes File initialized')
const { signup, signin } = require("../controller/userController");

const validate = (req, res, next) => {
  console.log('validate called')

  // No errors and we can move to controller
  // next();
}

router.post("/signup", signup);
router.post("/signin", signin)


router.get('/test', validate ,(req, res) => {
  console.log('controller called')
})


module.exports = router;




