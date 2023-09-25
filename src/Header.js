import React from "react";
import "./styles.css";

const Header = (props) => {
  let { name } = props;

  return (
    <div className="header">
      {name}
      <ul className="ul">
        <li>
          <a
            href="https://www.samsung.com/us/smartphones/galaxy-z-fold5/buy/galaxy-z-fold5-512gb-verizon-sm-f946uzkevzw/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Home
          </a>
        </li>
        <li>Contact </li>
      </ul>
    </div>
  );
};

export default Header;

// a href
