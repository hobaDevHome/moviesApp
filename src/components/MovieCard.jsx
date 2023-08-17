/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { colors } from "../constants";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const MovieCard = ({ movie }) => {
  return (
    <div>
      <Link to={`/movies/${movie.imdbID}`}>
        <div
          style={{
            backgroundColor: colors.greyBG,
            padding: 5,
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            color: colors.white,
            borderRadius: 8,
            boxShadow: "3px 3px 5px #140c11",
            width: 260,
          }}
        >
          <img
            src={movie.Poster}
            alt=""
            style={{
              width: "250px",
              height: "300px",
              objectFit: "cover",
              display: "block",
              borderRadius: 8,
            }}
          />
          <p
            style={{
              alignSelf: "start",
              margin: 5,
            }}
          >
            {movie.Title}
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",

              alignSelf: "start",
              margin: 0,
              padding: 0,
            }}
          >
            <CalendarMonthIcon
              style={{ fontSize: 20, color: colors.purple, marginRight: 5 }}
            />
            <p
              style={{
                alignSelf: "start",
                margin: 0,
                fontSize: 13,
              }}
            >
              {movie.Year}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
