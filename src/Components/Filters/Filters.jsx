import "./Filters.css";
import React from "react";

function Filters(props) {
  // const [firstRun, setFirstRun] = React.useState(true);
  const [categories, setCategories] = React.useState([]);
  const [brands, setBrands] = React.useState([]);
  // let { filter } = props;
  // React.useEffect(() => {
  //   if (!firstRun) filter({ type: "category", categories: categories });
  //   else setFirstRun(false);
  // }, [categories, filter, firstRun]);

  function filterCategories(event) {
    if (event.target.checked === true) {
      setCategories([...categories, event.target.value]);
      props.filter({
        type: "category",
        categories: [...categories, event.target.value],
      });
    } else {
      setCategories(categories.filter((e) => e !== event.target.value));
      props.filter({
        type: "category",
        categories: categories.filter((e) => e !== event.target.value),
      });
    }
  }

  function filterBrands(event) {
    if (event.target.checked === true) {
      setBrands([...brands, event.target.value]);
      props.filter({
        type: "brand",
        brands: [...brands, event.target.value],
      });
    } else {
      setBrands(brands.filter((e) => e !== event.target.value));
      props.filter({
        type: "brand",
        brands: brands.filter((e) => e !== event.target.value),
      });
    }
  }
  return (
    <div
      style={{
        borderRight: "0.5px solid #c0c0c0",
      }}
    >
      {/* <div className="divider-horizontal"></div> */}
      <div className="filters bold">
        <div>
          <input
            type="radio"
            name="gender"
            value="men"
            onClick={(e) =>
              props.filter({ type: "gender", gender: e.target.value })
            }
          />{" "}
          Men
        </div>
        <div>
          <input
            type="radio"
            name="gender"
            value="women"
            onClick={(e) =>
              props.filter({ type: "gender", gender: e.target.value })
            }
          />{" "}
          Women
        </div>
        <div>
          <input
            type="radio"
            name="gender"
            value="boys"
            onClick={(e) =>
              props.filter({ type: "gender", gender: e.target.value })
            }
          />{" "}
          Boys
        </div>
        <div>
          <input
            type="radio"
            name="gender"
            value="girls"
            onClick={(e) =>
              props.filter({ type: "gender", gender: e.target.value })
            }
          />{" "}
          Girls
        </div>
      </div>
      <div className="divider-horizontal"></div>
      <h4>CATEGORIES</h4>
      <div className="filters">
        <div>
          <input
            type="checkbox"
            value="full-shirt"
            onClick={(e) => {
              filterCategories(e);
            }}
          />{" "}
          Full Shirts{" "}
          <span
            style={{ fontWeight: "500", color: "#c0c0c0", fontSize: "small" }}
          >
            {" "}
            (95621)
          </span>
        </div>
        <div>
          <input
            type="checkbox"
            value="half-shirt"
            onClick={(e) => {
              filterCategories(e);
            }}
          />{" "}
          Half Shirts{" "}
          <span
            style={{ fontWeight: "500", color: "#c0c0c0", fontSize: "small" }}
          >
            (379)
          </span>
        </div>
        <div>
          <input
            type="checkbox"
            value="prince-collar-shirt"
            onClick={(e) => {
              filterCategories(e);
            }}
          />{" "}
          Prince Collar Shirts{" "}
          <span
            style={{ fontWeight: "500", color: "#c0c0c0", fontSize: "small" }}
          >
            (9)
          </span>
        </div>
      </div>
      <div className="divider-horizontal"></div>
      <h4>BRAND</h4>
      <div className="filters">
        <div>
          <input
            type="checkbox"
            value="wrogn"
            onClick={(e) => {
              filterBrands(e);
            }}
          />{" "}
          Wrogn{" "}
          <span
            style={{ fontWeight: "500", color: "#c0c0c0", fontSize: "small" }}
          >
            (3628)
          </span>
        </div>
        <div>
          <input
            type="checkbox"
            value="Blackberrys"
            onClick={(e) => {
              filterBrands(e);
            }}
          />{" "}
          Blackberrys{" "}
          <span
            style={{ fontWeight: "500", color: "#c0c0c0", fontSize: "small" }}
          >
            (3178)
          </span>
        </div>
        <div>
          <input
            type="checkbox"
            value="Park Avenues"
            onClick={(e) => {
              filterBrands(e);
            }}
          />{" "}
          Park Avenues
          <span
            style={{ fontWeight: "500", color: "#c0c0c0", fontSize: "small" }}
          >
            (3114)
          </span>
        </div>
        <div>
          <input
            type="checkbox"
            value="Roadster"
            onClick={(e) => {
              filterBrands(e);
            }}
          />{" "}
          Roadster{" "}
          <span
            style={{ fontWeight: "500", color: "#c0c0c0", fontSize: "small" }}
          >
            (3034)
          </span>
        </div>
        <div>
          <input
            type="checkbox"
            value="Highlander"
            onClick={(e) => {
              filterBrands(e);
            }}
          />{" "}
          Highlander{" "}
          <span
            style={{ fontWeight: "500", color: "#c0c0c0", fontSize: "small" }}
          >
            (2361)
          </span>
        </div>
        <div>
          <input
            type="checkbox"
            value="Peter England"
            onClick={(e) => {
              filterBrands(e);
            }}
          />{" "}
          Peter England{" "}
          <span
            style={{ fontWeight: "500", color: "#c0c0c0", fontSize: "small" }}
          >
            (2334)
          </span>
        </div>
        <div>
          <input
            type="checkbox"
            value="H&M"
            onClick={(e) => {
              filterBrands(e);
            }}
          />{" "}
          H&M{" "}
          <span
            style={{ fontWeight: "500", color: "#c0c0c0", fontSize: "small" }}
          >
            (2166)
          </span>
        </div>
        <div>
          <input
            type="checkbox"
            value="UCB"
            onClick={(e) => {
              filterBrands(e);
            }}
          />{" "}
          United Colors Of Benetton{" "}
          <span
            style={{ fontWeight: "500", color: "#c0c0c0", fontSize: "small" }}
          >
            (2138)
          </span>
        </div>
        <span id="extra">+736 more</span>
      </div>
      <div className="divider-horizontal"></div>
    </div>
  );
}

export default Filters;
