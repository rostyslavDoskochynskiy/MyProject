import axios from "axios";

export const fetchPhones = (category, sortBy) => (dispatch) => {
  dispatch(isLoding(false));
  console.log(category);
  axios
    .get(
      `/phone?${
        category === null ? "" : `category=${category}`
      }&_sort=${sortBy}&_order=desc
      `
    )
    .then(({ data }) => {
      dispatch(setPhones(data));
      dispatch(isLoding(true));
    });
};
export const setPhones = (payload) => ({
  type: "SET_PHONES",
  payload,
});
export const isLoding = (payload) => ({
  type: "LOADING",
  payload,
});
