import React, { useEffect, useState } from "react";
import "./admin.scss";
import { storage } from "../../../firebase/firebase";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import axios from "axios";

const ManagerProduct = () => {
  const [nameProduct, setNameProduct] = useState("");
  const [priceProduct, setPriceProduct] = useState("");
  const [quantityStock, setquantityStock] = useState("");
  const [descriptionProduct, setDescriptionProduct] = useState("");

  const [imgProduct, setImgProduct] = useState();
  const [nameCategory, setNameCategory] = useState();
  const [imgListProduct, setImgListProduct] = useState([]);
  const [dataUser, setDataUser] = useState([])

  const imgListRef = ref(storage, "images/");

  const handleDataProduct = (e) => {
    e.preventDefault();
    //đẩy ảnh lên firebase
    //chech ảnh
    if (imgProduct == null) return;
    //gán ảnh ra một url
    imgProduct.preview = URL.createObjectURL(imgProduct);
    //chỉ đến kho trên firebase
    const imgRef = ref(storage, `images/${imgProduct.name}`);
    //tải ảnh lên vị trí
    uploadBytes(imgRef, imgProduct).then((snapshot) => {
      //lấy đường dẫn
      getDownloadURL(snapshot.ref).then((url) => {
        
      });
    });
  };
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
  .then((response) => setDataUser(...response,dataUser))
  .catch((err) => console.log(err));
  useEffect(() => {
    //lấy tất cả ảnh về
    listAll(imgListRef).then((res) => {
      //duyệt ảnh
      res.items.forEach((item, index) => {
        //lấy đường link ảnh
        getDownloadURL(item).then((url) => {
          setImgListProduct((prev) => [...prev, url]);
        });
      });
    });
  }, []);
  //clean ảnh cũ
  useEffect(() => {
    return () => {
      imgProduct && URL.revokeObjectURL(imgProduct.preview);
    };
  }, [imgProduct]);

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
                    onChange={(e) => setNameProduct(e.target.value)}
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
                    onChange={(e) => setPriceProduct(e.target.value)}
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
                    onChange={(e) => setquantityStock(e.target.value)}
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
                    onChange={(e) => setDescriptionProduct(e.target.value)}
                  />
                </div>
                <div className="mt-6 wp-input">
                  <label className="text-sm font-normal ">Hình ảnh</label>
                  <br />
                  <input
                    type="file"
                    onChange={(e) => setImgProduct(e.target.files[0])}
                  />
                </div>
                <button className="btn-submit"> Nhập </button>
              </div>
            </form>
          </div>
        </div>
        <div className="wp-imgProduct">
          {imgProduct && (
            <img className="imgProduct w-{100px} " src={imgProduct.preview} />
          )}
        </div>
      </div>
      <div className="mt-10">
        <table className="min-w-full">
          <thead className="th-titlePro max-w-full">
            <tr className=" px-2 py-2 min-w-{1200px} h-max  ">
              <th> STT</th>
              <th>Tên sản phẩm</th>
              <th>Loại sản phẩm</th>
              <th>Giá sản phẩm</th>
              <th>Số lượng sản phẩm</th>
              <th>Hình ảnh thể hiện</th>
              <th>Mô tả sản phẩm</th>
              <th> Edit</th>
              <th> Delete</th>
            </tr>
          </thead>
          <tbody className="th-titlePro max-w-full">
            {dataUser &&
              dataUser.map((itemProduct, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{itemProduct.nameProduct}</td>
                    <td>{itemProduct.description}</td>
                    <td>{itemProduct.price}</td>
                    <td>{itemProduct.nameCategory}</td>
                    <td>{itemProduct.rate}</td>
                    <td>{itemProduct.imageUrl}</td>
                    <td>{itemProduct.quantityStock}</td>
                    <td>
                      <button>Edit</button>
                    </td>
                    <td>
                      <button>Delete</button>
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
