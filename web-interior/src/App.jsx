import Header from "./layoutComponent/Header";
import "./index.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home/Home";
import ListProduct from "./component/ListProduct/ListProduct";
import SpaceSolution from "./component/SpaceSolution/SpaceSolution";
import About from "./component/About/About";
import Admin from "./component/admin/admin";
import Login from "./component/Form/Login";
import Register from "./component/Form/Register";
import LiveRoom from "./component/Home/LiveRoom";
import BedRoom from "./component/Home/BedRoom";
import KitChen from "./component/Home/KitChen";
import OfficeRoom from "./component/Home/OfficeRoom";
import NotFound from "./component/NotFound/NotFound";
import Footer from "./component/footer/Footer";
import ManagerUser from "./component/admin/manager/managerUser";
import ManagerOrder from "./component/admin/manager/managerOrder";
import ManagerProduct from "./component/admin/manager/managerProduct";

function App() {
  return (
    <>
      <div className="max-w-screen-xl container ">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="liveroom" element={<LiveRoom />} />
            <Route path="bedroom" element={<BedRoom />} />
            <Route path="kitchen" element={<KitChen />} />
            <Route path="officeroom" element={<OfficeRoom />} />
          </Route>
          <Route path="/listproduct" element={<ListProduct />} />
          <Route path="/spacesolusion" element={<SpaceSolution />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<Admin/>}>
            <Route path="/admin/manageruser" element={<ManagerUser/>}/>
            <Route path="/admin/managerorder" element={<ManagerOrder/>}/>
             <Route index path="/admin/managerproduct"  element={<ManagerProduct/>}/>
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer/>
      </div>
    </>
  );
}

export default App;
