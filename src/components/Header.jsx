import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand">
          <img src="/logo.png" alt="GarudSpray logo" />
          <span></span>
        </Link>

        <nav className="main-nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/marketplace">Drone Marketplace</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <div className="language-links">
          <Link to="/">EN</Link>
          <span>|</span>
          <Link to="/hi/">हिंदी</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;