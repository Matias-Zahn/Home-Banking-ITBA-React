import "../assets/styles/cuentas.css";
import Card from "../components/cuenta/Card";
import History from "../components/cuenta/History";
function Cuentas() {
  return (
    <main>
      <section className="content">
        <div className="content-items">
          <h1>Desde cuentas</h1>
          <div className="content-items-card">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>

        <History />
      </section>
    </main>
  );
}
export { Cuentas };
