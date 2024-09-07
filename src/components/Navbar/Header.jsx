import "../../assets/styles/index.css"
import "../../assets/styles/Navbar.css"
import logo_black from "../../assets/images/itbank_black.png"

function Navbar(){
    return(
        <div className="navbar">
            <a href="../../../index.html">
                <img src={logo_black} alt="" className="logo" />
            </a>
            <ul>
                <li><a href="#">Nosotros</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </div>
    );
};

export default Navbar;