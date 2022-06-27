import React from "react";
import navArrow from "../../Assets/ShowcaseAssets/navArrow.png";
import "./NavItems.scss";
const NavItems = (props) => {
  const propsObject = props;
  const propValues = Object.values(propsObject);
  const navItems = propValues.map((navItemName, index) => {
    return (
      <div className="nav-item">
        <p>{propValues[index]}</p>
        <img src={navArrow} alt="navArrow" />
      </div>
    );
  });

  return (
    <>
      <div className="nav-container">{navItems}</div>
    </>
  );
};

export default NavItems;
