import { Link, useLocation } from "react-router-dom";
import "../assets/styles/sidebar.css";
import AccountIcons from "./Icons/AccountIcons";
import TransfersIcons from "./Icons/TransfersIcons";
import LoansIcons from "./Icons/LoansIcons";
import ConverterIcons from "./Icons/ConverterIcons";
export function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const location = useLocation();

  const currentLocation = location.pathname;
  return (
    <div className="sidebar ">
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/cuenta">
              <AccountIcons />
              <span
                style={{
                  color: currentLocation === "/cuenta" ? "#6495ed" : "black",
                }}
              >
                Cuenta
              </span>
            </Link>
          </li>
          <li>
            <Link to="/transferencias">
              <TransfersIcons />
              <span
                style={{
                  color:
                    currentLocation === "/transferencias" ? "#6495ed" : "black",
                }}
              >
                Transferencias
              </span>
            </Link>
          </li>
          <li>
            <Link to="/prestamos">
              <LoansIcons />
              <span
                style={{
                  color: currentLocation === "/prestamos" ? "#6495ed" : "black",
                }}
              >
                Prestamos
              </span>
            </Link>
          </li>
          <li>
            <Link to="/conversor">
              <ConverterIcons />
              <span
                style={{
                  color: currentLocation === "/conversor" ? "#6495ed" : "black",
                }}
              >
                Conversor de divisas
              </span>
            </Link>
          </li>
          <li>
            <Link to="/pagar-servicios">
              <ConverterIcons />
              <span
                style={{
                  color: currentLocation === "/pagar-servicios" ? "#6495ed" : "black",
                }}
              >
                Pago de servicios
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
