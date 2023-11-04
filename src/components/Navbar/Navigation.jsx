import React from "react"
import './Navbar.css'
import logo from '../../components/assets/images/logo/logo.png'
import { Link } from "react-router-dom";
import { BsCart3 } from 'react-icons/bs';
import { BsSearch } from 'react-icons/bs';

export default function Navigation() {
  return (
    <>
    <div className="father-hearnav">
    <div className="headdernav">
      <nav className="navbar navbar-expand-lg bg-white sticky-top mystyling">
        <div className="container-fluid father-div">
          <Link className="navbar-brand " to='/Homepage'>
            <img className="logo" src={logo} alt="" />
          </Link>
          <Link to="/Mycart" className="search-link"> <BsSearch/></Link>
          <Link to="/Mycart" className="cart-link" ><BsCart3 />
          <span className="cart-count">0</span>
          </Link>

          <button className="navbar-toggler hidesome" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon hidesome"></span>
          </button>
          <div className="collapse navbar-collapse float-links" id="navbarNavDropdown">
            <ul className="navbar-nav">

            <li className="nav-item dropdown ">
                <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  HOME
                </Link>
                <ul className="dropdown-menu my-dropdown-menu">
                  <li><Link to='/Homepage' className="dropdown-item">Home Page</Link></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  PAGES
                </Link>
                <ul className="dropdown-menu my-dropdown-menu">
                  <li><Link className="dropdown-item" to="#">Action</Link></li>
                  <li><Link className="dropdown-item" to="#">Another action</Link></li>
                  <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  PRODUCTS
                </Link>
                <ul className="dropdown-menu my-dropdown-menu">
                <li><Link to='/Products' className="dropdown-item">All Products</Link></li>
                  <li><Link to='/Womenclothing' className="dropdown-item">Women's Clothing</Link></li>
                  <li><Link to='/Menclothing' className="dropdown-item">Men's Clothing</Link></li>
                  <li><Link to='/Accessories' className="dropdown-item">Accessories</Link></li>
                  <li><Link to='/Electronics' className="dropdown-item">Electronics</Link></li>

                </ul>
              </li>
            <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  BLOG
                </Link>
                <ul className="dropdown-menu my-dropdown-menu">
                  <li><Link className="dropdown-item" to="#">Action</Link></li>
                  <li><Link className="dropdown-item" to="#">Another action</Link></li>
                  <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  SHOP
                </Link>
                <ul className="dropdown-menu my-dropdown-menu">
                  <li><Link className="dropdown-item" to="#">Action</Link></li>
                  <li><Link className="dropdown-item" to="#">Another action</Link></li>
                  <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                  <Link className="nav-link" to="#">CONTACT US</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    </div>
    </>
  )
}
