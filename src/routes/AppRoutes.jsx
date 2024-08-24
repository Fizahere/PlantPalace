import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Contact from "../pages/Contact";
import DetailPage from "../pages/DetailPage";
import About from "../pages/About";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/plant-palace/about-us" element={<About />} />
          <Route path="/plant-palace/explore-plants" element={<Shop />} />
          <Route path="/plant-palace/:category" element={<Shop />} />
          <Route path="/plant-palace/contact-us" element={<Contact />} />
          <Route path="/plant-palace/detail/:category/:id" element={<DetailPage />} />
        </Route>
        <Route path="/plant-palace/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
