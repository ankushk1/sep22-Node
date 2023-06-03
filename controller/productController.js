const Product = require("../model/Product");

exports.createProduct = async (req, res) => {
  try {

    console.log('req.body ---' , req.body)
    // We need to check if product already exists
    const productExists = await Product.findOne({ name: req.body.name });
    if (productExists) {
      return res.status(400).json({ message: "Product already exists" });
    }

    // We need to create the product
    const createdProd = await Product.create({
      ...req.body,
      createdBy: req.body.userId,
      updatedBy: req.body.userId
    });

    if (!createdProd) {
      return res.status(400).json({ message: "Error creating product" });
    }

    return res.status(200).json({ message: "Product created successfully" });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};
