import React from 'react'
import productsData from './Products.json'
const Product = () => {

  return (
    <div>
        <h1>Cart</h1>
        {productsData.map((productDetail,index)=>{
            return <div>
            <h2>Product Name : {productDetail.name}</h2>
            <h3>Price : ₹{productDetail.price}</h3>
            </div>
        })}
    </div>
  )
}

export default Product