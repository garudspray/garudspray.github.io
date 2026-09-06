import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h3>GarudSpray</h3>
          <p>
            Agricultural drone services and authorised agricultural drone
            dealership in Western Rajasthan.
          </p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/marketplace">Marketplace</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div>
          <h4>Contact</h4>
          <p>Western Rajasthan, India</p>
          <p>Phone: +91 XXXXX XXXXX</p>
          <p>Email: info@garudspray.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} GarudSpray. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
