import React from "react";
import {
  createStyles,
  makeStyles,
  withStyles,
  Theme,
} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";
import Slider from "@material-ui/core/Slider";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const BootstrapInput = withStyles((theme: Theme) =>
  createStyles({
    root: {
      "label + &": {
        borderRadius: 23,
        marginTop: theme.spacing(3),
      },
    },
    button: {
      top: "0.7rem",
    },
    input: {
      borderRadius: 23,
      width: "9rem",
      position: "relative",
      backgroundColor: theme.palette.background.paper,
      border: "1px solid #ced4da",
      fontSize: 16,
      padding: "10px 26px 10px 12px",
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
      "&:focus": {
        borderRadius: 23,

        borderColor: "#80bdff",
        boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
      },
    },
  })
)(InputBase);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      margin: "0.7rem",

      margin: theme.spacing(1),
    },
  })
);

export default function CustomizedSelects() {
  const classes = useStyles();
  const [age1, setAge1] = React.useState("");
  const [age2, setAge2] = React.useState("");
  const [age3, setAge3] = React.useState("");
  const handleChange1 = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge1(event.target.value);
  };
  const handleChange2 = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge2(event.target.value);
  };
  const handleChange3 = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge3(event.target.value);
  };
  return (
    <div style={{ margin: "0 3.5rem" }}>
      <Grid container spacing={3}>
        <Grid item xs alignContent="center">
          <FormControl className={classes.margin}>
            <Select
              labelId="demo-customized-select-label1"
              id="demo-customized-select1"
              value={age1}
              onChange={handleChange1}
              input={<BootstrapInput />}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs alignContent="center">
          <FormControl className={classes.margin}>
            <Select
              labelId="demo-customized-select-label2"
              id="demo-customized-select2"
              value={age2}
              onChange={handleChange2}
              input={<BootstrapInput />}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs alignContent="center">
          <FormControl className={classes.margin}>
            <Select
              labelId="demo-customized-select-label3"
              id="demo-customized-select3"
              value={age3}
              onChange={handleChange3}
              input={<BootstrapInput />}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4} alignContent="center">
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            endIcon={<ArrowForwardIosIcon />}
            style={{
              margin: "0.7rem",
              borderRadius: "4rem",
              fontSize: "1rem",
              alignItems: "center",
            }}
          >
            SUBMIT
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
