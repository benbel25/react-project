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
            <NavLink className="nav-link" to="/mycards">
              Products
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Favorites
            </NavLink>
          </li>
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
            <NavLink className="nav-link" to="/admin">
              Admin
            </NavLink>
          </li>
        </Fragment>
      );
    }
  };
  const showAdmin = () => {
    if (userData.admin === true) {
      return (
        <Fragment>
          <li className="nav-item">
            <NavLink className="nav-link" to="/createproductcard">
              Create product card
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Hello Admin!
            </NavLink>
          </li>
        </Fragment>
      );
    } else if (userData.admin === false) {
      return (
        <Fragment>
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Hello User!
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
          Home
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
            {showAdmin()}
            {showLogin()}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
