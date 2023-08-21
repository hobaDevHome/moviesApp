import { colors } from "../constants";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

const Hero = ({
  Title,
  Genre,
  Year,
  Plot,
  Runtime,
  Rated,
  Director,
  Actors,
  onPrev,
  onNext,
  Poster,
  RatingStars,
  imdbID,
}) => {
  return (
    <>
      <div
        style={{
          position: "relative",
        }}
      >
        <Link to={`/movies/${imdbID}`}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              height: 500,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundImage: `url(${Poster})`,
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
              marginBottom={3}
              display={"flex"}
            >
              <Grid
                item
                container
                xs={12}
                sm={12}
                md={4}
                paddingLeft={5}
                direction={"column"}
              >
                <Typography
                  variant="h6"
                  width={100}
                  sx={{
                    fontWeight: 900,
                    color: colors.white,
                    fontSize: 35,
                    fontFamily: "Fraunces",
                  }}
                >
                  {Title}
                </Typography>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    fontSize: 12,
                    color: "white",
                  }}
                >
                  <p>{Genre}</p>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginLeft: 10,
                      alignItems: "center",
                    }}
                  >
                    <CalendarMonthIcon
                      style={{
                        fontSize: 20,
                        color: colors.purple,
                        marginRight: 5,
                      }}
                    />
                    <p>{Year}</p>
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
                      style={{
                        fontSize: 20,
                        color: colors.purple,
                        marginRight: 5,
                      }}
                    />
                    <p>{Runtime}</p>
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
                        value={RatingStars}
                        readOnly
                        precision={0.5}
                        emptyIcon={
                          <StarIcon
                            style={{ opacity: 0.55 }}
                            fontSize="inherit"
                          />
                        }
                      />
                    </Box>
                  </div>
                  <div
                    style={{
                      fontSize: 14,
                      color: colors.white,
                      border: "1px solid white",
                      padding: 3,
                    }}
                  >
                    {Rated}
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
                    {Director}
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
                    {Actors}
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
                  {Plot}
                </Typography>
              </Grid>
            </Grid>
          </div>
        </Link>
        <div className="arrow prev" onClick={onPrev}>
          &#8249;
        </div>

        <div className="arrow next" onClick={onNext}>
          &#8250;
        </div>
      </div>
    </>
  );
};

export default Hero;
