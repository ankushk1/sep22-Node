const express = require("express");
const router = express.Router();

const { validateJWT } = require("../jwt/jwt");
const {
  createProduct,
  getProducts,
  deleteProduct,
  getById,
  updateProduct
} = require("../controller/productController");

router.post("/create", validateJWT, createProduct);
router.get("/getProducts", validateJWT, getProducts);
router.get("/getById/:id", validateJWT, getById);
router.delete("/delete/:id", validateJWT, deleteProduct);
router.put("/update/:id", validateJWT, updateProduct);

module.exports = router;
