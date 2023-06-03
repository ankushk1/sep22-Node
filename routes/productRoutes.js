const express = require("express");
const router = express.Router();


const { validateJWT } = require("../jwt/jwt");
const { createProduct } = require("../controller/productController");

router.post("/create", validateJWT ,createProduct);


module.exports = router;
