import Link from 'next/link'
import React from 'react'
import { BackButton } from './BackButton'
import "./nav.css"
function Nav() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link href="#">LUXUR</Link>
      </div>
      <div className="nav-links">
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/products">Products</Link></li>
          <li><Link href="/contact-us">Contact Us</Link></li>
          <li><Link href="/about-us">About Us</Link></li>
        </ul>
        <BackButton />
      </div>
    </nav>
  )
}

export default Nav
