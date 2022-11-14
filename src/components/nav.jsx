import React from 'react';
import { Route, Routes, Link } from "react-router-dom"
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
            />{' '}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active" href="#"> <Link style={{color: "black"}} className="text-decoration-none" to={"/"}>Home</Link></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"> <Link style={{color: "black"}} className="text-decoration-none" to={"/About"}>About</Link></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"> <Link style={{color: "black"}} className="text-decoration-none" to={"/Project"}>Portofolio</Link></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"> <Link style={{color: "black"}} className="text-decoration-none" to={"/Blog"}>Article</Link></a>
                    </li>
                </ul>
                </div>
            </div>
    </nav>
        </>
    ) ;
}

export default Nav;