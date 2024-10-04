

import React from 'react'
//dynamic routing
function ProductFirst({params}) {
  console.log(params)
  return (
    <div>
      Detail of product {params.productid}
    </div>
  )
}

export default ProductFirst
