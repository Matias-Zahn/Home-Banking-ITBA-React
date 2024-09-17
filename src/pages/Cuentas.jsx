import "../assets/styles/cuentas.css";
import Card from "../components/cuenta/Card";
import { Header, Sidebar } from "../components/index";
function Cuentas() {
  return (
    <main>
      <Header />
      <section className="row">
        <div className="content">
          <Sidebar />

          <div className="content-items">
            <h1>Desde cuentas</h1>
            <div className="content-items-card">
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
        <h2>Footer</h2>
      </section>
    </main>
  );
}
export { Cuentas };
