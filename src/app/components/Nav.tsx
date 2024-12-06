import Link from 'next/link'
import React from 'react'
import { BackButton } from './BackButton'

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Quick ecom

    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="/">Home</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/products">products</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/contact-us">contact us</a>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="/about-us">about-us</Link>
        </li>
      
  <BackButton/>
      </ul>
 
    </div>
  </div>
</nav>
  )
}

export default Nav