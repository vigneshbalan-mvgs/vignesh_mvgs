import { Link } from "react-router-dom";
import "./CSS/Header.css";

function Header() {
  return (
    <div className="navbar">
      <h1 className="nav-title">MVGS</h1>
      <ul className="nav-menu">
        <li>
          <Link style={{ textDecoration: "none" }} to="/skills">
            <i class="fa-solid fa-code icon"></i>
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none" }} to="/contact">
            <i class="fa-solid fa-envelope icon"></i>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
