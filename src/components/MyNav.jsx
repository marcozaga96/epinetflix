import { Nav, Navbar } from "react-bootstrap";
import logo from "./logo.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";

const MyNav = function () {
  return (
    <Nav
      className="navbar navbar-expand-lg "
      data-bs-theme="dark"
      style={{ backgroundColor: "#221f1f" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} style={{ width: 100, height: 55 }} />
        </a>
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
            <Link to="/" className="nav-link text-light">
              Home
            </Link>
            <Link to="/tvShow" className="nav-link text-light">
              TV Shows
            </Link>
            <Link to="/" className="nav-link text-light">
              Movies
            </Link>
            <Link to="/" className="nav-link text-light">
              Recently Added
            </Link>
            <Link to="/" className="nav-link text-light">
              My List
            </Link>
          </ul>
          <div
            className="d-flex align-items-center;"
            style={{ width: 150, justifyContent: "space-evenly" }}
          >
            <i className="bi bi-search icons text-light"></i>
            <div id="kids" className="fw-bold text-light">
              KIDS
            </div>
            <i className="bi bi-bell icons text-light"></i>
            <i className="bi bi-person-circle icons text-light"></i>
          </div>
        </div>
      </div>
    </Nav>
  );
};

export default MyNav;
