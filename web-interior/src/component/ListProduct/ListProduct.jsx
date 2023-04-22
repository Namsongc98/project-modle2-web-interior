import React from 'react'
import ItemProduct from '../ItemProduct/ItemProduct.jsx'
import "./ListProduct.scss"
export default function ListProduct() {
  return (
    <div className='wp-List grid '>
      <ItemProduct/>
      <ItemProduct/>
      <ItemProduct/>
      <ItemProduct/>
    </div>
  )
}
