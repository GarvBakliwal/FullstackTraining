const express = require('express')
const productController = require('../controller/productController')
const router = express.Router();

router.get('/getproduct',productController.getAllProduct)
// console.log(productController);

router.post('/addproduct',productController.addproduct)

module.exports = router;