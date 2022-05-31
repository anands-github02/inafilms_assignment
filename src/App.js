import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Company from "./pages/Company";
import Document from "./pages/Document";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="document" element={<Document />} />
        <Route path="company" element={<Company />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
