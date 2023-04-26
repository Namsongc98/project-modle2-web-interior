import React from "react";
import logo from "../../assets/img/logo-web.webp";
import "./footer.scss";
import {
  BsFacebook,
  BsFillTelephoneFill,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import { BiVoicemail } from "react-icons/bi";
const Footer = () => {
  return (
    <div className="px-9 py-9 footer-wp">
      <img src={logo} className="w-44" />
      <div className="w-56 footer-icon ">
        <ul className="flex justify-between">
          <li className="text-3xl">
            <BsFacebook />
          </li>
          <li className="text-3xl">
            <BiVoicemail />
          </li>
          <li className="text-3xl">
            <BsTwitter />
          </li>
          <li className="text-3xl">
            <BsFillTelephoneFill />
          </li>
          <li className="text-3xl">
            <BsYoutube />
          </li>
        </ul>
      </div>
      <div className="footer-list">
        <ul className=" flex justify-between ">
          <li>
            <ul>
              <li>Giới thiệu</li>
              <li>Hệ thống cửa hàng</li>
              <li>Tuyển dụng</li>
              <li>Catalog</li>
            </ul>
          </li>
          <li>
            <ul>
              <li>Hỗ trợ khách hàng</li>
              <li> Bảo hành và đổi trả</li>
              <li> Chính sách khách hàng</li>
              <li> Chính sách bảo hành</li>
            </ul>
          </li>
          <li>
            <ul>
              <li> Hệ thống cửa hành</li>
              <li> HotLine CSHK</li>
              <li> 1900988960</li>
              <li>beyours.vn</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
