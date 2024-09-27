const express = require('express')
const router = express.Router() ;

const productController = require('./../controllers/productController')
const upload = require('./../middleware/upload')

router.post('/addProduct', upload.single('image') , productController.createProduct)
router.get('/getproducts', productController.getProduct);
router.patch('/updateproduct/:id',productController.updateProduct);
router.delete('/deleteproduct/:id',productController.deleteProduct);

module.exports = router