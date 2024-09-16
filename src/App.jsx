import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./assets/styles/index.css";
import { Conversor, Cuentas, Prestamos, Transferencias } from "./pages/index";
import LoginForm from "./pages/loginform";

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/cuenta" element={<Cuentas />} />
          <Route path="/prestamos" element={<Prestamos />} />
          <Route path="/transferencias" element={<Transferencias />} />
          <Route path="/conversor" element={<Conversor />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
