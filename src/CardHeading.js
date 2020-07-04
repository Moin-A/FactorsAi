import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: "1rem 5rem",
    },
    type: {
      borderBottom: "2px solid black",
    },
  })
);

export default function RecipeReviewCard() {
  const classes = useStyles();

  return (
    <Grid container spacing={9}>
      <Grid item xs={3}>
        <Card className={classes.root} elevation="false" variant="body1">
          <Typography
            variant="body2"
            gutterBottom
            style={{
              borderBottom: "3px solid #54b9d1",
              margin: "9px 0",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            43525 results found
          </Typography>
        </Card>
      </Grid>
    </Grid>
  );
}
