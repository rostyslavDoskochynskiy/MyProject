import React from "react";

import { Link } from "react-router-dom";

const Phone = ({ obj, onAddToCart, index }) => {
  return (
    <div className="phoneItem ">
      <Link to={`/phone/${index}`}>
        <img alt="" src={obj.imageurl} />
      </Link>

      <p>{obj.name}</p>
      <div className="d-flex">
        <span className="price">{obj.Prise}&#8372;</span>
        <button
          type="button "
          onClick={() => onAddToCart(obj)}
          className="btn btn-success"
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export default Phone;
