import React from "react";
import "./itemProduct.scss";
export default function ItemProduct(product) {

  //todo: Xử lý logic mua sản phẩm
  function handelBuy () {
    alert('Ban dang thuc hien thao tac mua hang!')
  }
  return (
    <div className="ProducItem">
      <div className="product-img-wp">
        <img src={product.img} className="img-product" />
      </div>
      <div className="infor-product flex flex-col ">
        <h1 className="name-product font-normal text-2xl">{product.name}</h1>
        <span className="price-product text-lg">{product.price}</span>
      </div>
      <button className="btn-product" onClick={handelBuy}>Mua Ngay</button>
    </div>
  );
}
