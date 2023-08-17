/* eslint-disable react/jsx-no-target-blank */
// @ts-nocheck

import Navbar from "./components/Navbar";

import Hero from "./components/Hero";

import Gallery from "./components/Gallery";

function Home() {
  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "20px auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Navbar />
      <Hero />

      <Gallery />
    </div>
  );
}

export default Home;
