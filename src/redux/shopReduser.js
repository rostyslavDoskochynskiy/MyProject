const initialState = {
  sortByPopup: false,
  activeSortBy: "Popular",
  phone: [],
  loading: false,
  categories: null,
  cart: {},
  prise: 0,
  count: 0,
};

const shopReduser = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_POPUP":
      return {
        ...state,
        sortByPopup: !state.sortByPopup,
      };
    case "SELECT_SORT": {
      return {
        ...state,
        activeSortBy: action.payload,
        sortByPopup: false,
      };
    }
    case "SELECT_CATEGORIES": {
      return {
        ...state,
        categories: action.payload,
      };
    }
    case "SET_PHONES": {
      return { ...state, phone: action.payload };
    }
    case "LOADING": {
      return {
        ...state,
        loading: action.payload,
      };
    }
    case "ADD_TO_CART":
      const newItem = {
        ...state.cart,
        [action.payload.id]: !state.cart[action.payload.id]
          ? [action.payload]
          : [...state.cart[action.payload.id], action.payload],
      };
      const allPhones = [].concat.apply([], Object.values(newItem));
      const totalPrise = allPhones.reduce((sum, obj) => obj.Prise + sum, 0);
      return {
        ...state,
        cart: newItem,
        count: allPhones.length,
        prise: totalPrise,
      };

    case "SET_PRISE": {
      return {
        ...state,
        prise: action.payload,
      };
    }
    case "SET_PRISE": {
      return {
        ...state,
        count: action.payload,
      };
    }
    case "CLEAR_CART": {
      return {
        ...state,
        cart: {},
        prise: 0,
        count: 0,
      };
    }
    case "DELETE_PHONE": {
      const newItems = {
        ...state.cart,
      };

      const currentPrise = newItems[action.payload][0].Prise;
      console.log(currentPrise);
      delete newItems[action.payload];

      return {
        ...state,
        cart: newItems,
        prise: state.prise - currentPrise,
        count: state.count - 1,
      };
    }
    default:
      return state;
  }
};

export default shopReduser;
