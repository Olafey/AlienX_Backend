const mongoose = require("mongoose");
const productModel = require("../models/product");

const product = async (req, res) => {
  try {
    const product = await productModel.create(req.body);
    if (!product) {
      res.status(404).json({
        status: "error",
        message: "Product not found",
      });
    }
  } catch (error) {}
};
