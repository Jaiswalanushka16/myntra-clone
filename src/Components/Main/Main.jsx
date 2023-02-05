import React from "react";
import "./Main.css";

function Main(props) {
  function convertData(arr) {
    return arr.reduce((acc, curr, index) => {
      const subArrayIndex = Math.floor(index / 5);
      if (!acc[subArrayIndex]) acc[subArrayIndex] = [];
      acc[subArrayIndex].push(curr);
      return acc;
    }, []);
  }

  return (
    <div className="main">
      {convertData(props.data).map((ele, j) => {
        return (
          <div
            key={j}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              // margin: "auto",
            }}
          >
            {ele.map((e, i) => {
              return (
                <div className="card" key={i}>
                  <img width={"100%"} src={e.img1} alt="shirt" />
                  <h5>{e.brand}</h5>
                  <span className="span">
                    {String(e.description)
                      .replace(e.brand, "")
                      .split(" ")
                      .slice(-4)
                      .join(" ")}
                  </span>
                  <div
                    style={{
                      fontSize: "small",
                      marginLeft: "2%",
                      marginTop: "2%",
                    }}
                  >
                    <b>RS {e.price}</b>
                    {e.mrp !== e.price && (
                      <span
                        className="span"
                        style={{
                          textDecoration: "line-through",
                          color: "#c0c0c0",
                        }}
                      >
                        RS {e.mrp}
                      </span>
                    )}
                    {e.mrp !== e.price && (
                      <span className="span" style={{ color: "#ED7014" }}>
                        ({Math.round(((e.mrp - e.price) / e.mrp) * 100)}% OFF)
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Main;
