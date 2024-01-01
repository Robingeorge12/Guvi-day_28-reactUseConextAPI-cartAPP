import React, { useContext } from 'react'
import "./Product.css"
import { AppContext } from '../../Context/Context'

function Product() {
  const value = useContext(AppContext)
  console.log(value)
  return (
    <div>Product</div>
  )
}

export default Product