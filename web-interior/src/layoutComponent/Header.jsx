import React from "react";
import { NavLink } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { BsCart4 } from "react-icons/bs";
import { BsPhone } from "react-icons/bs";
import logo from "../assets/img/logo-web.webp";
import covietnam from "../assets/img/Co-Vietnam.webp";
import "../layoutComponent/header.scss";
export default function Header() {
  return (
    <div className=" max-h-48 wp-header relative ">
      <div className="grid  wp-header-top">
        <img src={logo} alt="" className="w-64" />
        <div className=" wp-header-input">
          <input className=" input-header " placeholder="Tìm sản phẩm" />
          <div className="wp-icon-header">
            <BsSearch className="icon-header" />
          </div>
        </div>

        <ul className="flex wp-header-icon-end">
          <li className="header-icon-end-item">
            <BiUser />
          </li>

          <li className="header-icon-end-item">
            <BsCart4 />
            <div className="cout-cart">
              <span className="cout-cart-number">1</span>
            </div>
          </li>
          <li className="header-icon-end-item ">
            <img src={covietnam} className="img-flag" />
          </li>
        </ul>
      </div>
      <ul className="flex wp-nav-header">
        <li className="">
          {" "}
          <NavLink to={"/"} style={{}} className={"wp-nav-header"}>
            Trang chủ
          </NavLink>{" "}
        </li>
        <li className="">
          {" "}
          <NavLink to={"/listproduct"} style={{}} className={"wp-nav-header"}>
            Sản Phẩm
          </NavLink>{" "}
        </li>
        <li className="">
          {" "}
          <NavLink to={"/spacesolusion"} style={{}} className={"wp-nav-header"}>
            Giải pháp không gian
          </NavLink>{" "}
        </li>
        <li className="">
          {" "}
          <NavLink to={"/about"} style={{}} className={"wp-nav-header"}>
            {" "}
            About
          </NavLink>{" "}
        </li>
        <li className="">
          {" "}
          <NavLink to={"/contact"} style={{}} className={"wp-nav-header"}>
            {" "}
            Kêt nối
          </NavLink>{" "}
        </li>
        <li className="flex wp-iconPhone">
          {" "}
          <BsPhone className="phone-icon-header"/>
          <div>
            <p className="text-sm">HOTLINE</p>
            <p className="text-xl text-amber-500 ">12345678</p>
          </div>
        </li>
      </ul>
    </div>
  );
}
