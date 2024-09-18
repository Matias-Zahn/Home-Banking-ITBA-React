import { useState } from "react";
import "../assets/styles/cuentas.css";

function BillPayment() {
  const [serviceCode, setServiceCode] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [category, setCategory] = useState("");
  const [saldo, setSaldo] = useState(1000); // Saldo inicial, por ejemplo
  const [mensaje, setMensaje] = useState("");

  const manejarCambioSaldo = (e) => {
    const valor = parseFloat(e.target.value);
    if (!isNaN(valor) && valor >= 0) {
      setSaldo(valor);
    } else {
      setSaldo(0);
    }
  };

  const manejarPago = (e) => {
    e.preventDefault();
    if (!serviceCode || !companyName || !category) {
      setMensaje("Por favor, completa todos los campos.");
      return;
    }
    if (saldo <= 0) {
      setMensaje("Saldo insuficiente para realizar el pago.");
      return;
    }
    // Aquí simulas el pago restando el saldo
    setSaldo(saldo - 100); // Suponiendo que el costo del servicio es 100
    setMensaje(`Pago exitoso a ${companyName} por el servicio ${serviceCode}.`);
    
    // Reiniciar campos
    setServiceCode("");
    setCompanyName("");
    setCategory("");
  };

  return (
    <main className="content-main-billPayment">
      <section className="content-billPayment">
        <div className="content-billPayment-items">
          <h1>Pagar Servicio</h1>
          <form className="bill-payment-form" onSubmit={manejarPago}>
            <div className="form-group">
              <label htmlFor="serviceCode">Código del Servicio:</label>
              <input
                type="text"
                id="serviceCode"
                name="serviceCode"
                value={serviceCode}
                onChange={(e) => setServiceCode(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="companyName">Nombre de la Empresa:</label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="category">Rubro:</label>
              <input
                type="text"
                id="category"
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              />
            </div>

            <button type="submit">Pagar</button>
          </form>
          {mensaje && <p>{mensaje}</p>}
          <div>
            <h3>Saldo disponible: ${saldo.toFixed(2)}</h3>
            <input
              type="number"
              value={saldo}
              onChange={manejarCambioSaldo}
              min="0"
              step="0.01"
              placeholder="Ajustar saldo"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export { BillPayment };
