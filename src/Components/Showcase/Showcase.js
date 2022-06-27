import React from "react";
import Header from "./Header";
import ShowcaseSearch from "./ShowcaseSearch";
import "./Showcase.scss";
import shwcaseimg from "../../Assets/ShowcaseAssets/showcaseImg.png";

const Showcase = () => {
  return (
    <>
      <div className="showcase">
        <div className="container">
          <Header></Header>
          <h2 className="h2">
            Make Room For <br />
            Better Furniture &amp; Better Living
          </h2>
          <p className="p">
            {" "}
            Turn your room with Fo-ni-so into a lot more minimalist
            <br /> and modern with ease and speed
          </p>
          <ShowcaseSearch></ShowcaseSearch>
        </div>
      </div>
    </>
  );
};

export default Showcase;
