import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Contact, Events, About, Woopse404, Services, CompanyHistory, Location } from "./pages";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="events" element={<Events />} />
        <Route path="about" element={<About />}>
          <Route path="services" element={<Services />} />
          <Route path="history" element={<CompanyHistory />} />
          <Route path="location" element={<Location />} />
        </Route>
        <Route path="*" element={<Woopse404 />} />
      </Routes>
    </>
  );
}

export default App;
