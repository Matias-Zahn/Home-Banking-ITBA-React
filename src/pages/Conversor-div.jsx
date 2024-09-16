import Footer from "../components/Footer";
import { Header, Sidebar } from "../components/index";

function Conversor() {
  return (
    <main>
      <Header />
      <div className="flex">
        <Sidebar />
        <h1>Desde conv</h1>
      </div>

      <Footer />
    </main>
  );
}
export { Conversor };
