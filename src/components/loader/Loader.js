import React from "react";
import loading from "./loading.gif";

function Loader() {
  return (
    <div className="d-flex justify-center loader">
      <img src={loading} className="w-50" alt="" />
    </div>
  );
}

export default Loader;
