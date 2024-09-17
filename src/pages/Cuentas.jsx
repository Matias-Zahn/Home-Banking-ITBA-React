import { Header, Sidebar } from "../components/index";
import "../assets/styles/cuentas.css";
import CardButtoms from "../components/cuenta/CardButtoms";
import Card from "../components/cuenta/Card";
function Cuentas() {
  return (
    <main>
      <Header />
      <section className="row">
        <div className="content">
          <Sidebar />

          <div className="content-items">
            <h1>Desde cuentas</h1>
            <div>
              <Card />

              <div>
                <CardButtoms />
              </div>
            </div>
          </div>
        </div>
        <h2>Footer</h2>
      </section>
    </main>
  );
}
export { Cuentas };
