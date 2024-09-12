import logo_black from "../assets/images/itbank_black.png";
import "../assets/styles/header.css";

function Header() {
  return (
    <div className="header">
      <a href="../../../index.html">
        <img src={logo_black} alt="" className="logo" />
      </a>
    </div>
  );
}
export default Header;
