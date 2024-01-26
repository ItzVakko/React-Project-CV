import React from "react";
import { Routes, Route } from "react-router-dom";
import OuterPage from "./Components/Pages/Outer/OuterPage";
import InnerPage from "./Components/Pages/Inner/InnerPage";

const App = () => {
  document.title = "Project CV";

  return (
    <>
      <Routes>
        <Route path="/" element={<OuterPage />}></Route>
        <Route path="/inner" element={<InnerPage />}></Route>
      </Routes>
    </>
  );
};

export default App;
