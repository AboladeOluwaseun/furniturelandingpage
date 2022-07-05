import React from "react";
import NavItems from "./NavItems";
import "./Header.scss";
import shoppingBag from "../../Assets/ShowcaseAssets/shoppingBag.png";
import MenuIcon from "@mui/icons-material/Menu";
const Header = () => {
  return (
    <>
      <div className="header">
        <h1>Foniso</h1>
        <NavItems
          Furniture="Furniture"
          Blog="Blog"
          AboutUs="About Us"
          Contact="Contact"
        ></NavItems>
        <div className="cart">
          <img src={shoppingBag} alt="" />
          <span>0</span>
        </div>
        <MenuIcon
          sx={{
            display: {
              xs: "block",
              sm: "none",
              md: "none",
              lg: "none",
              xl: "none",
            },
          }}
        />
      </div>
    </>
  );
};

export default Header;
