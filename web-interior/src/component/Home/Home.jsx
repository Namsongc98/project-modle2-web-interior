import React from "react";
import Slider from "react-slick";
import img from "../../assets/img/imgShara.jpg";
import img2 from "../../assets/img/imgVecislavas.jpg";
import img3 from "../../assets/img/imgVecislavasTvi.jpg";
import { Outlet } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./home.scss";
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
        <div>
          <img src={img} />
        </div>
        <div>
          <img src={img2} />
        </div>

        <div>
          <img src={img3} />
        </div>
      </Slider>
      <Outlet />
      
    </div>
  );
}
