import "./assets/styles/index.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Conversor, Cuentas, Prestamos, Transferencias } from "./pages/index";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

function App() {
  return (
    <>
    <Header/>
      <div className="container">
        <Router>
          <Routes>
            <Route path="/cuentas" element={<Cuentas />} />
            <Route path="/prestamos" element={<Prestamos />} />
            <Route path="/transferencias" element={<Transferencias />} />
            <Route path="/conversor" element={<Conversor />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
