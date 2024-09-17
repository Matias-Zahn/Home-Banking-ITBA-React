import React, { useState } from "react";
import "../assets/styles/loans.css";

const Prestamos = () => {
  const [capital, setCapital] = useState('');
  const [cuotas, setCuotas] = useState('');
  const [interes, setInteres] = useState('');
  const [tabla, setTabla] = useState([]);
  const [totales, setTotales] = useState({
    totalCapital: 0,
    totalInteres: 0,
    totalPago: 0,
  });

  const genTable = () => {
    const capitalNum = Number(capital);
    const cuotasNum = Number(cuotas);
    const interesNum = Number(interes);

    if (capitalNum > 0) {
      let tempTabla = [];
      let totalInteres = 0;
      let totalPago = 0;

      for (let i = 1; i <= cuotasNum; i++) {
        const ca = capitalNum / cuotasNum;
        const d1 = ca.toFixed(2);
        const i2 = ((capitalNum * interesNum) / 100) / cuotasNum;
        const d2 = i2.toFixed(2);
        const r = ca + i2;
        const d3 = r.toFixed(2);

        tempTabla.push({
          nro: i,
          capital: d1,
          interes: d2,
          pago: d3,
        });

        totalInteres += i2;
        totalPago += r;
      }

      setTabla(tempTabla);
      setTotales({
        totalCapital: capitalNum.toFixed(2),
        totalInteres: totalInteres.toFixed(2),
        totalPago: totalPago.toFixed(2),
      });
    } else {
      alert("Falta ingresar un número válido para el capital.");
    }
  };

  return (
    <div className="form">
      <fieldset>
        <h2>SIMULADOR DE PRÉSTAMO</h2>
        <form>
          <div>
            <label className="input_simulador_label" htmlFor="capital">
              Capital:
              <input
                type="number"
                placeholder="Ingrese el capital prestado"
                id="capital"
                value={capital}
                onChange={(e) => setCapital(e.target.value)}
              />
              <i className="fas fa-coins"></i>
            </label>
          </div>
          <div>
            <label className="input_simulador_label" htmlFor="cuotas">
              Cuotas:
              <input
                type="number"
                placeholder="Ingrese las cuotas del préstamo"
                id="cuotas"
                value={cuotas}
                onChange={(e) => setCuotas(e.target.value)}
              />
              <i className="far fa-calendar-alt"></i>
            </label>
          </div>
          <div>
            <label className="input_simulador_label" htmlFor="interes">
              Interés:
              <input
                type="number"
                placeholder="Ingrese el interés a generar"
                id="interes"
                value={interes}
                onChange={(e) => setInteres(e.target.value)}
              />
              <i className="fas fa-hand-holding-usd"></i>
            </label>
          </div>
        </form>
        <button type="button" onClick={genTable}>
          Calcular
        </button>
      </fieldset>

      {tabla.length > 0 && (
        <table className="tab">
          <thead>
            <tr>
              <td className="nro">NRO</td>
              <td>C</td>
              <td>INTERÉS</td>
              <td>IMPORTE A PAGAR</td>
            </tr>
          </thead>
          <tbody>
            {tabla.map((row, index) => (
              <tr key={index}>
                <td>{row.nro}</td>
                <td>{row.capital}</td>
                <td>{row.interes}</td>
                <td>{row.pago}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td className="ft">TOTAL</td>
              <td>{totales.totalCapital}</td>
              <td>{totales.totalInteres}</td>
              <td>{totales.totalPago}</td>
            </tr>
          </tfoot>
        </table>
      )}
    </div>
  );
};

export default Prestamos;
