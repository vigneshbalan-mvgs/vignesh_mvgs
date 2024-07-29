import "./App.css";
import Footer from "./Componants/Footer";
import Header from "./Componants/Header";
import Contact from "./Componants/Contact";
import Skills from "./Componants/Skills";
import Home from "./Componants/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/skills" element={<Skills />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
