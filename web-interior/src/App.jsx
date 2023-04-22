import Header from "./layoutComponent/Header";
import "./index.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home/Home";
import ListProduct from "./component/ListProduct/ListProduct";
import SpaceSolution from "./component/SpaceSolution/SpaceSolution";
import About from "./component/About/About";
import Contact from "./component/Contact/Contact";
import Login from "./component/Form/Login";
import LiveRoom from "./component/Home/LiveRoom";
import BedRoom from "./component/Home/BedRoom";
import KitChen from "./component/Home/KitChen";
import OfficeRoom from "./component/Home/OfficeRoom";
import NotFound from "./component/NotFound/NotFound";

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
          <Route path="/contact" element={<Contact></Contact>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Login />} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
