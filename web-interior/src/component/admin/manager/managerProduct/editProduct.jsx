import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../admin.scss";
import axios from "axios";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../../../firebase/firebase";
import { useNavigate } from "react-router-dom";


function EditProduct() {
 
  const [nameProduct, setNameProduct] = useState("");
  const [priceProduct, setPriceProduct] = useState("");
  const [quantityStock, setquantityStock] = useState("");
  const [descriptionProduct, setDescriptionProduct] = useState("");
  const [nameCategory, setNameCategory] = useState("");
  const [imgProduct, setImgProduct] = useState(null);
 

  const { id } = useParams();
 
  const navigate = useNavigate();

  const handleEditProduct = async (e) => {
    e.preventDefault();
    if (imgProduct == null) return;
    const imgRef = ref(storage, `images/${imgProduct.name}`);
    await uploadBytes(imgRef, imgProduct).then((resultImg) => {
      getDownloadURL(resultImg.ref).then((url) => {
        axios.put(`http://localhost:3000/products/${id}`, {
          nameProduct: nameProduct,
          description: descriptionProduct,
          price: priceProduct,
          nameCategory: nameCategory,
          rate: 5,
          imageUrl: url,
          quantityStock: quantityStock,
        });
      });
    });

    navigate("/admin/managerproduct")
  };
  return (
    <>
   <div className=" bg-wpEdit  ">
        <div className="wp-form bg-white ">
          
            <h2 className="title-form font-medium text-sm">Nhập sản phẩm</h2>
      
          <div>
            <form onSubmit={handleEditProduct} className="flex">
              <div className="">
                <div className="mt-4 wp-input">
                  <label
                    htmlFor="namePrduct"
                    className="text-sm font-normal mt-3"
                  >
                    Tên sản phẩm
                  </label>
                  <br />
                  <input
                    className="inputProduct"
                    type="text"
                    id="nameProduct"
                    name="nameProduct"
                    value={nameProduct}
                    onInput={(e) => setNameProduct(e.target.value)}
                  />
                </div>
                <div className=" wp-input">
                  <label className="text-sm font-normal mt-3">
                    Sản phẩm thuộc:
                  </label>
                  <br />
                  <select
                    className="inputProduct"
                    onChange={(e) => setNameCategory(e.target.value)}
                    value={nameCategory}
                  >
                    <option>Phòng khách</option>
                    <option>Phòng bếp</option>
                    <option>Phòng ngủ</option>
                    <option>Phòng làm việc</option>
                  </select>
                </div>
              </div>
              <div className="">
                <div className=" wp-input">
                  <label
                    className="text-sm font-normal "
                    htmlFor="priceProduct"
                  >
                    Giá sản phẩm
                  </label>
                  <br />
                  <input
                    className="inputProduct"
                    type="number"
                    id="priceProduct"
                    name="priceProduct"
                    onInput={(e) => setPriceProduct(e.target.value)}
                    value={priceProduct}
                  />
                </div>
                <div className=" wp-input">
                  <label
                    className="text-sm font-normal "
                    htmlFor="quantityStock"
                  >
                    Số lượng sản phẩm
                  </label>
                  <br />
                  <input
                    className="inputProduct"
                    type="number"
                    id="quantityStock"
                    name="quantityStock"
                    value={quantityStock}
                    onInput={(e) => setquantityStock(e.target.value)}
                  />
                </div>
              </div>
              <div className="">
                <div className="mt-6 wp-input">
                  <label className="text-sm font-normal">Mô tả sản phẩm</label>
                  <br />
                  <textarea
                    cols={40}
                    rows={3}
                    className="text-dctProduct"
                    id="descriptionProduct"
                    name="descriptionProduct"
                    value={descriptionProduct}
                    onInput={(e) => setDescriptionProduct(e.target.value)}
                  />
                </div>
                <div className="mt-6 wp-input">
                  <label className="text-sm font-normal ">Hình ảnh</label>
                  <br />
                  <input
                    type="file"
                    onInput={(e) => setImgProduct(e.target.files[0])}
                  />
                </div>
                <button className="btn-submit"> Nhập </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    
    </>
  );
}

export default EditProduct;
