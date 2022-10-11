import React from "react";

const Overview = (props) => {
  return (
    <div className="overviewMAin">
      <h2>
        Hi, I'm {props.userData.name}&nbsp;
        <i className="fa-solid fa-hand"></i>&nbsp;
        <i className="fa-solid fa-user"></i>
      </h2>
      <div>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
      </div>
      <div className="overviewSection">
          
      </div>
    </div>
  );
};

export default Overview;
