import Header from "./layoutComponent/Header";
import "./index.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home/Home";
import ListProduct from "./component/ListProduct/ListProduct";
import SpaceSolution from "./component/SpaceSolution/SpaceSolution";
import About from "./component/About/About";
import Admin from "./component/admin/Admin";
import Login from "./component/Form/Login";
import Register from "./component/Form/Register";
import NotFound from "./component/NotFound/NotFound";
import Footer from "./component/footer/Footer";
import ManagerUser from "./component/admin/managerUser/managerUser";
import ManagerOrder from "./component/admin/manager/managerOrder/managerOrder";
import ManagerProduct from "./component/admin/manager/managerProduct/managerProduct";
import EditProduct from "./component/admin/manager/managerProduct/editProduct";
import CartProduct from "./component/cartProduct/cartProduct";
import DetailProduct from "./component/detailProduct/DetailProduct";
function App() {
  return (
    <>
      <div className="max-w-screen-xl container ">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listproduct" element={<ListProduct />} />
          <Route path="/spacesolusion" element={<SpaceSolution />} />
          <Route path="/about" element={<About />} />
          <Route path="/cartproduct/detailproduct/:id" element={<DetailProduct />} />
          
          <Route path="/cartproduct" element={<CartProduct/>} />
          <Route path="/admin" element={<Admin />}>
            <Route
              exact
              path="/admin/managerproduct/editproduct/:id"
              element={<EditProduct />}
            />
            <Route
              index
              path="/admin/managerproduct"
              element={<ManagerProduct />}
            />
            <Route path="/admin/manageruser" element={<ManagerUser />} />
            <Route path="/admin/managerorder" element={<ManagerOrder />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
