import "./assets/styles/index.css";
import Navbar from "./components/Navbar/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Products from "./pages/Products";
function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/productos" element={<Products />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
