const Product = require('../models/productModel')


exports.createProduct = async(req,res) => {
    try {
         const {name ,  price , category ,discountPercentage , stock , description} = req.body

  const image = req.file.path

const product = await Product.create({
    name ,price ,category, discountPercentage,stock ,image,description})

    if(product){
        res.status(200).json({
          message : 'success' ,
          product
        })
    }

    } catch (error) {
       res.status(500).send(error) 
    }
 
  
}

exports.getProduct = async(req,res)=>{
    try {
      const product = await Product.find().populate('category')
      
      if(product){
        res.status(200).json({
            product
        })
      }
    } catch (error) {
        res.status(500).json({
            error
        })
    }
}

exports.updateProduct = async (req, res) => {
  const { id } = req.params;
  // console.log("get body", req.body);
  // console.log("get id", id);
  try {
      const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {
          new: true
      });
      res.status(200).json(updatedProduct);
  } catch (error) {
      res.status(400).send(error);
  }
}

exports.deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
      const deletedProduct = await Product.findByIdAndDelete(id);
      res.status(200).json(deletedProduct);
  } catch (error) {
      res.status(400).send(error);
  }
}