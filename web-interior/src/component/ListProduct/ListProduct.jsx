import React, { useContext } from "react";
import ItemProduct from "./itemProduct/ItemProduct";


import "./ListProduct.scss";
import { AppContext } from "../context/AppContext";
export default function ListProduct() {
  const { listProduct } = useContext(AppContext);

  return (
    <>
      <div className="mt-10 title__product ">
        <h1 className="font-bold text-3xl text-center">Sản Phẩm</h1>
      </div>
      <div className="wp-List grid grid-cols-2 md:grid-cols-4  ">
        {listProduct.length > 20 &&
          listProduct.map((item, index) => (
            <ItemProduct key={index} itemProduct={{ item }} />
          ))}
      </div>
    </>
  );
}
