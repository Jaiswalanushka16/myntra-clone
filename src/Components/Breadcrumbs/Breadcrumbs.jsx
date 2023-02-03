import React from "react";
import "./Breadcrumbs.css";

function Breadcrumbs() {
  return (
    <div className="breads">
      <span>
        <a href="https://www.myntra.com" className="crumbs">
          Home
        </a>{" "}
        /{" "}
        <a href="https://www.myntra.com/shirts" className="crumbs" id="bold">
          Shirts For Men & Women
        </a>
      </span>
    </div>
  );
}

export default Breadcrumbs;
