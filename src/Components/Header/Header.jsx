import React from "react";
import "./Header.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
function Header(props) {
  const [open, setOpen] = React.useState(false);
  const [sortOptionIndex, setSortOptionIndex] = React.useState(2);

  let SortOptions = ["Price : Low to High", "High to Low", "Recommended"];
  return (
    <div className="container">
      <div>
        <span>
          <b>Shirts For Men & Women</b>
        </span>
        <span style={{ color: "#c0c0c0" }}> - 96009 Items</span>
      </div>
      <div className="flex-row">
        <h3 style={{ width: "25%" }}>FILTERS</h3>
        <div className="flex-row justify">
          <div className="flex-row">
            <div className="flex-row margin-inline">
              Bundles <KeyboardArrowDownIcon sx={{ color: "#c0c0c0" }} />
            </div>
            <div className="flex-row margin-inline">
              Size <KeyboardArrowDownIcon sx={{ color: "#c0c0c0" }} />
            </div>
          </div>
          <div
            onMouseEnter={() => {
              setOpen(true);
            }}
            onMouseLeave={() => {
              setOpen(false);
            }}
            className="flex-row dropdown-border"
          >
            <span style={{ float: "left", width: "30%", marginLeft: "5%" }}>
              Sort By :
            </span>
            <span
              style={{
                justifyContent: "space-between",
                alignItems: "center",
                display: "flex",
                width: "100%",
              }}
            >
              <b> {SortOptions[sortOptionIndex]} </b>
              <KeyboardArrowDownIcon sx={{ color: "#c0c0c0" }} />
            </span>
            {open && (
              <div
                style={{
                  // height: "200px",
                  width: "249.5px",
                  zIndex: 2,
                  background: "white",
                  position: "absolute",
                  top: "180px",
                  right: "10px",
                  display: "flex",
                  flexDirection: "column",
                  borderBottom: "1px solid #c0c0c0",
                  borderLeft: "1px solid #c0c0c0",
                  borderRight: "1px solid #c0c0c0",
                }}
              >
                {SortOptions.map((options, i) => {
                  return (
                    <span
                      key={i}
                      className="modal"
                      onClick={() => {
                        setSortOptionIndex(i);
                        setOpen(false);
                        props.sort(i);
                      }}
                    >
                      {options}
                    </span>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
