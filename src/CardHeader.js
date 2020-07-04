import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: "0 4rem",
    },
  })
);

export default function RecipeReviewCard() {
  const classes = useStyles();

  return (
    <Grid container spacing={9}>
      <Grid item xs>
        <Card className={classes.root} elevation="false">
          <CardHeader title="Search for a job" subheader="See Search results" />
        </Card>
      </Grid>
    </Grid>
  );
}
