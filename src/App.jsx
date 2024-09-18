import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import "./assets/styles/index.css";
import { MyRoutes } from "./routers/Routes";
import { Header } from "./components/Header";
import styled from "styled-components";
import { Sidebar } from "./components/Sidebar";
import { Footer } from "../src/components/Footer";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <>
      <Header />
      <Container>
        <BrowserRouter>
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <MyRoutes />
        </BrowserRouter>
        <Footer />
      </Container>
    </>
  );
}
const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 250px 1fr;
  height: 94vh;
`;

export default App;
