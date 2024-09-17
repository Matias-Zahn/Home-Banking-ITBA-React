import {Routes, Route } from "react-router-dom";
import { Prestamos, Conversor, Cuentas, Transferencias} from "../pages/Index";


export function MyRoutes() {
    return (
        <Routes>
            <Route path="/cuenta" element={<Cuentas />} />
            <Route path="/prestamos" element={<Prestamos/>} />
            <Route path="/transferencias" element={<Transferencias />} />
            <Route path="/conversor" element={<Conversor />} />
        </Routes>
    );
}