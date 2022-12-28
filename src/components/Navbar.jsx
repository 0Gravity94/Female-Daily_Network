import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { SlUserFemale } from "react-icons/sl";
import fdn from "../assets/fdn.png";

function Navbar() {
  return (
    <div className="navbar p-0">
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
        <button className="flex justify-center gap-2 items-center bg-pink-700 text-white box-content w-40 h-16">
          <SlUserFemale /> LOGIN/SIGNUP
        </button>
        {/* <a className="btn bg-pink-600 box-content">LOGIN/SIGNUP</a> */}
      </div>
    </div>
  );
}

export default Navbar;
