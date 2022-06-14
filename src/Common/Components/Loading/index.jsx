import React, { Fragment } from "react";

import ContentLoader from "react-content-loader";

export default function index(props) {
  const loop = () => {
    var jsx = [];
    for (let index = 0; index < props.count; index++) {
      jsx.push(
        <div key={index} md={props.col} className="my-4 col">
          <ContentLoader
            speed={0.5}
            backgroundColor="#eee"
            foregroundColor="#f9f9f9"
            style={{ width: "100%", height: props.height }}
          >
            <rect
              x="0"
              y="0"
              rx="10"
              style={{ width: "100%", height: "100%" }}
              ry="10"
              width="100%"
              height="100%"
            />
          </ContentLoader>
        </div>
      );
    }
    return jsx;
  };
  return loop();
}
