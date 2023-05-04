import React from "react";
 
import "./itemProduct.scss";
import { Link } from "react-router-dom";

function ItemProduct(prop) {
  const item = prop.itemProduct.item;
 
  
  
 
  return (
    <>
      <div className="ProducItem">
        <div className="product-img-wp">
          <img src={item.imageUrl} className="img-product" />
        </div>
        <div className="infor-product flex flex-col ">
          <h1 className="name-product font-normal text-2xl">
            {item.nameProduct}
          </h1>
          <h4 className="price-product text-lg">{item.price}</h4>
        </div>
        <Link to={`/cartproduct/detailproduct/${item.id}`}>
          <button className="btn-product" >
            Xem chi tiết
          </button>
        </Link>
      </div>
    </>
  );
}

export default ItemProduct;
