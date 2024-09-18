import "../assets/styles/header.css";
import "../assets/styles/index.css";
import Menuicons from "./Icons/MenuIcons";

export function Header() {
  return (
    <header>
      <div className="name-page header">
        <Menuicons />
        <h1>ITBANK</h1>
      </div>
    </header>
  );
}
