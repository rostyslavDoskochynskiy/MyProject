import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, deletePhone } from "../../redux/actions/cart";

function Cart({ cart }) {
  const { prise, count } = useSelector(({ shop }) => {
    return {
      prise: shop.prise,
      count: shop.count,
    };
  });
  const dispatch = useDispatch();
  const onClearCart = React.useCallback(() => {
    dispatch(clearCart());
  });
  const onDeletePhone = React.useCallback((id) => {
    dispatch(deletePhone(id));
  });

  const cartPhones = Object.keys(cart).map((key) => {
    return cart[key][0];
  });
  if (count === 0) {
    return <h1 className="text-center mt-5">Your cart is empty =(</h1>;
  }
  return (
    <div className="container ">
      <div className="d-flex justify-content-between mb-5">
        <h1>
          your card : {count} {count === 1 ? "phone" : "phones"}
        </h1>
        <h1>Total price : {prise} &#8372;</h1>
        <button onClick={() => onClearCart()} className="btn btn-danger">
          Clear cart
        </button>
      </div>
      <div className="">
        {cartPhones.map((phone) => {
          return (
            <div key={phone.id} className="card mb-4">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <div className="d-flex ">
                    <div className="col-sm-3 text-center d-flex ">
                      <img
                        src={phone.imageurl}
                        style={{ width: "150px", height: "150px" }}
                      />
                    </div>
                    <div className="ms-5">
                      <h1>{phone.name}</h1>
                      <h1>{phone.Prise} &#8372;</h1>
                    </div>
                  </div>
                  <button
                    onClick={() => onDeletePhone(phone.id)}
                    className="btn btn-warning d-flex  "
                    style={{ height: "40px" }}
                  >
                    x
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        <button className="btn btn-success">Pay</button>
      </div>
    </div>
  );
}

export default Cart;
