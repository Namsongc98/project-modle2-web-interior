import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div class>
      <div>
        <img src="" alt=""></img>
        <div>
          <input />
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
      </div>
      <ul>
        <li> <NavLink to={"/"} style={{}}>Home</NavLink> </li>
        <li> <NavLink to={"/listproduct"} style={{}}>listproduct</NavLink> </li>
        <li> <NavLink to={"/spacesolusion"} style={{}}></NavLink> </li>
        <li> <NavLink to={"/about"} style={{}}></NavLink> </li>
        <li> <NavLink to={"/contact"} style={{}}></NavLink> </li>
      </ul>
    </div>
  );
}
