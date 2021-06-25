const initialState = {
  burgerMenu: false,
  serch: "",
};
const headerReduser = (state = initialState, action) => {
  switch (action.type) {
    case "BURGER_TOGGLE": {
      return {
        ...state,
        burgerMenu: !state.burgerMenu,
      };
    }
    case "SERCH_CHANGE": {
      return {
        ...state,
        serch: action.payload,
      };
    }

    default:
      return state;
  }
};

export default headerReduser;
