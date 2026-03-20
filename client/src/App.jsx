import React from "react";
import { Routes, Route } from "react-router-dom";
import Registration from "./pages/Registration";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Registration />} />
    </Routes>
  );
};

export default App;
