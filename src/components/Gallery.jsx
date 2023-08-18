/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// @ts-nocheck
import Grid from "@mui/material/Grid";
import MovieCard from "./MovieCard";
import Input from "./Input";
import { useEffect, useState } from "react";
import axios from "axios";
import { colors } from "../constants";
import CircularProgress from "@mui/material/CircularProgress";
import ReactPaginate from "https://cdn.skypack.dev/react-paginate@7.1.0";

const apiKey = "18a85a90";

const Gallery = () => {
  const [searchPharase, setSearchPhrase] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [msg, setMsg] = useState("");
  const [currentPage, setCurrentPage] = useState(0);

  const getMovies = (page = 1) => {
    if (searchPharase === "") {
      setMsg("enter a movie title to search for");
    } else {
      setMsg("");
      setLoading(true);
      axios
        .get(
          `http://www.omdbapi.com/?s=${searchPharase}&apikey=${apiKey}&page=${page}`
        )
        .then((response) => {
          setMovieList(response.data.Search);
          setLoading(false);
          setTotal(Math.ceil(response.data.totalResults / 10));
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
  };
  useEffect(() => {
    setPage(1);
    getMovies(1);

    setCurrentPage(0);
  }, [searchPharase]);

  const handleSearch = (e) => {
    setSearchPhrase(e);
  };
  const handlePageClick = (e) => {
    // console.log(e.selected);
    getMovies(e.selected + 1);
    setPage(e.selected + 1);

    setCurrentPage(e.selected);
  };
  // console.log("page", page);
  return (
    <Grid container item xs={12} padding={1}>
      <Grid
        item
        xs={12}
        padding={1}
        justifyContent="center"
        alignItems="center"
        display="flex"
        flexDirection="column"
      >
        <Input handleSearch={handleSearch} />
        <div style={{ color: colors.white }}>
          <p>{msg}</p>
        </div>
      </Grid>

      {loading ? (
        <Grid
          item
          xs={12}
          padding={1}
          justifyContent="center"
          alignItems="center"
          display="flex"
          flexDirection="column"
        >
          <CircularProgress />
        </Grid>
      ) : (
        <>
          {movieList &&
            movieList.map((e) => {
              return (
                <Grid
                  key={e.imdbID}
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  marginTop={2}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "start",
                  }}
                >
                  <MovieCard movie={e} />
                </Grid>
              );
            })}
        </>
      )}
      {total > 10 && (
        <Grid item xs={12} padding={1}>
          <div className="paginate">
            <ReactPaginate
              forcePage={currentPage}
              previousLabel={"<"}
              nextLabel={">"}
              breakLabel={".."}
              breakClassName={"break-me"}
              pageCount={total}
              marginPagesDisplayed={1}
              pageRangeDisplayed={4}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              subContainerClassName={"pages pagination"}
              activeClassName={"active"}
            />
          </div>
        </Grid>
      )}
    </Grid>
  );
};

export default Gallery;
