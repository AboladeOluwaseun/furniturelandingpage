import React from "react";
import "./ShowcaseSearch.scss";
import Search from "../../Assets/ShowcaseAssets/Search.png";

const ShowcaseSearch = () => {
  return (
    <>
      <div className="search">
        <input type="search" name="" id="" placeholder="Search furniture" />
        <div className="span">
          <img src={Search} alt="Search-icon" />
        </div>
      </div>
    </>
  );
};

export default ShowcaseSearch;
