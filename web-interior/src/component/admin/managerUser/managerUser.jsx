import React, { useContext } from "react";
import "./ManagerUser.scss";
import { AppContext } from "../../context/AppContext";
const ManagerUser = () => {
  const { dataUser } = useContext(AppContext);
  console.log(dataUser);
  return (
    <div className="">
      <div className=" grid grid-cols-3 items-center">
        <div className=" title-div h-4"></div>
        <h1 className=" font-bold text-xl text-orange-600 text-center ">
          Guản lí người dùng
        </h1>
        <div className="title-div h-4"></div>
      </div>
      <table className="w-full table-Cart ">
        <thead>
          <tr>
            <th>stt</th>
            <th>Tên Người dùng</th>
            <th>Email </th>
            <th>số điện thoại</th>
            <th>Địa chỉ</th>
          </tr>
        </thead>
        <tbody>
          {dataUser?.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.userName}</td>
              <td>{item.email} </td>
              <td>{item.phone}</td>
              <td> {item.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManagerUser;
