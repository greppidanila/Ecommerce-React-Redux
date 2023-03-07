import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className="sticky-top navbar navbar-expand-lg navbar-light py-3 shadow-sm bg-white">
                <div className="container">
                    <NavLink className="navbar-brand fw-bold fs-4" to="/">
                        REACTION
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active fw-bold" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products">Products</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2 border-0 " style={{boxShadow: "0 .125rem .25rem rgba(0,0,0,.300)"}} type="search" placeholder="Search" aria-label="Search" />
                        </form>
                        <div className="button">
                            <NavLink to="/cart" className='btn btn-outline-dark border-0  ms-2' style={{boxShadow: "0 .125rem .25rem rgba(0,0,0,.300)"}}>  
                                <i className='fa fa-shopping-cart me-1'></i>
                                Cart (0)
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar