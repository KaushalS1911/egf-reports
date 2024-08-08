import React from "react";
import TableData_2 from "./TableData_2";
import TableData_1 from "./TableData_1";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<TableData_2 />} />
          <Route path="/about" element={<TableData_1 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
