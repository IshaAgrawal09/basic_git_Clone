import { Frame, Loading } from "@shopify/polaris";

import React, { useEffect, useState } from "react";

const Repositories = (props) => {
  const [load, setLoad] = useState(false);
  const [repo, setRepo] = useState([]);
  useEffect(() => {
    (async () => {
      setLoad(true);
      console.log(props.userData.repos_url);
      await fetch(`${props.userData.repos_url}`, {
        method: "GET",
        headers: {
          authorization: "Bearer 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",
        },
      })
        .then((response) => response.json())
        .then((actualData) => {
          setRepo(actualData);
        });
      setLoad(false);
      console.log("repo", repo);
    })();
  }, []);
  return (
    <div className="repoMain">
      <h2>Popular Repositories</h2>
      {load ? (
        <Frame>
          <Loading />
        </Frame>
      ) : (
        <div>
          {repo.map((item, index) => {
            return (
              <div className="singleRepo">
                <p id="repoName">{item.name}</p>
                <p>{item?.description?? ''}</p>
                <div className="repoDivide">
                  <p>{item?.language?? 'N/A'}</p>
                  <p>
                    <i class="fa-regular fa-star"></i>&nbsp;
                    {item?.stargazers_count?? 'N/A'}
                  </p>
                  <p>Updated at: {item.updated_at}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Repositories;
