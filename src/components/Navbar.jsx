import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* LOGO */}
      <div className="logo">
        <span className="name">Neha Sontakke</span>
        <span className="role">MERN Stack Developer</span>
      </div>

      {/* NAV LINKS */}
      <ul className={`nav-links ${open ? "active" : ""}`}>
        <li>
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setOpen(false)}>About</Link>
        </li>
        <li>
          <Link to="/projects" onClick={() => setOpen(false)}>Projects</Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </li>

        {/* RESUME DOWNLOAD */}
        <li>
          <a
            href="/Neha_Sontakke_Resume.pdf"
            download
            className="hire-btn"
            onClick={() => setOpen(false)}
          >
            Download CV
          </a>
        </li>
      </ul>

      {/* HAMBURGER */}
      <div
        className={`hamburger ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
