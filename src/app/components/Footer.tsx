import React from 'react'
import"./footer.css"

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="logo">
          <a href="#">LUXUR</a>
        </div>
        <div className="footer-links">
          <ul>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/contact-us">Contact Us</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms-of-service">Terms of Service</a></li>
          </ul>
        </div>
        <div className="social-media">
          <a href="#" className="social-icon">FB</a>
          <a href="#" className="social-icon">IG</a>
          <a href="#" className="social-icon">TW</a>
        </div>
        <p className="copyright">© 2024 LUXUR. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
