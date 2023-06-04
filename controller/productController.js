const Product = require("../model/Product");

exports.createProduct = async (req, res) => {
  try {
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

exports.getProducts = async (req, res) => {
  try {
    // We need to find the products
    const products = await Product.find()
      .populate("createdBy", "firstName email lastName")
      .populate("updatedBy", "firstName email lastName");

    // if (products.length === 0) {
    if (!products.length) {
      return res.status(400).json({ message: "No Products Found" });
    }

    return res.status(200).json({ products });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    // We get the product ID from Params
    const { id } = req.params;

    const product = await Product.findById(id);

    // If not found
    if (!product) {
      return res.status(400).json({ message: "No Products Found" });
    }

    // Return success message
    return res.status(200).json({ product });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    // We get the product ID from Params
    const { id } = req.params;

    const deletedProduct = await Product.findByIdAndDelete(id);
    console.log("----", deletedProduct);

    // If not found
    if (!deletedProduct) {
      return res.status(400).json({ message: "No Products Found to delete" });
    }

    // Return success message
    return res.status(200).json({ message: "Product Deleted Successfully" });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};


exports.updateProduct = async (req, res ) => {
  try {
    // We get the product ID from Params
    const { id } = req.params;

    const updatedProduct = await Product.findByIdAndUpdate(id, {
      $set : {...req.body}
    });

    // If not found
    if (!updatedProduct) {
      return res.status(400).json({ message: "No Products Found to update" });
    }

    // Return success message
    return res.status(200).json({ message: "Product Updated Successfully" });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
}

// To create a api to activate/deactivate the product