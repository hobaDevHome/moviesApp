// @ts-nocheck
/* eslint-disable react/prop-types */
import TextField from "@mui/material/TextField";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import { useState } from "react";

const Input = ({ handleSearch }) => {
  const [searchPharase, setSearchPhrase] = useState("");
  return (
    <div
      style={{
        width: "100%",
        alignSelf: "center",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <TextField
        size="small"
        value={searchPharase}
        onChange={(e) => setSearchPhrase(e.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            handleSearch(searchPharase);
          }
        }}
        sx={{
          "paddingRight": 1,
          "& .MuiInputLabel-root": { color: "white" },
          "& .MuiOutlinedInput-root": {
            "& > fieldset": { borderColor: "white" },
          },
          "& .MuiOutlinedInput-root.Mui-focused": {
            "& > fieldset": {
              borderColor: "orange",
            },
          },
          "& .MuiInputBase-input": { color: "white" },
        }}
        fullWidth
        id="outlined-basic"
        label="search for a movie title"
        variant="outlined"
        endAdornment={
          <InputAdornment position="end">
            <ZoomInIcon size="large" style={{ color: "red" }} />
          </InputAdornment>
        }
      />
      <ColorButton
        variant="contained"
        onClick={() => handleSearch(searchPharase)}
      >
        Search
      </ColorButton>
    </div>
  );
};

export default Input;

const ColorButton = styled(Button)(({ theme }) => ({
  "color": theme.palette.getContrastText(purple[500]),
  "backgroundColor": purple[500],
  "&:hover": {
    backgroundColor: purple[700],
  },
}));
