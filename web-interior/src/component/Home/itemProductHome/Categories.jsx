import React from "react";
import "../Home.scss";
import { Link } from "react-router-dom";
function Categories(props) {
  const product = props.productCategory.product;

  return (
    <>
      <div className="text-center productCategory" >
        <img src={product.imageUrl} className="mx-2 imgProduct" />
        <h2 className=" mt-3">{product.nameProduct}</h2>
        <p className=" mt-3">{product.nameCategory}</p>
        <h4 className=" mt-3 color text-2xl">{product.price}</h4>
        <Link to={`/cartproduct/detailproduct/${product.id}`}  >
          <button className="btn-ProductBuy">MUA NGAY</button>
        </Link>
      </div>
    </>
  );
}

export default Categories;
