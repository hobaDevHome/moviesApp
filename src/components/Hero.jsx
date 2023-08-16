/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// @ts-nocheck

import { colors } from "../constants";
import background from "../../public/images/lion2.jpg";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import Box from "@mui/material/Box";

// eslint-disable-next-line react/prop-types
const Hero = ({ movie }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: 500,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          padding: 0,

          borderRadius: 12,
          boxShadow: "3px 3px 5px #140c11",
          margin: 10,
        }}
      >
        <Grid
          container
          xs={12}
          alignItems="end"
          marginBottom={6}
          display={"flex"}
        >
          <Grid
            item
            container
            xs={12}
            sm={12}
            md={4}
            paddingLeft={4}
            direction={"column"}
          >
            <Typography
              variant="h6"
              width={100}
              sx={{
                fontWeight: 900,
                color: "white",
                fontSize: 40,
                fontFamily: "Fraunces",
              }}
            >
              {movie.Title}
            </Typography>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                fontSize: 12,
                color: "white",
              }}
            >
              <p>{movie.Genre}</p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginLeft: 10,
                  alignItems: "center",
                }}
              >
                <CalendarMonthIcon
                  style={{ fontSize: 20, color: "#a45bf5", marginRight: 5 }}
                />
                <p>{movie.Year}</p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginLeft: 10,
                  alignItems: "center",
                }}
              >
                <AccessAlarmIcon
                  style={{ fontSize: 20, color: "#a45bf5", marginRight: 5 }}
                />
                <p>{movie.Runtime}</p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div>
                <Box
                  sx={{
                    width: "60%",
                    display: "flex",
                    alignItems: "center",
                    marginRight: 1,
                  }}
                >
                  <Rating
                    name="text-feedback"
                    value={4.5}
                    readOnly
                    precision={0.5}
                    emptyIcon={
                      <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                    }
                  />
                </Box>
              </div>
              <div
                style={{
                  fontSize: 14,
                  color: "white",
                  border: "1px solid white",
                  padding: 3,
                }}
              >
                {movie.Rated}
              </div>
            </div>
          </Grid>
          <Grid item container xs={12} sm={12} md={4}></Grid>
          <Grid item container xs={12} sm={12} md={4} paddingRight={3}>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                fontSize: 10,
                color: "white",
                justifyContent: "end",
              }}
            >
              <div
                style={{
                  fontSize: 10,
                  color: colors.white,
                  marginRight: 5,
                }}
              >
                {movie.Director}
              </div>
              <div
                style={{
                  fontSize: 10,
                  color: colors.yellow,
                  marginRight: 5,
                }}
              >
                Director
              </div>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                fontSize: 10,
                color: "white",
                justifyContent: "end",
              }}
            >
              <div
                style={{
                  fontSize: 10,
                  color: colors.white,
                  marginRight: 5,
                }}
              >
                {movie.Actors}
              </div>
              <div
                style={{
                  fontSize: 10,
                  color: colors.yellow,
                  marginRight: 5,
                }}
              >
                Stars
              </div>
            </div>
            <Typography
              variant="h6"
              sx={{
                color: colors.white,
                fontSize: 10,
                fontFamily: "Barlow",
                marginTop: 2,
                textAlign: "right",
              }}
            >
              {movie.Plot}
            </Typography>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Hero;
