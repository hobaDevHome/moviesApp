/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div>
      <Link to={`/movies/${movie.imdbID}`}>
        <img
          src={movie.Poster}
          alt=""
          style={{
            width: "200px",
            height: "300px",
            objectFit: "strecoverch",
            display: "inline",
          }}
        />
      </Link>
    </div>
  );
};

export default MovieCard;
