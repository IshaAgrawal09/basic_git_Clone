import React, { useEffect, useState } from "react";
import "./Github.css";
import { connect } from "react-redux";
import Nav from "./Nav";
import { Button, Frame, Loading } from "@shopify/polaris";
import Rightsection from "./Rightsection";
import { save_Username } from "../Redux/Action";

const Github = (props) => {
  const [userData, setUserData] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    if (props.user_name !== "") {
      (async () => {
        setLoad(true);
        await fetch(`https://api.github.com/users/${props.user_name}`)
          .then((response) => response.json())
          .then((actualData) => {
            setUserData(actualData);
          });
        setLoad(false);
        console.log(userData);
      })();
    } else {
      var tempData = { ...JSON.parse(sessionStorage.getItem("data")) };
      props.save_Username(tempData.login);
      console.log("Updated: ", props.user_name);
      console.log("dcvfgf");
    }
  }, [props.user_name]);

  console.log("user details", props.user_name);
  return (
    <div className="gitPage">
      <Nav />
      {load ? (
        <Frame>
          <Loading />
        </Frame>
      ) : (
        <div className="section">
          <div className="leftSection">
            <div className="sectionMainImg">
              <img src={userData.avatar_url} alt="" />
            </div>
            <div className="githubName">
              <h3>{userData.name}</h3>
              <p>{userData.login}</p>
              <Button>FOLLOW</Button>
            </div>
            <div className="githubBio">
              <p>{userData?.bio ?? "N/A"}</p>
            </div>
            <div className="userInformation">
              <div>
                <i className="fa-solid fa-users"></i>
              </div>
              <div>{userData.followers}&nbsp;followers</div>
              <div> {userData.following}&nbsp;following</div>
            </div>
          </div>

          <div className="rightSection">
            <Rightsection userData={userData} />
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user_name: state.user_name,
  };
};
const mapDispoatchToProps = (dispatch) => {
  return {
    save_Username: (e) => dispatch(save_Username(e)),
  };
};
export default connect(mapStateToProps, mapDispoatchToProps)(Github);
