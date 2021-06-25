import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../.././redux/actions/cart";
import React from "react";
import Loader from "../loader/Loader";

const PhonePage = ({ match }) => {
  const loading = useSelector(({ shop }) => shop.loading);
  const phones = useSelector(({ shop }) => shop.phone);
  const dispatch = useDispatch();
  const onAddToCart = React.useCallback((id) => {
    dispatch(addToCart(id));
  });

  const numberPhone = match.params.number;
  console.log(phones[numberPhone]);
  return (
    <div>
      {loading ? (
        <>
          <div className="card mb-4">
            <div className="card-body">
              <div className="row">
                <div className="col-sm-3 text-center">
                  <img
                    src={phones[numberPhone].imageurl}
                    style={{ width: "200px" }}
                  />
                </div>
                <div className="col">
                  <h1>{phones[numberPhone].name}</h1>
                  <h1>{phones[numberPhone].Prise}</h1>
                  <button
                    onClick={() => onAddToCart(phones[numberPhone])}
                    className="btn btn-success"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Buy
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default PhonePage;
