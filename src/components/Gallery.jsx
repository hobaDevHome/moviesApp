/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// @ts-nocheck
import Grid from "@mui/material/Grid";
import MovieCard from "./MovieCard";
import Input from "./Input";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchMovies,
  selectMovies,
  selectStatus,
  selectError,
  selectTotal,
} from "../store/movieSlice";

import { colors } from "../constants";
import CircularProgress from "@mui/material/CircularProgress";
import ReactPaginate from "https://cdn.skypack.dev/react-paginate@7.1.0";

const apiKey = "18a85a90";

const Gallery = () => {
  const [searchPharase, setSearchPhrase] = useState("");

  const [msg, setMsg] = useState("");
  const [currentPage, setCurrentPage] = useState(0);

  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);
  const status = useSelector(selectStatus);
  const error = useSelector(selectError);
  const totalMovies = useSelector(selectTotal);

  const getMovies = (page = 1) => {
    if (searchPharase === "") {
      setMsg("");
    } else {
      setMsg("");

      let query = `http://www.omdbapi.com/?s=${searchPharase}&apikey=${apiKey}&page=${page}`;

      dispatch(fetchMovies(query));

      if (status === "failed") {
        setMsg(error);
      }

      console.log("movies", movies);
      console.log("status", status);
      console.log("error", error);
      console.log("total movies", totalMovies);
    }
  };
  useEffect(() => {
    setCurrentPage(0);
    getMovies(1);
  }, [searchPharase, dispatch]);

  const handleSearch = (e) => {
    setSearchPhrase(e);

    setCurrentPage(0);
    getMovies(1);
  };
  const handlePageClick = (e) => {
    getMovies(e.selected + 1);

    setCurrentPage(e.selected);
  };

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

      {status === "loading" ? (
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
          {movies && movies.length > 0 ? (
            movies.map((e) => {
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
            })
          ) : (
            <div style={{ color: colors.white }}>
              <p>No results found </p>
            </div>
          )}
        </>
      )}
      {totalMovies > 10 && (
        <Grid item xs={12} padding={1}>
          <div className="paginate">
            <ReactPaginate
              forcePage={currentPage}
              previousLabel={"<"}
              nextLabel={">"}
              breakLabel={".."}
              breakClassName={"break-me"}
              pageCount={totalMovies}
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
