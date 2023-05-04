import React from "react";
import "./cartproduct.scss";
import { BiTrash } from "react-icons/bi";
function CartProduct() {
  return (
    <div className="wp-Cart ">
      <div className=" grid grid-cols-3 my-8 items-center">
        <div className=" title-div h-8"></div>
        <h1 className=" font-bold text-5xl text-orange-600 text-center ">
          Giỏ hàng
        </h1>
        <div className="title-div h-8"></div>
      </div>
      <table className="w-full table-Cart">
        <thead>
          <tr>
            <th>Thôn tin sản phẩm</th>
            <th>Đơn giá </th>
            <th>Số Lượng</th>
            <th>Xóa</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src="" alt="" className="w-40" />
              <p>tên sp</p>
            </td>
            <td>9999 </td>
            <td>
              <div className="wp-btnCart">
                <button className="btn-Cart">-</button>
                <span>1</span>
                <button className="btn-CartPlus">+</button>
              </div>
            </td>

            <td>
              {" "}
              <BiTrash />
            </td>
          </tr>
        </tbody>
      </table>
      <div className="wp-total">
        <div className="wp-textarea">
          <label className=""> sagfsf</label>
          <textarea rows="4" cols="50" className="textarea-cart"></textarea>
        </div>
        <div className="wp-total-Money">
          <h1>Tổng tiền</h1>
          <button className="btn-product" >
            Mua
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
