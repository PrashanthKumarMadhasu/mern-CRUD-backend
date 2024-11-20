const express = require("express");
const Product = require("../models/product.model");
const router = express.Router();
const {addProducts, getProducts, getProduct, updateProduct, deleteProduct} = require("../controllers/product.controller");


//add product ----[ CREATE API ]----
router.post('/', addProducts);

//get all products ----[ READ API ]----
router.get('/', getProducts);


//get product by id ----[ READ API]----
router.get('/:id', getProduct);

//update product ----[ UPDATE API ]----
router.put('/:id', updateProduct);

//delete product ----[ DELETE API ]----
router.delete('/:id', deleteProduct);

module.exports = router;