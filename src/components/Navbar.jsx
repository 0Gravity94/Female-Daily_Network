import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import fdn from "../assets/fdn.png";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-start">
        <a className="btn btn-ghost">
          <GiHamburgerMenu />
        </a>
        <a className="btn btn-ghost">
          <img src={fdn} alt="female daily network" className="w-full h-1/3" />
        </a>
      </div>
      <div className="navbar-center flex">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search products, articles, topixs, brands, etc"
            className="lg:w-96 lg:h-10 input input-bordered"
          />
        </div>
      </div>
      <div className="navbar-end">
        <a className="btn bg-pink-600 box-content">LOGIN/SIGNUP</a>
      </div>
    </div>
  );
}

export default Navbar;
