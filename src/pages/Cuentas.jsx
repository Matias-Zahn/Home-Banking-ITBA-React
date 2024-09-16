import { Header, Sidebar } from "../components/index";
import "../assets/styles/cuentas.css";
function Cuentas() {
  return (
    <main>
      <Header />
      <div className="content">
        <Sidebar />
        <h1>Desde cuentas</h1>

        <div>
          <p>Saldo</p>
        </div>
      </div>
    </main>
  );
}
export { Cuentas };
