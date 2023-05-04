import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


import "../detailProduct/detailProduct.scss";
import { AppContext } from "../context/AppContext";
function DetailProduct() {
  const { id } = useParams();
  const [itemProduct, setItemProduct] = useState();
  const productId = () => {
    axios
      .get(`http://localhost:3000/products/${id}`)
      .then((reponse) => setItemProduct(reponse.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    productId();
  }, []);

 
  const {dataUserLocal} = useContext(AppContext)
  console.log(dataUserLocal.length)
  const handleBuy = () => {
    if(dataUserLocal.length==0){
      alert("bạn chưa đăng nhập")
    }else{
      alert("bạn đã đăng kí")
    }
  };

  return (
    <div className="container">
      <div className=" grid grid-cols-3 my-8 items-center mt-10">
        <div className=" title-div h-8"></div>
        <h1 className=" font-bold text-5xl text-orange-600 text-center ">
          Chi tiết sản phẩm
        </h1>
        <div className="title-div h-8"></div>
      </div>
      <div className="wp-detail-product">
        <div className="flex mt-10 detail-product">
          <img src={itemProduct?.imageUrl} alt="" className="mr-8"/>
          <ul>
            <li className="text-2xl font-medium flex mb-3"><span className="span-title">Tên sản phẩm: </span>{itemProduct?.nameProduct}</li>
            <li className="font-normal text-2xl flex mb-3"><span className="span-title">Loại:</span> {itemProduct?.nameCategory}</li>
            <li className="font-normal text-2xl flex mb-3"><span className="span-title">Chi tiết</span> {itemProduct?.description}</li>
            <li className="font-normal text-2xl flex mb-3"><span className="span-title">Đơn giá :</span>{itemProduct?.price}</li>
            
            <li className="btn-productPlus">
              <button onClick={handleBuy} className="">Thêm vào giỏ hàng</button>
            </li>
          </ul>
          
        </div>
      </div>
    </div>
  );
}

export default DetailProduct;
