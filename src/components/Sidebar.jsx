import { Link } from "react-router-dom";
import "../assets/styles/sidebar.css";
import  AccountIcons  from "./Icons/AccountIcons";
import  TransfersIcons from "./Icons/TransfersIcons";
import  LoansIcons from "./Icons/LoansIcons";
import  ConverterIcons from "./Icons/ConverterIcons";
export function Sidebar({sidebarOpen, setSidebarOpen }) {
  return (
    <div className="sidebar ">
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/cuenta">
              <AccountIcons/>
              <span>Cuentas</span>
            </Link>
          </li>
          <li>
            <Link to="/transferencias">
              <TransfersIcons/>
              <span>Transferencias</span>
            </Link>
          </li>
          <li>
            <Link to="/prestamos">
              <LoansIcons/>
              <span>Prestamos</span>
            </Link>
          </li>
          <li>
            <Link to="/conversor">
              <ConverterIcons/>
              <span>Conversor de divisas</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
