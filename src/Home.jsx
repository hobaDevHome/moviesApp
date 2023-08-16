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
import { useLoaderData } from "react-router-dom";

const movie = {
  Title: "Lion",
  Year: "2016",
  Rated: "PG-13",
  Runtime: "118 min",
  Genre: "Biography, Drama",
  Director: "Garth Davis",
  Actors: "Dev Patel, Nicole Kidman, Rooney Mara",
  Plot: "A five-year-old Indian boy is adopted by an Australian couple after getting lost hundreds of kilometers from home. 25 years later, he sets out to find his lost family.",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BMjA3NjkzNjg2MF5BMl5BanBnXkFtZTgwMDkyMzgzMDI@._V1_SX300.jpg",
};

function Home() {
  const [movieList, setMovieList] = useState([]);
  const [searchPharase, setSearchPhrase] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // const fetchMovies = async () => {
    //   const { data } = await axios.get(
    //     `http://www.omdbapi.com/?s=${searchPharase}&apikey=18a85a90&page=10`
    //   );
    //   console.log("response.data1", data.Search);
    //   setMovieList( data.Search);
    // };

    setLoading(true);
    axios
      .get(`http://www.omdbapi.com/?s=${searchPharase}&apikey=18a85a90&page=10`)
      .then((response) => {
        console.log("response.data1", response.data.Search);
        setMovieList(response.data.Search);
        setLoading(false); // Set loading to false after fetching data
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading to false in case of an error
      });

    // fetchMovies();
  }, [searchPharase]);

  console.log("loading", loading);
  const handleSearch = (e) => {
    console.log("searchPharase", searchPharase);
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
      <Hero movie={movie} />
      <Input handleSearch={handleSearch} />
      {loading ? (
        <CircularProgress style={{ marginTop: 20 }} />
      ) : (
        <>
          {!movieList || (movieList && movieList.length === 0) ? (
            <div style={{ color: colors.white }}>
              <p>Nothing found</p>
            </div>
          ) : (
            <Gallery moviesList={movieList} />
          )}
        </>
      )}
    </div>
  );
}

export default Home;
