import { BrowserRouter, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useState } from "react";
import "./assets/styles/index.css";
import LoginForm from "./pages/loginform";
import Redirection from "./pages/Redirection";
import { MyRoutes } from "./routers/Routes";
import { Header} from "./components/Header";
import  styled  from "styled-components";
import { Sidebar } from "./components/Sidebar";
import { Footer} from "../src/components/Footer";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <>
      <Header/>
      <BrowserRouter>
        <Container>
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
          <MyRoutes/>
        </Container>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

const Container = styled.div`
  display: flex;
  height: 100%;
`;


export default App;
