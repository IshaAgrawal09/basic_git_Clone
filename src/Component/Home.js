import { Heading, TextField, Button } from "@shopify/polaris";
import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { save_Username } from "../Redux/Action";

const Home = (props) => {
  let navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [data, setData] = useState([]);

  // SEARCH BUTTON
  const startSearching = () => {
    if (search !== "") {
      (async () => {
        setLoading(true);
        await fetch(`https://api.github.com/users/${search}`, {
          method: "GET",
          headers: {
            authorization: "Bearer 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",
          },
        })
          .then((response) => response.json())
          .then((actualData) => {
            console.log(actualData);
            sessionStorage.setItem("data", JSON.stringify({ ...actualData }));
            props.save_Username(search);
            debugger;
            setData(actualData);
          });

        setLoading(false);
        console.log(data);
      })();
    }
  };

  // VISIT PROFILE BTN
  const visitProfile = () => {
    navigate("./github");
  };

  return (
    <div className="homeDiv">
      <div>
        <Heading>Get Github Profile Cards!</Heading>
        <TextField
          placeholder="Search a github User"
          value={search}
          onChange={(e) => setSearch(e)}
          autoComplete="off"
        />
        {loading ? (
          <Button loading onClick={startSearching}>
            Search
          </Button>
        ) : (
          <Button onClick={startSearching}>Search</Button>
        )}
      </div>
      {Object.keys(data).length ? (
        <div className="showResult">
          <div className="image_User">
            <img src={data.avatar_url} alt="" />
          </div>
          <div className="result_Content">
            <div id="head">
              <h2>{data.name}</h2>
              <p>{data.type}</p>
            </div>
            <div className="infos">
              <div>{data.followers}&nbsp;Followers</div>
              <div>{data.following}&nbsp;Following</div>
              <div>{data.public_repos}&nbsp; Repos</div>
            </div>
            <div className="visit_btn">
              <Button onClick={visitProfile}>Visit Profile</Button>
            </div>
          </div>
        </div>
      ) : null}
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
    save_Username: (value) => dispatch(save_Username(value)),
  };
};

export default connect(mapStateToProps, mapDispoatchToProps)(Home);
