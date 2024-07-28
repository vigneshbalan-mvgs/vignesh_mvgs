import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Contact from "./Componants/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/contact" element={<Contact />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>,
);
