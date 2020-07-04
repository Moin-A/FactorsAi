import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox, { CheckboxProps } from "@material-ui/core/Checkbox";
import Slider from "./Slider";
import Grid from "@material-ui/core/Grid";
import { Slide } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const GreenCheckbox = withStyles({
  root: {
    margin: "0 3.45rem",
    color: "black",
    "&$checked": {
      color: "black",
    },
  },
  checked: {},
})((props: CheckboxProps) => <Checkbox color="default" {...props} />);

export default function CheckboxLabels() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const style = {
    color: "gray",
    border: "black",
  };
  return (
    <div style={{ margin: "0 4.9rem" }}>
      <Grid container spacing={2}>
        <FormGroup row>
          <Grid
            item
            xs
            style={{ display: "flex", justifyContent: "center" }}
            alignContent="center"
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.checkedA}
                  onChange={handleChange}
                  name="checkedA"
                  style={style}
                />
              }
              label="FullTime"
            />
          </Grid>
          <Grid
            item
            xs
            style={{ display: "flex", justifyContent: "center" }}
            alignContent="center"
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.checkedB}
                  onChange={handleChange}
                  name="checkedB"
                  color="white"
                  style={style}
                />
              }
              label="Part-time"
            />
          </Grid>
          <Grid
            item
            xs
            style={{ display: "flex", justifyContent: "center" }}
            alignContent="center"
          >
            <FormControlLabel
              control={<Checkbox name="checkedC" style={style} />}
              label="Weekends"
            />
          </Grid>
          <Grid
            item
            xs
            style={{ display: "flex", justifyContent: "center" }}
            alignContent="center"
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.checkedG}
                  onChange={handleChange}
                  name="checkedG"
                  color="primary"
                  style={style}
                />
              }
              label="Free-lance"
            />
          </Grid>
          <Grid
            item
            xs={3}
            style={{ display: "flex", justifyContent: "center" }}
            alignContent="center"
          >
            <Slider />
          </Grid>
        </FormGroup>
      </Grid>
    </div>
  );
}
