import { Children, createContext, useEffect, useState } from "react";
import axios from "axios";

export const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [listProduct, setListProduct] = useState([]);
  const [isToggle, setIsToggle] = useState(false);
  const [isToggleCart, setIsToggleCart] = useState(false);
  const [dataUser, setDataUser] = useState([]);

  const dataUserLocal = JSON.parse(localStorage.getItem("dataUserLocal")) || [];
  useEffect(() => {
    axios
      .get("http://localhost:3000/Categories")
      .then((response) => setCategories(response.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((response) => setListProduct(response.data))
      .catch((err) => console.log(err));
  }, []);
  const dataUserName = async () => {
    await axios
      .get("http://localhost:3000/users/")
      .then((response) => setDataUser(response.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    dataUserName();
  }, []);
  return (
    <AppContext.Provider
      value={{
        categories,
        listProduct,
        isToggle,
        setIsToggle,
        isToggleCart,
        setIsToggleCart,
        dataUser,
        setDataUser,
        dataUserLocal
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
