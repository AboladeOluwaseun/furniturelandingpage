import React from "react";
import NavItems from "./NavItems";
import "./Header.scss";
import shoppingBag from "../../Assets/ShowcaseAssets/shoppingBag.png";
import hamburger from "../../Assets/ShowcaseAssets/hamburger.png";
const Header = () => {
  return (
    <>
      <div className="header">
        <h1>Foniso</h1>
        <NavItems
          key="1"
          Furniture="Furniture"
          Blog="Blog"
          AboutUs="About Us"
          Contact="Contact"
        ></NavItems>
        <div className="cart">
          <img src={shoppingBag} alt="" />
          <span>0</span>
        </div>
        <div className="hamburger">
          <img src={shoppingBag} alt="" />
        </div>
      </div>
    </>
  );
};

export default Header;
