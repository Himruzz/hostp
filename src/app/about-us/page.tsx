import Head from 'next/head';
import "./style.css"
import Image from "next/image";

function Hello() {
  return (
    <>
      <Head>
        <title>About Us - Our E-Commerce Store</title>
      </Head>

      <div>
        <header className="about-header">
          <h1>About Our E-Commerce Store</h1>
          <p>Passion. Quality. Customer Satisfaction.
            dummy website
          </p>
        </header>

        <main>
          <section className="about-content">
            <div className="content-section">
              <h2>Our Story</h2>
              <p>
                Founded in [Year], our e-commerce store began with a simple
                mission: to provide high-quality products with exceptional customer
                service. What started as a small online shop has grown into a trusted
                destination for [product type] lovers around the world.
              </p>
            </div>

            <div className="content-section">
              <h2>Our Mission</h2>
              <p>
                We are committed to delivering premium products, innovative solutions,
                and an unparalleled shopping experience. Our team works tirelessly
                to curate the best selection, ensure product quality, and provide
                support that goes above and beyond.
              </p>
            </div>
          </section>

          <section>
            <h2 style={{ textAlign: 'center', marginTop: '40px' }}>Meet Me</h2>
            <div className="team-section">
            
              <div className="team-member">
                <img src="/image.png" alt="COO" />
                <h3>himran</h3>
                <p>Created by the ecomwebsite</p>
              </div>
            </div>
          </section>

          <section style={{ textAlign: 'center', marginTop: '40px' }}>
            <h2>Our Commitment</h2>
            <p>
              We believe in transparency, quality, and customer satisfaction. Our promise
              is to provide:
            </p>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li>✓ High-quality products</li>
              <li>✓ Secure and fast shipping</li>
              <li>✓ Excellent customer support</li>
              <li>✓ Hassle-free returns</li>
            </ul>
          </section>
        </main>
      </div>
    </>
  );
}

export default Hello;
