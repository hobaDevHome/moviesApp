import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { colors } from "../constants";
import Typography from "@mui/material/Typography";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import axios from "axios";
import LowPriorityIcon from "@mui/icons-material/LowPriority";
import { Link } from "react-router-dom";

const theme = createTheme({
  components: {
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: "orange",
          height: 3,
        },
      },
    },
  },
});

const MovieDetails = () => {
  const [value, setValue] = useState(0);
  const [movie, setMovie] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    // setMovie(tempMovie);
    const fetchMovies = async () => {
      const { data } = await axios.get(
        `http://www.omdbapi.com/?i=${id}&plot=full&apikey=18a85a90`
      );

      setMovie(data);
    };

    fetchMovies();
  }, [id]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  if (!movie) {
    return null;
  }

  let rating = movie.Ratings[0].Value.split("/")[0];

  return (
    <Container fixed sx={{ height: "100vh" }}>
      <Box>
        <Grid
          container
          xs={12}
          direction="column"
          pb={0}
          justifyContent="flex-start"
          style={{
            position: "relative",
            width: "95%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Link to="/">
            <div style={{ cursor: "pointer", color: colors.white }}>
              <LowPriorityIcon
                style={{
                  fontSize: 40,
                  color: colors.white,
                  marginRight: 5,
                  marginTop: 5,
                }}
              />
              <div style={{ marginBottom: 10 }}>Back to movies list</div>
            </div>
          </Link>
          <div style={{ backgroundColor: colors.greyBG }}>
            {/* poster and title  */}
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div>
                <img
                  src={movie.Poster}
                  alt=""
                  style={{
                    width: 200,
                    height: 300,
                    display: "block",
                    objectFit: "cover",
                    marginRight: 10,
                    borderBottomRightRadius: 10,
                    borderBottomLeftRadius: 10,
                  }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "end",

                  width: "100%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    margin: 10,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 900,
                      color: "white",
                      fontSize: 30,
                      fontFamily: "Fraunces",
                      marginBottom: 2,
                    }}
                  >
                    {movie.Title}
                  </Typography>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginLeft: 10,
                      alignItems: "center",
                      color: "white",
                      backgroundColor: "rgba(255,255,255, 0.2)",
                      padding: "0 10px",
                      borderRadius: 5,
                    }}
                  >
                    <StarBorderOutlinedIcon
                      style={{ fontSize: 20, color: "#ffffff", marginRight: 5 }}
                    />
                    <p>{rating}</p>
                  </div>
                </div>
              </div>
            </div>
            {/* movie info line */}
            <div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  fontSize: 12,
                  color: colors.white,
                  marginTop: 10,
                }}
              >
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
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginLeft: 10,
                    alignItems: "center",
                  }}
                >
                  <ConfirmationNumberIcon
                    style={{
                      fontSize: 20,
                      color: colors.purple,
                      marginRight: 5,
                    }}
                  />
                  <p>{movie.Genre}</p>
                </div>
              </div>
            </div>
            {/* movie details tabs */}
            <ThemeProvider theme={theme}>
              <Box sx={{ width: "70%", marginTop: 3 }}>
                <Box
                  sx={{
                    borderBottom: 1,
                    borderColor: "divider",
                  }}
                >
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="movie details"
                    textColor="secondary"
                    sx={{
                      "& button": { color: colors.white },
                    }}
                  >
                    <Tab label="About Movie" {...a11yProps(0)} />
                    <Tab label="Reviews" {...a11yProps(1)} />
                    <Tab label="Cast" {...a11yProps(2)} />
                  </Tabs>
                </Box>
                <CustomTabPanel
                  value={value}
                  index={0}
                  style={{ color: colors.white }}
                >
                  {movie.Plot}
                </CustomTabPanel>
                <CustomTabPanel
                  value={value}
                  index={1}
                  style={{ color: colors.white }}
                >
                  {movie.Ratings.map((e, i) => {
                    return (
                      <p key={i}>
                        {e.Source} : {e.Value}
                      </p>
                    );
                  })}
                </CustomTabPanel>
                <CustomTabPanel
                  value={value}
                  index={2}
                  style={{ color: colors.white }}
                >
                  {movie.Actors}
                </CustomTabPanel>
              </Box>
            </ThemeProvider>
          </div>
        </Grid>
      </Box>
    </Container>
  );
};

export default MovieDetails;

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
