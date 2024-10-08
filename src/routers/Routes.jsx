import {Routes, Route } from "react-router-dom";
import { Prestamos, Conversor, Cuentas, Transferencias, BillPayment,} from "../pages/index";
import LoginForm from "../pages/loginform";
import Redirection from "../pages/Redirection";


export function MyRoutes() {
    return (
        <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/redirection" element={<Redirection />} />
            <Route path="/cuenta" element={<Cuentas />} />
            <Route path="/prestamos" element={<Prestamos/>} />
            <Route path="/transferencias" element={<Transferencias />} />
            <Route path="/conversor" element={<Conversor />} />
            <Route path="/pagar-servicios" element={<BillPayment />} />
        </Routes>
    );
}