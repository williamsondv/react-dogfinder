import { useState } from "react";
import DogList from "./DogList.jsx";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./NavBar.jsx";
import Dog from "./Dog.jsx";
import doglist from "./data.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/dogs" element={<DogList data={doglist} />} />
          <Route path="/dogs/:dogName" element={<Dog />} />
          <Route path="*" element={<DogList data={doglist} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
