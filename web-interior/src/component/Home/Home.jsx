import React from "react";
import Slider from "react-slick";
import img from "../../assets/img/imgShara.jpg";
import img2 from "../../assets/img/imgVecislavas.jpg";
import img3 from "../../assets/img/imgVecislavasTvi.jpg";
import imgNewsBeYourhop from "../../assets/img/News-BeYour-hop.jpg";
import imgNewsBeYouracion from "../../assets/img/News-BeYour-acion.jpg";
import NewsBeYour from "../../assets/img/News-BeYour.jpg";
import dauAnmoi from "../../assets/img/dauAn-moi.jpg";
import dauAnTre from "../../assets/img/dauAntre.jpg";
import dauAntre from "../../assets/img/dauAn-tre.jpg";
import { Outlet } from "react-router-dom";
import imgProduct from "../../assets/img/giuongNgu.jpg.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./home.scss";
const products = [
  {
    name: "Sofa Bed",
    price: 200000,
  },
  {
    name: "Sofa Bed",
    price: 200000,
  },
  {
    name: "Sofa Bed",
    price: 200000,
  },
  {
    name: "Sofa Bed",
    price: 200000,
  },
];
const newsBeList = [
  {
    img: imgNewsBeYourhop,
    text: "Tưng bừng khai trương cửa hàng nội thất Beyour",
  },
  {
    img: imgNewsBeYouracion,
    text: "Tưng bừng khai trương cửa hàng nội thất Beyour",
  },
  {
    img: NewsBeYour,
    text: "Tưng bừng khai trương cửa hàng nội thất Beyour",
  },
];

// mang data dấu ấn
const imprints = [
  {
    image: dauAnTre,
    text: "Từ cái tên cha gửi gắm ước mơ lớn",
  },
  {
    image: dauAnmoi,
    text: "Từ cái tên cha gửi gắm ước mơ lớn",
  },
  {
    image: dauAntre,
    text: "Từ cái tên cha gửi gắm ước mơ lớn",
  },
];
const listImage = [img, img2, img3];
export default function Home() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="home">
      <Slider {...settings}>
        {listImage.map((img, index) => (
          <div>
            <img src={img} key={index} />
          </div>
        ))}
      </Slider>
      <Outlet />
      <div className="px-10 py-10">
        <div className="flex justify-between items-center">
          <div className="block-title "></div>
          <h1 className="title-product text-2xl">Sản Phẩm Tiêu Biểu</h1>
          <div className="block-title"></div>
        </div>
        <div className="grid wp-product">
          {products.map((product, index) => (
            <div className="text-center" key={index}>
              <img src={imgProduct} className="mx-2 imgProduct" />
              <h2 className=" mt-3">Tên Sản Phẩm</h2>
              <p className=" mt-3">{product.name}</p>
              <h4 className=" mt-3 color text-2xl">{product.price}</h4>
              <button className="btn-ProductBuy">MUA NGAY</button>
            </div>
          ))}
        </div>
      </div>
      <div className="px-10 py-10">
        <div className="flex justify-between items-center">
          <div className="block-title "></div>
          <h1 className="title-product text-2xl">Bản tin BeYour</h1>
          <div className="block-title"></div>
        </div>
        <div className="grid wp-news">
          {newsBeList.map((news, index) => (
            <div key={index}>
              <img src={news.img} />
              <h1>{news.text}</h1>
            </div>
          ))}
        </div>
      </div>
      <div className="px-10 py-10">
        <div className="flex justify-between items-center">
          <div className="block-title "></div>
          <h1 className="title-product text-2xl">Dấu ấn BEYOUR</h1>
          <div className="block-title"></div>
        </div>
        <div className="grid wp-news">
          {imprints.map((item, index) => (
            <div key={index}>
              <img src={item.image} />
              <h1 className="font-semibold ">{item.text}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
