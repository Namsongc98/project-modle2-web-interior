import React from "react";
import imgbed from "../../assets/img/giuongNgu.jpg.jpg"
  import "./itemProduct.scss"
export default function ItemProduct() {
  return (
  
    <div className="ProducItem">
        
      <div className="product-img-wp">
        <img src={imgbed} className="img-product"/>
      </div>
      <div className="infor-product flex flex-col ">
        <h1 className="name-product font-normal text-2xl">tên sản phẩm</h1>
        <span className="price-product text-lg"> 123456</span>
      </div>
      <button className="btn-product">Mua Ngay</button>
    </div>
   
  );
}
