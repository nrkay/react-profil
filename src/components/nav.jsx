import React from "react";
import "../Stylesheet/Nav.css";
import { Route, Routes, Link, useMatch, useResolvedPath } from "react-router-dom";
function Nav() {
  return (
    <>
      <nav className="container navbar navbar-expand-lg bg-transparent">
        <div className="container-fluid">
          <img
            alt=""
            src="https://i.pinimg.com/564x/7c/02/d8/7c02d8361f7acd759f197fcb243b0800.jpg"
            width="30"
            height="30"
            className="d-inline-block align-top m-3"
          />{" "}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="item-nav collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  {" "}
                  <CustomLink
                    className="text-decoration-none"
                    to={"/"}
                  >
                    Home
                  </CustomLink>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  {" "}
                  <CustomLink
                    className="text-decoration-none"
                    to={"/About"}
                  >
                    About
                  </CustomLink>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  {" "}
                  <CustomLink
                    className="text-decoration-none"
                    to={"/Project"}
                  >
                    Portofolio
                  </CustomLink>
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="#">
                  {" "}
                  <CustomLink
                    className="text-decoration-none"
                    to={"/Blog"}
                  >
                    Article
                  </CustomLink>
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
  function CustomLink({ to, children }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });
    return (
      <Link id={isActive ? "active" : ""} to={to}>
        {children}
      </Link>
    );
  }
}

export default Nav;
