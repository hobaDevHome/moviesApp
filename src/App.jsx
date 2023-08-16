/* eslint-disable react/jsx-no-target-blank */
// @ts-nocheck

import "./App.css";

import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="movies/:id" element={<MovieDetails />} />
    </Routes>
  );
}

export default App;
