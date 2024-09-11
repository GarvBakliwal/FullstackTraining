const product = require('./../products')
exports.getAllProduct = (req,res)=>{
    res.status(200).json({
        length : product.length,
        data : product
    });
}
exports.addproduct = (req,res)=>{
    const newData = req.body;
    newData.id = product.length + 1;
    product.push(newData);
    res.json({
        data: product
    })
}