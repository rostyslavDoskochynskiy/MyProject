import React from "react";
import Category from "./Category";
import PhonePageItems from "./PhonePageItems";
import Sort from "./Sort";

function ShopPage({
  onAddToCart,
  activeSortBy,
  onSetSortBy,
  phone,
  onSetCategories,
  sortByPopup,
  onTooglePopup,
}) {
  return (
    <div>
      <div className="mx - auto justify-content-around align-items-top mt-5 mb-5 category">
        <Category onSetCategories={onSetCategories} />
        <Sort
          onTooglePopup={onTooglePopup}
          sortByPopup={sortByPopup}
          onSetSortBy={onSetSortBy}
          activeSortBy={activeSortBy}
          items={[
            { name: "Popular", id: 0 },
            { name: "Prise", id: 1 },
            { name: "Alphabet", id: 3 },
          ]}
        />
      </div>
      <PhonePageItems onAddToCart={onAddToCart} phone={phone} />
    </div>
  );
}

export default ShopPage;
