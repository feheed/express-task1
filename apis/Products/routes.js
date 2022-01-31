const express = require("express");
const router = express.Router();
const {
  createProduct,
  fetchProduct,
  deleteProduct,
  updateProduct,
} = require("./controller");

router.get("/", fetchProduct);

router.post("/", createProduct);

router.delete("/:id", deleteProduct);

router.put("/:id", updateProduct);

module.exports = router;
