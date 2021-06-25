import classNames from "classnames";
import React from "react";

const Sort = ({
  onTooglePopup,
  onSetSortBy,
  items,
  activeSortBy,
  sortByPopup,
}) => {
  const btnClass = classNames({
    "list-group popup": "list-group popup",
  });

  return (
    <div className=" position-relative dd ">
      <p
        className="nav-link dropdown-toggle"
        href="#"
        id="navbarDropdown"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        onClick={onTooglePopup}
      >
        sort by : {activeSortBy}
      </p>
      {sortByPopup ? (
        <ul className={btnClass}>
          {items.map((obj) => {
            return (
              <li
                key={obj.name}
                className={
                  obj.name === activeSortBy
                    ? "active list-group-item"
                    : "list-group-item"
                }
                onClick={() => {
                  onSetSortBy(obj.name);
                }}
              >
                {obj.name}
              </li>
            );
          })}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};

export default Sort;
