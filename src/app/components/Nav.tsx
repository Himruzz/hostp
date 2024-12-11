// import Link from 'next/link'
// import React from 'react'
// import { BackButton } from './BackButton'
// import "./nav.css"
// import { MenuIcon } from './MenuIcon'
// function Nav() {
//   return (
// //     <nav className="navbar navbar-expand-lg bg-body-tertiary">
// //   <div className="container-fluid">
// //     <a className="navbar-brand" href="#">Navbar</a>
// //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
// //       <span className="navbar-toggler-icon"></span>
// //     </button>
// //     <div className="collapse navbar-collapse" id="navbarNav">
// //       <ul className="navbar-nav">
// //         <li className="nav-item">
// //           <a className="nav-link active" aria-current="page" href="#">Home</a>
// //         </li>
// //         <li className="nav-item">
// //           <a className="nav-link" href="#">Features</a>
// //         </li>
// //         <li className="nav-item">
// //           <a className="nav-link" href="#">Pricing</a>
// //         </li>
// //         <li className="nav-item">
// //           <a className="nav-link disabled" aria-disabled="true">Disabled</a>
// //         </li>
// //       </ul>
// //     </div>
// //   </div>
// // </nav>





// //     <nav className="navbar">
// //       <div className="logo">
// //         <Link href="/">Shoporia</Link>
// //       </div>
// //       <div className="nav-links">
// //         <ul>
// //           <li><Link href="/">Home</Link></li>
// //           <li><Link href="/products">Products</Link></li>
// //           <li><Link href="/contact-us">Contact Us</Link></li>
// //           <li><Link href="/about-us">About Us</Link></li>
          
// //         </ul>
// //         {/* <MenuIcon/> */}
// //         <BackButton />
        
// //       </div>
// //     </nav>
// //   )
// // }

// // export default Nav
import Link from 'next/link';
import React from 'react';
import { BackButton } from './BackButton';
import './nav.css';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-warning">
      <div className="container-fluid">
        {/* Brand Logo */}
        <Link className="navbar-brand" href="/">
          <h2 style={{color:"brown"}}>Shoporia</h2>
        </Link>

        {/* Toggle Button for Mobile View */}
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

        {/* Collapsible Content */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" href="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/contact-us">
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/about-us">
                About Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Back Button */}
        <BackButton />
      </div>
    </nav>
  );
}

export default Nav;
