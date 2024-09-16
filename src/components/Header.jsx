import "../assets/styles/header.css";
import "../assets/styles/index.css";
import Menuicons from "./Icons/MenuIcons";


function Header() {
  return (
    <header>
      <div className="name-page">
        <Menuicons/>
        <h1>ITBANK</h1>
      </div>
    </header>
    
  );
}
export default Header;
