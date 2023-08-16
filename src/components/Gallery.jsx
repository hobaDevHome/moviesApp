/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// @ts-nocheck
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import MovieCard from "./MovieCard";

const Gallery = ({ moviesList = [] }) => {
  if (moviesList.length === 0) {
    return null;
  }

  return (
    <Grid container item xs={12} padding={1}>
      {moviesList.map((e) => {
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
              alignItems: "center",
            }}
          >
            <MovieCard movie={e} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Gallery;
