import { Link } from "react-router-dom";
import logo_black from "../../assets/images/itbank_black.png";
import "../../assets/styles/index.css";
import "../../assets/styles/Navbar.css";
function Navbar() {
  return (
    <div className="navbar">
      <a href="../../../index.html">
        <img src={logo_black} alt="" className="logo" />
      </a>
      <ul>
        <Link className="navbar-item" to="/nosotros">
          Nosotros
        </Link>
        <Link className="navbar-item" to="/productos">
          Productos
        </Link>
        <Link className="navbar-item" to="/contacto">
          Contacto
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
