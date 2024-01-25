import { Link, NavLink } from "react-router-dom";
import classes from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-secondary">
      <div className="container">
        <Link to="/" className={`${classes.nav} navbar-brand ubuntu fs-3`}>
          Rick & Morty <span className="text-danger">Wiki</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <style>
            {`
            button[aria-expanded='false'] > .close {
                display:none;
            }
            button[aria-expanded='true'] > .open {
                display:none;
            }
          `}
          </style>

          <i className="fa-solid fa-bars open"></i>
          <i className="fa-solid fa-xmark close"></i>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className={`navbar-nav`}>
            <li className="nav-item">
              <NavLink to="/" className="nav-link" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/episodes"
                className="nav-link"
                activeClassName="active"
              >
                Episodes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/location"
                className="nav-link"
                activeClassName="active"
              >
                Location
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
