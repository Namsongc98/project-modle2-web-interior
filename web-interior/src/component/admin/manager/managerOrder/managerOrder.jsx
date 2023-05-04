import React from "react";

const ManagerOrder = () => {
  return (
    <div>
      <div className=" grid grid-cols-3 items-center">
        <div className=" title-div h-4"></div>
        <h1 className=" font-bold text-xl text-orange-600 text-center ">
          Guản lí đơn hàng
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
          <tr>
            <td></td>
            <td></td>
            <td> </td>
            <td></td>
            <td> </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ManagerOrder;
