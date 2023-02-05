import React from "react";
import "./Breadcrumbs.css";

function Breadcrumbs() {
  return (
    <div className="breads">
      <span>
        <a href="/" className="crumbs">
          Home
        </a>{" "}
        /{" "}
        <a href="/shirts" className="crumbs" id="bold">
          Shirts For Men & Women
        </a>
      </span>
    </div>
  );
}

export default Breadcrumbs;
