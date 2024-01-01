import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../components/Cart/Cart'
import Product from '../components/Product/Product'

function AllRoute() {
  return (
    <Routes>
<Route path="/" element={<Cart />} />
<Route path="/product" element={<Product />} />

    </Routes>
  )
}

export default AllRoute