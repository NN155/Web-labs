import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "../../components/pages/home/Home";
import Addhome from "../../components/pages/add-home/Addhome";
import Header from "../../components/Header";

const Router = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add-home" element={<Addhome />} />
      <Route path="*" element={<Home />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
