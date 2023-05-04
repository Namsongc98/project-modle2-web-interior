import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errEmail, setErrEmail] = useState([]);
  const [errPassword, setErrPassword] = useState([]);
  const [wrongEmail, setWrongEmail] = useState([]);
  const [wrongPassword, setWrongPassword] = useState([]);
  const { dataUser,dataUserLocal } = useContext(AppContext);
  

  const isLogin = {
    email,
    password,
  };

  const checkEmail = dataUser.some((item) => {
    return item.email === email;
  });
  const checkPassword = dataUser.some((item) => {
    return item.password === password;
  });
  const checkPermission = dataUser.find((item) => {
    return item.email === email;
  });

  const navigate = useNavigate();

  const handleSumbmit = (e) => {
    e.preventDefault();

    !email && setErrEmail("Mời nhập Email");
    !password && setErrPassword("Mời nhập mật khẩu");
    !checkEmail && setWrongEmail("Bạn nhập không đúng Email");
    !checkPassword && setWrongPassword("Bạn nhập không đúng mật khẩu");

    if (checkEmail && checkPassword) {
        dataUserLocal.push(isLogin);
        localStorage.setItem("dataUserLocal", JSON.stringify(dataUserLocal));
       if (checkPermission.permission === 0) {
        navigate("/admin/managerproduct");
      } else if (checkPermission.permission === 1) {
        navigate("/");
      }
    } else {
      alert("đăng nhập thất bại");
    }
  };
  return (
    <div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Đăng nhập
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSumbmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>

              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {!email ? (
                <span style={{ color: "red" }}>{errEmail}</span>
              ) : (
                <></>
              )}
              <br />
              {!checkEmail ? (
                <span style={{ color: "red" }}>{wrongEmail}</span>
              ) : (
                <></>
              )}
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Mật khẩu
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {!password ? (
                <span style={{ color: "red" }}>{errPassword}</span>
              ) : (
                <></>
              )}
              <br />
              {!checkPassword ? (
                <span style={{ color: "red" }}>{wrongPassword}</span>
              ) : (
                <></>
              )}
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full  justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Đăng Nhập
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
