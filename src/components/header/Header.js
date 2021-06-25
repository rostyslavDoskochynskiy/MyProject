import React from "react";
import { useSelector } from "react-redux";

import { Link, NavLink } from "react-router-dom";

const Header = ({ burgerMenu, onburgerMenuToggler, serch, onSetSerch }) => {
  const { prise } = useSelector(({ shop }) => {
    return {
      prise: shop.prise,
    };
  });
  return (
    <nav className="header navbar navbar-expand-lg  navbar-dark bg-dark">
      <button
        onClick={() => {
          onburgerMenuToggler();
        }}
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className={
          burgerMenu
            ? "navbar-collapse justify-content-around"
            : "collapse navbar-collapse justify-content-around"
        }
        id="navbarSupportedContent"
      >
        <Link className="navbar-brand" exect="true" to="/">
          TaraMobile
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-phone"
            viewBox="0 0 16 16"
          >
            <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
            <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
          </svg>
        </Link>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/" exact>
              Home <span className="sr-only "></span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Shop">
              Shop <span className="sr-only "></span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Contacts">
              Contacts <span className="sr-only "></span>
            </NavLink>
          </li>

          <li className="nav-item dropdown">
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <p className="dropdown-item" href="#">
                Action
              </p>
              <p className="dropdown-item" href="#">
                Another action
              </p>
              <div className="dropdown-divider"></div>
              <p className="dropdown-item" href="#">
                Something else here
              </p>
            </div>
          </li>
        </ul>
        <form className="form-inline d-flex my-2 my-lg-0">
          <input
            value={serch}
            onChange={onSetSerch}
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
        <div className="nav-item">
          <NavLink className="nav-link text-white" to="/cart">
            Cart{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-basket3-fill"
              viewBox="0 0 16 16"
            >
              <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.468 15.426L.943 9h14.114l-1.525 6.426a.75.75 0 0 1-.729.574H3.197a.75.75 0 0 1-.73-.574z" />
            </svg>
            {` | ${prise} `}&#8372;
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
