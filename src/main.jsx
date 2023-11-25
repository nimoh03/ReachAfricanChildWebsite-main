import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Layout from "./components/Layout.jsx";
import About from "./pages/About.jsx";
import Mission from "./pages/Mission.jsx";
import Interventions from "./pages/Interventions.jsx";
import Contact from "./pages/Contact.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/interventions" element={<Interventions />} />
        <Route path='/contact' element={<Contact />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
