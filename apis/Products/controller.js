const Product = require("../../db/models/Product");

exports.fetchProduct = async((req, res) => {
  try {
    const product = await Product.find();
    res.json(product);
  } catch (error) {
    res.status(500);
  }
});

exports.createProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    const foundProduct = Product.findByIdAndDelete();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    const product = await Product.findByIdAndUpdate(
      { _id: productId },
      req.body,
      { new: true, runValidation: true }
    );
  } catch {
    res.status(500).json({ message: error.message });
  }
};
