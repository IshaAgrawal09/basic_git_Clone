import React from "react";

const Nav = () => {
  return (
    <div className="navbar">
      <div id="gitLogo">
        <img src="github.png" alt="" />
      </div>
      <div className="searchbar">
        <input type="text" placeholder="Search or Jump to.." />
      </div>
      <div className="navContent">
        <p>Pull requests</p>
        <p>Issues</p>
        <p>MarketPLace</p>
        <p>Explore</p>
      </div>
    </div>
  );
};

export default Nav;
