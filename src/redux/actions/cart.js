export const addToCart = (payload) => {
  alert("Ви зробили покупку");
  return {
    type: "ADD_TO_CART",
    payload,
  };
};

export const clearCart = () => {
  const bool = window.confirm("ви хотите очистить корзину?");
  if (bool) {
    return {
      type: "CLEAR_CART",
    };
  } else {
    return { type: "" };
  }
};
export const deletePhone = (payload) => {
  console.log(payload);
  return {
    type: "DELETE_PHONE",
    payload,
  };
};
