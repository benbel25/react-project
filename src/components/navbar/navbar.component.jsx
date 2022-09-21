import { Fragment } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./navbar.component.css";

const Navbar = () => {
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const userData = useSelector((state) => state.auth.userData);

  const showLogin = () => {
    if (userData.email) {
      return (
        <Fragment>
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              {userData.email}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/logout">
              Logout
            </NavLink>
          </li>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <li className="nav-item">
            <NavLink className="nav-link" to="/signin">
              Signin
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/signup">
              Signup
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/business">
              Business
            </NavLink>
          </li>
        </Fragment>
      );
    }
  };
  const showBiz = () => {
    if (userData.biz === true) {
      return (
        <Fragment>
          <li className="nav-item">
            <NavLink className="nav-link" to="/mycards">
              My Cards
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/createbizcard">
              Create biz card
            </NavLink>
          </li>
        </Fragment>
      );
    }
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light  ${
        loggedIn ? "bg-success" : "bg-danger"
      }`}
    >
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          B.B Games
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            {showBiz()}
            {showLogin()}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
