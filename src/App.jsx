import React from "react";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./layouts/Layout";
import Gallery from "./pages/Gallery";
import Test from "./components/Test";
// import {Routes,Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
