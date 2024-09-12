import { Link } from "react-router-dom";
import "../assets/styles/sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/inicio">
              <ion-icon name="home-outline"></ion-icon>
              <span>Inicio</span>
            </Link>
          </li>
          <li>
            <Link to="/cuentas">
              <ion-icon name="newspaper-outline"></ion-icon>
              <span>Cuentas</span>
            </Link>
          </li>
          <li>
            <Link to="/transferencias">
              <ion-icon name="swap-horizontal-outline"></ion-icon>
              <span>Transferencias</span>
            </Link>
          </li>
          <li>
            <Link to="/prestamos">
              <ion-icon name="server-outline"></ion-icon>
              <span>Prestamos</span>
            </Link>
          </li>
          <li>
            <Link to="/conversor">
              <ion-icon name="swap-horizontal-outline"></ion-icon>
              <span>Conversor de divisas</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Sidebar;
