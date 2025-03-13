import React from "react";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Detail from "./components/Detail";
import PageNotFound from "./components/PageNotFound";

const App = () => {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="detail/:id" element={<Detail />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
