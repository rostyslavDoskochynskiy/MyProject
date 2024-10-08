import "./App.css";
import Header from "./components/header/Header";
import ShopPage from "./components/shopPage/ShopPage";

import { Route, Switch } from "react-router";
import Home from "./components/home/Home";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./components/loader/Loader";
import PhonePage from "./components/PhonePage/PhonePage";
import { fetchPhones } from "./redux/actions/phone";
import React from "react";
import { setCategories } from "./redux/actions/categories";
import { onSelectSort, tooglePopup } from "./redux/actions/sort";
import { burgerMenuToggler, setSerch } from "./redux/actions/header";
import Cart from "./components/cart/Cart";
import { addToCart } from "./redux/actions/cart";

const App = () => {
  const dispatch = useDispatch();
  const phones = useSelector(({ shop }) => shop.phone);
  const cart = useSelector(({ shop }) => shop.cart);
  const loading = useSelector(({ shop }) => shop.loading);
  const categories = useSelector(({ shop }) => shop.categories);
  const activeSortBy = useSelector(({ shop }) => shop.activeSortBy);
  const sortByPopup = useSelector(({ shop }) => shop.sortByPopup);
  const serch = useSelector(({ header }) => header.serch);
  const burgerMenu = useSelector(({ header }) => header.burgerMenu);

  React.useEffect(() => {
    dispatch(fetchPhones(categories, activeSortBy));
  }, [categories, activeSortBy]);

  const onSetCategories = React.useCallback((id) => {
    dispatch(setCategories(id), []);
  });
  const onSetSortBy = React.useCallback((name) => {
    dispatch(onSelectSort(name), []);
  });
  const onTooglePopup = React.useCallback(() => {
    dispatch(tooglePopup(), []);
  });
  const onburgerMenuToggler = React.useCallback(() => {
    dispatch(burgerMenuToggler());
  });

  const onAddToCart = React.useCallback((id) => {
    dispatch(addToCart(id));
  });

  const onSetSerch = (text) => {
    dispatch(setSerch(text.target.value));
  };

  const filterPhones = phones.filter((obj) => {
    return obj.name.toLowerCase().indexOf(serch.toLowerCase()) > -1;
  });
  console.log("hello")

  return (
    <div>
      <Header
        serch={serch}
        onSetSerch={onSetSerch}
        burgerMenu={burgerMenu}
        onburgerMenuToggler={onburgerMenuToggler}
      />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/cart">
          <Cart cart={cart} />
        </Route>
        <Route exact path="/shop">
          {loading ? (
            <ShopPage
              onAddToCart={onAddToCart}
              onTooglePopup={onTooglePopup}
              sortByPopup={sortByPopup}
              activeSortBy={activeSortBy}
              onSetSortBy={onSetSortBy}
              phone={filterPhones}
              onSetCategories={onSetCategories}
            />
          ) : (
            <Loader />
          )}
        </Route>

        <Route path="/phone/:number" component={PhonePage} />
      </Switch>
    </div>
  );
};

export default App;
