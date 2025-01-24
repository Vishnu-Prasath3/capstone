const Product = require('../models/Product'); // Ensure you create this model

// Get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products." });
  }
};

// Create a new product
exports.createProduct = async (req, res) => {
  const { name, description, price, seller } = req.body; // Ensure seller is included

  const product = new Product({
    name,
    description,
    price,
    seller, // Assuming seller is passed in the request body
  });

  try {
    await product.save();
    res.status(201).json({ message: "Product created successfully.", product });
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ message: "Error creating product." });
  }
};
