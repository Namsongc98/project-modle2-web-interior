import React from "react";
import { Link, Outlet } from "react-router-dom";

import "./manager/admin.scss";
const Admin = () => {
  return (
    <div className="flex wp-manager">
      <div className="nav-left">
        <ul className="nav-wp">
          <li className="nav-item">
            <Link to={"/admin/managerproduct"}>Quản lí sản phẩm</Link>
          </li>
          <li className="nav-item">
            <Link to={"/admin/manageruser"}> Quản lí người dùng</Link>
          </li>
          <li className="nav-item">
            <Link to={"/admin/managerorder"}> Quản lí đơn hàng</Link>
          </li>
        </ul>
      </div>
      <div className="nav-right">
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
