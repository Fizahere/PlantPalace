import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Contact from "../pages/Contact";
import DetailPage from "../pages/DetailPage";
import About from "../pages/About";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/explore-plants" element={<Shop />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/plants/detail/:id" element={<DetailPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
