import React, { useState } from "react";

import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [dataUser, setDataUser] = useState([]);

  //error
  const [errUserName, setErrUserName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [errAddress, setErrAddress] = useState("");
  const [errPhone, setErrPhone] = useState("");

  //regex
  const userNameRegex = /^[a-zA-Z0-9_\s]{8,}$/;
  const chexRegexName = userNameRegex.test(userName);
  const userEmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const checkEmail = userEmailRegex.test(email);
  const userPasswordRegex = /^[a-zA-Z0-9]{8,}$/;
  const checkPassword = userPasswordRegex.test(password);

  //call api
  const dataUserApi = async () => {
    await axios
      .get("http://localhost:3000/users")
      .then((response) => setDataUser(response.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    dataUserApi();
  }, []);

  let checkEmailApi;
  if (dataUser.length > 0) {
    checkEmailApi = dataUser.some((item) => item.email === email);
  }
  
  
const navigate = useNavigate()
  const handleSumit = (event) => {
    event.preventDefault();

    //validate userName
    !userName && setErrUserName("Mời bạn nhập tên");
    !email && setErrEmail("Mời bạn nhập Email");
    !password &&
      setErrPassword("Mời bạn nhập mật khẩu ,mật khẩu không chứa dấu cách ");
    !address && setErrAddress("Mời bạn nhập Địa chỉ");
    !phone && setErrPhone("Mời bạn nhập Số điện thoại");

    if (
      chexRegexName &&
      checkEmail &&
      checkPassword &&
      address &&
      !checkEmailApi
    ) {
      axios
        .post("http://localhost:3000/users", {
          userName: userName,
          email: email,
          password: password,
          phone: phone,
          address: address,
          permission: 1
        })
      
        .catch((err) => console.log(err));
        navigate("/")
    } 
  };

  return (
    <div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Đăng kí
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSumit}>
            <div>
              <label
                htmlFor="userName"
                className="flex text-sm font-medium leading-6 text-gray-900 justify-between "
              >
                Họ và tên
              </label>
              <div className="mt-2">
                <input
                  id="userName"
                  name="userName"
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {!userName ? (
                <span style={{ color: "red" }}>{errUserName} </span>
              ) : (
                <></>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="flex text-sm font-medium leading-6 text-gray-900 justify-between"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  value={email}
                  type="email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {!email ? (
                <span style={{ color: "red" }}>{errEmail}</span>
              ) : (
                <></>
              )}
              {checkEmailApi ? (
                <span style={{ color: "red" }}>Trùng Email </span>
              ) : (
                <></>
              )}
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="flex w-full justify-between text-sm  font-medium leading-6 text-gray-900 "
                >
                  <div>Mật khẩu</div>
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  value={password}
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {!password || !checkPassword ? (
                <span style={{ color: "red" }}>{errPassword}</span>
              ) : (
                <></>
              )}
            </div>

            <div>
              <label
                htmlFor="phone"
                className="flex justify-between text-sm font-medium leading-6 text-gray-900"
              >
                       Phone
                
              </label>
              <div className="mt-2  ">
                <input
                  id="phone"
                  name="phone"
                  value={phone}
                  type="number"
                  min="0"
                  onChange={(e) => setPhone(e.target.value)}
                  className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
       
                {!phone ? (
                  <span style={{ color: "red" }}>{errPhone}</span>
                ) : (
                  <></>
                )}
            </div>
            <div>
              <label
                htmlFor="address"
                className="flex justify-between text-sm font-medium leading-6 text-gray-900"
              >
                Địa chỉ
               
              </label>
              <div className="mt-2  ">
                <textarea
                  id="address"
                  name="address"
                  value={address}
                  type="text"
                  onChange={(e) => setAddress(e.target.value)}
                  className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {!address ? (
                  <span style={{ color: "red" }}>{errAddress}</span>
                ) : (
                  <></>
                )}
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Đăng kí
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
