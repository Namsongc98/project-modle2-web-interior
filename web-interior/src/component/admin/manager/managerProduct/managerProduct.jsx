import React, { useEffect, useState } from "react";
import "../admin.scss";
import { storage } from "../../../../firebase/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import axios from "axios";
import { Link } from "react-router-dom";

const ManagerProduct = () => {
  const [nameProduct, setNameProduct] = useState("");
  const [priceProduct, setPriceProduct] = useState("");
  const [quantityStock, setquantityStock] = useState("");
  const [descriptionProduct, setDescriptionProduct] = useState("");
  const [nameCategory, setNameCategory] = useState("");
  const [imgProduct, setImgProduct] = useState(null);
 
  const [dataProduct, setDataProduct] = useState([]);

  const imgListRef = ref(storage, "images/");

  const handleDataProduct = (e) => {
    e.preventDefault();
    //đẩy ảnh lên firebase
    //chech ảnh
    if (imgProduct == null) return;

    //chỉ đến kho trên firebase
    const imgRef = ref(storage, `images/${imgProduct.name}`);
    //tải ảnh lên vị trí
    uploadBytes(imgRef, imgProduct).then((resultImg) => {
      //lấy đường dẫn
      getDownloadURL(resultImg.ref).then((url) => {
        axios
          .post("http://localhost:3000/products", {
            nameProduct: nameProduct,
            description: descriptionProduct,
            price: priceProduct,
            nameCategory: nameCategory,
            rate: 5,
            imageUrl: url,
            quantityStock: quantityStock,
          })
          .then((response) =>
            setDataProduct((prev) => [...prev, response.data])
          )
          .catch((err) => console.log(err));
      });
    });
  };
 

  function getDataProduct() {
    axios
      .get("http://localhost:3000/products")
      .then((res) => setDataProduct(res.data))
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    getDataProduct();
  }, []);
  const handleDeleteProduct = (productId) => {
    axios
      .delete(`http://localhost:3000/products/${productId}`)
      .then(getDataProduct());
  };
  return (
    <>
      <div className="flex">
        <div className="wp-form">
          <h2 className="title-form font-medium text-sm">Nhập sản phẩm</h2>
          <div>
            <form onSubmit={handleDataProduct} className="flex">
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
                    onInput={(e) => setNameCategory(e.target.value)}
                  >
                    <option value={"Phòng khách"}>Phòng khách</option>
                    <option value={"Phòng bếp"}>Phòng bếp</option>
                    <option value={"Phòng ngủ"}>Phòng ngủ</option>
                    <option value={"Phòng làm việc"}>Phòng làm việc</option>
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
      <div className="mt-10 wp-product">
        <table className="min-w-full table-product ">
          <thead className="th-titlePro max-w-full thead-product">
            <tr className="  min-w-{1200px} h-max  tr-product">
              <th > STT</th>
              <th >Tên sản phẩm</th>
              <th >Loại sản phẩm</th>
              <th >Giá sản phẩm</th>
              <th >Số lượng sản phẩm</th>
              <th >Hình ảnh thể hiện</th>
              <th >Mô tả sản phẩm</th>
              <th > Edit</th>
              <th > Delete</th>
            </tr>
          </thead>
          <tbody className="th-titlePro max-w-full">
            {dataProduct &&
              dataProduct.length > 0 &&
              dataProduct.map((itemProduct, index) => {
                return (
                  <tr key={index} className="tr-product">
                    <td >{itemProduct.id}</td>
                    <td >{itemProduct.nameProduct}</td>
                    <td >{itemProduct.nameCategory}</td>
                    <td >{itemProduct.price}</td>
                    <td >{itemProduct.quantityStock}</td>

                    <td>
                      <img src={itemProduct.imageUrl} className="w-8" />
                    </td>

                    <td>{itemProduct.description}</td>
                   
                      <td>
                        <Link to={`/admin/managerproduct/editproduct/${itemProduct.id}`} className="btn">
                        Edit
                        </Link>
                      </td>
                  
                    <td>
                      <button
                      className="btn"
                        onClick={() => handleDeleteProduct(itemProduct.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManagerProduct;
