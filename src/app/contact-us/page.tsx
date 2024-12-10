import React from 'react';
import './style.css'; // Import external CSS
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Generated by Nishad Koormath',
};

const ContactUs = () => {
  return (
    <div className="container-contactUs">
      <h1 className="title">Contact Us</h1>
      <p className="description">
        We&apos;d love to hear from you! Reach out to us using the contact information below or send us a message using the form.
      </p>

      <div className="contact-details">
        <p>
          <strong>Email:</strong> <a href="mailto:support@ecommerce.com" className="link">support@ecommerce.com</a>
        </p>
        <p>
          <strong>Phone:</strong> <a href="tel:+1234567890" className="link">+1 234-567-890</a>
        </p>
        <p>
          <strong>Address:</strong> 123 E-Commerce St, Online City, Web 45678
        </p>
      </div>

      <form className="form">
        <input type="text" placeholder="Your Name" className="input" required />
        <input type="email" placeholder="Your Email" className="input" required />
        <textarea placeholder="Your Message" className="textarea" required></textarea>
        <button type="submit" className="button">Send Message</button>
      </form>
    </div>
  );
};

export default ContactUs;
