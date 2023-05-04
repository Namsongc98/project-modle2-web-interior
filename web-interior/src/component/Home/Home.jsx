import React, { useEffect, useState, useContext } from "react";
import Slider from "react-slick";

import img from "../../assets/img/imgShara.jpg";
import img2 from "../../assets/img/imgVecislavas.jpg";
import img3 from "../../assets/img/imgVecislavasTvi.jpg";
import { newsBeList, imprints } from "./constanHome";
import Categories from "./itemProductHome/Categories"
import { AppContext } from "../context/AppContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./home.scss";

const listImage = [img, img2, img3];
export default function Home() {
  const {categories, listProduct} = useContext(AppContext)
 
  let [checkCategory, setCheckCategory] = useState();
  const handleCategories = (item, index) => {
    let listCategory =
      listProduct.length > 0 &&
      listProduct.filter(
        (itemProduct) => itemProduct.nameCategory === item.nameCategory
      );
    setCheckCategory(listCategory);
  };

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
          <div key={index}>
            <img src={img} key={index} />
          </div>
        ))}
      </Slider>

      <div className="px-10 py-10">
        <div className="flex justify-between items-center">
          <div className="block-title "></div>
          <h1 className="title-product text-2xl">Một số loại sản phẩm</h1>
          <div className="block-title"></div>
        </div>
        <div className="grid grid-cols-4 gap-2 justify-between mt-8 categoriesRepon">
          {
            categories?.map((item, index) => (
              <div
              key={index}
                className="wp-product-title"
                onClick={() => handleCategories(item)}
              >
                <div className="wp-img">
                  <img src={item.imgCategory} alt="" />
                </div>

                <h3 className="title-product">
                  {" "}
                  {item.nameCategory}
                </h3>
              </div>
            ))}
        </div>
        <div className="grid wp-product-home grid-cols-2 md:grid-cols-4">
          {
            checkCategory?.map((product, index) => (
             <Categories productCategory={{product}} key={index}/>
            ))}
        </div>
      </div>
      <div className="px-10 py-10">
        <div className="flex justify-between items-center">
          <div className="block-title "></div>
          <h1 className="title-product text-2xl text-center ">Bản tin BeYour</h1>
          <div className="block-title"></div>
        </div>
        <div className="grid wp-news">
          {newsBeList?.map((news, index) => (
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
          <h1 className="title-product text-2xl text-center">Dấu ấn BEYOUR</h1>
          <div className="block-title"></div>
        </div>
        <div className="grid wp-news">
          {imprints?.map((item, index) => (
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
