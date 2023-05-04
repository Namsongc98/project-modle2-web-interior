import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { BsCart4 } from "react-icons/bs";
import { BsPhone } from "react-icons/bs";
import logo from "../assets/img/logo-web.webp";
import covietnam from "../assets/img/Co-Vietnam.webp";
import "../layoutComponent/header.scss";
import { AppContext } from "../component/context/AppContext";

export default function Header() {
  const {
    isToggle,
    setIsToggle,
    isToggleCart,
    setIsToggleCart,
    dataUserLocal,
    listProduct,
    dataUser
  } = useContext(AppContext);
  const vavigate = useNavigate();

  //remove user trên local
  const hanldeLogOut = () => {
    localStorage.removeItem("dataUserLocal");
    vavigate("/login");
  };

  //tìm sản phẩm trên thanh input
  const [findProductInput, setFindProductInput] = useState("");
  

  const checkProductInput = listProduct.filter((item) => item?.nameProduct?.toLowerCase()?.replace(/[^a-zA-Z0-9]/g, "")?.split("")===findProductInput?.nameProduct?.toLowerCase()?.replace(/[^a-zA-Z0-9]/g, "")?.split(""));
  console.log(checkProductInput);

 
   

  //toggleCart
  const hanldeToggleCart = () => {
    setIsToggleCart(!isToggleCart);
  };
  const hanldeToggle = () => {
    setIsToggle(!isToggle);
  };

  return (
    <div className=" max-h-52 wp-header relative ">
      <div className="grid  wp-header-top">
        <img src={logo} alt="" className="w-64" />
        <div className=" wp-header-input">
          <input
            className=" input-header "
            placeholder="Tìm sản phẩm"
            onChange={(e) => setFindProductInput(e.target.value)}
          />
          <div className="wp-icon-header">
            <BsSearch className="icon-header" />
          </div>
        </div>
        <ul className="flex wp-header-icon-end">
          <li className="header-icon-end-item">
            <div className="flex items-center">
            {dataUserLocal? <p className="font-thin text-xs ">{dataUserLocal[0]?.email}</p> :<></>}
            <BiUser className="toggleForm" onClick={hanldeToggle} />
            </div>
            {isToggle && (
              <div className="wp-form">
                {dataUserLocal.length > 0 ? (
                  <div className=" h-12 item-form">
                    <button onClick={hanldeLogOut}> Đăng xuất</button>
                  </div>
                ) : (
                  <div className=" h-12 item-form">
                    <Link to={"/login"}> Đăng nhập</Link>
                  </div>
                )}

                <div>
                  <Link to={"/register"}> Đăng kí</Link>
                </div>
              </div>
            )}
          </li>

          <li className="header-icon-end-item">
            <BsCart4 onClick={hanldeToggleCart} />
            <div className="cout-cart">
              <span className="cout-cart-number">1</span>
            </div>
            {isToggleCart && (
              <div className="w-60 h-auto wp-cart text-base ">
                <div className=" mb-3">
                  <p className="">Giỏ hàng</p>
                </div>
                <div className="flex ">
                  <img src="iyg" alt="" className="w-20 " />
                  <div className="ml-2 w-40 wp-product-cart mb-2 pb-2 text-xs">
                    <p>tên sản phẩm</p>
                    <div className="flex justify-between text-xs">
                      <span>Đơn giá</span>
                      <span>Đơn giá</span>
                    </div>
                    <div className="text-sm flex justify-between items-center ">
                      <p>số lượng</p>
                      <button className="btn-cart  border-solid border-slate-400 rounded-sm border w-5 h-3 leading-3 ">
                        -
                      </button>
                      <span>0</span>
                      <button className="btn-cart border-solid border-slate-400 rounded-sm border w-5 h-3 leading-3">
                        +
                      </button>
                      <button>xóa</button>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span>tổng</span>
                  <span>10000</span>
                </div>
                <div className="link-cart text-center ">
                  <Link to={"/cartproduct"}>xem giỏ hàng</Link>
                </div>
              </div>
            )}
          </li>
          <li className="header-icon-end-item ">
            <img src={covietnam} className="img-flag" />
          </li>
        </ul>
        <div className=" flex wp-iconPhone-rps">
          {" "}
          <BsPhone className="phone-icon-header-rps" />
          <div>
            <p className="text-sm">HOTLINE</p>
            <p className="text-xl text-amber-500 ">12345678</p>
          </div>
        </div>
      </div>
      <ul className="flex flex-wrap items-center  wp-nav-header">
        <li className="scroll-mx-1">
          {" "}
          <NavLink to={"/"} style={{}} className={"wp-nav-header"}>
            Trang chủ
          </NavLink>{" "}
        </li>
        <li className="scroll-mx-1">
          {" "}
          <NavLink to={"/listproduct"} style={{}} className={"wp-nav-header"}>
            Sản Phẩm
          </NavLink>{" "}
        </li>
        <li className="scroll-mx-1">
          {" "}
          <NavLink to={"/spacesolusion"} style={{}} className={"wp-nav-header"}>
            Giải pháp không gian
          </NavLink>{" "}
        </li>
        <li className="scroll-mx-1">
          {" "}
          <NavLink to={"/about"} style={{}} className={"wp-nav-header"}>
            {" "}
            About
          </NavLink>{" "}
        </li>

        <li className="flex wp-iconPhone">
          {" "}
          <BsPhone className="phone-icon-header" />
          <div>
            <p className="text-sm">HOTLINE</p>
            <p className="text-xl text-amber-500 ">12345678</p>
          </div>
        </li>
      </ul>
    </div>
  );
}
