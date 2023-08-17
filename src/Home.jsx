/* eslint-disable react/jsx-no-target-blank */
// @ts-nocheck

import Navbar from "./components/Navbar";

import Hero from "./components/Hero";
import { useEffect, useState } from "react";
import Input from "./components/Input";

import axios from "axios";
import { colors } from "./constants";
import Gallery from "./components/Gallery";
import CircularProgress from "@mui/material/CircularProgress";

const apiKey = "18a85a90";

function Home() {
  const [movieList, setMovieList] = useState([]);
  const [searchPharase, setSearchPhrase] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    if (searchPharase === "") {
      setMsg("enter a movie title to search for");
    } else {
      setMsg("");
      setLoading(true);
      axios
        .get(
          `http://www.omdbapi.com/?s=${searchPharase}&apikey=${apiKey}&page=10`
        )
        .then((response) => {
          setMovieList(response.data.Search);
          setLoading(false);
          if (!response.data.Search || response.data.Search.length == 0) {
            setMsg("No results found");
          } else {
            setMsg("");
          }
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setLoading(false); // Set loading to false in case of an error
        });
    }
  }, [searchPharase]);

  const handleSearch = (e) => {
    setSearchPhrase(e);
  };

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
      <Input handleSearch={handleSearch} />
      {loading ? (
        <CircularProgress style={{ marginTop: 20 }} />
      ) : (
        <>
          <div style={{ color: colors.white }}>
            <p>{msg}</p>
          </div>

          <Gallery moviesList={movieList} />
        </>
      )}
    </div>
  );
}

export default Home;
