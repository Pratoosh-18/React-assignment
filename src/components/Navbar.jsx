import React from "react";
import logo from "../assets/logo.png";
import exploreicon from "../assets/icons/exploreicon.png";
import downarrow from "../assets/icons/down arrow.png";
import serachicon from "../assets/icons/searchicon.png";
import staricon from "../assets/icons/staricon.png";
import bookmarkicon from "../assets/icons/bookmarkicon.png";
import bellicon from "../assets/icons/bellicon.png";
import carticon from "../assets/icons/carticon.png";
import purplesearch from "../assets/icons/purplesearch.png"
import purplebell from "../assets/icons/purplebell.png"
import hamburger from "../assets/icons/hamburger.png"
import close from "../assets/icons/close.png"

const Navbar = () => {
  return (
    <div className="absolute top-0 w-full flex h-[80px] items-center justify-around">
      <img className="h-[36px] lg:h-[50px]" src={logo} alt="" />
      <div className="hidden lg:flex h-[40px]  justify-center items-center">
        <input
          className="w-[240px] h-[40px] border-[1px] border-gray-200 bg-[#EBEDF0] rounded-l-[8px] px-4"
          type="text"
          placeholder="Search here..."
        />
        <button className="w-[40px] h-[40px] bg-[#8064A2] rounded-r-[8px] flex justify-center items-center">
          <img className="h-[15px] w-[15 px]" src={serachicon} alt="" />
        </button>
      </div>
      <div className="hidden lg:flex justify-center items-center gap-2 lg:gap-4">
        <div className="flex justify-center items-center gap-1">
          <img className="h-[24px] w-[24px]" src={exploreicon} alt="" />
          <p>Explore</p>
          <img className="h-[24px] w-[24px]" src={downarrow} alt="" />
        </div>
        <div className="flex justify-center items-center gap-1">
          <img className="h-[24px] w-[24px]" src={staricon} alt="" />
          <p>Hobbies</p>
          <img className="h-[24px] w-[24px]" src={downarrow} alt="" />
        </div>
        <img className="h-[24px] w-[24px]" src={bookmarkicon} alt="" />
        <img className="h-[24px] w-[24px]" src={bellicon} alt="" />
        <img className="h-[24px] w-[24px]" src={carticon} alt="" />

        <button className="h-[40px] w-[112px] flex justify-center items-center border-[2px] border-[#8064A2] rounded-[8px]">
          Sign In
        </button>
      </div>
      <div className="flex lg:hidden gap-8">
        <img className="h-[24px]" src={purplesearch} alt="" />
        <img className="h-[24px]" src={purplebell} alt="" />
        <img  className="h-[24px]" src={hamburger} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
