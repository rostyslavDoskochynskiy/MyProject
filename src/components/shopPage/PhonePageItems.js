import React from "react";

import Phone from "./Phone";

function PhonePageItems({ phone, onAddToCart }) {
  return (
    <div className="container pagePhones d-flex flex-raw ">
      {phone.map((obj, index) => {
        return (
          <div className="row" key={obj.id}>
            <div className="col-sm-4 mb-4 d-flex">
              <Phone index={index} obj={obj} onAddToCart={onAddToCart} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PhonePageItems;
