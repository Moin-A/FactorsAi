import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import Button from "@material-ui/core/Button";
import InputBase from "@material-ui/core/InputBase";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import ShareIcon from "@material-ui/icons/Share";
import MailIcon from "@material-ui/icons/Mail";
import PrintIcon from "@material-ui/icons/Print";
import Badge from "@material-ui/core/Badge";

import Grid from "@material-ui/core/Grid";
import ViewCompactIcon from "@material-ui/icons/ViewCompact";
import {
  createStyles,
  fade,
  Theme,
  makeStyles,
} from "@material-ui/core/styles";

import SearchIcon from "@material-ui/icons/Search";

import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minWidth: 300,

      width: "100%",
    },
    menuButton: {},
    imageMarked: {
      height: 3,

      width: 34,

      backgroundColor: theme.palette.common.black,
      position: "absolute",
      bottom: -2,

      left: "calc(50% - 18px)",
      transition: theme.transitions.create("opacity"),
    },
    toolbar: {
      minHeight: "12rem",
      alignItems: "flex-start",
      margin: "1rem",
    },
    icon: {
      fontSize: "1.4rem",
      margin: "0 0.3rem",
      right: "0",
      "&:first-child": {
        color: "#5a8bb9e6",
      },
    },

    title: {
      justifyContent: "center",
      fontSize: "1.4rem",
      fontWeight: "600",
      position: "relative",
    },
    span: {
      fontSize: "0.6rem",
      "&:hover, &$focusVisible": {
        borderBottom: "2px solid pink",
      },
    },
    ".MuiBadge-anchorOriginTopRightRectangle": {
      top: "-42px",
    },
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,

      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: "2rem",
      width: "10rem",

      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      color: "#000000cf",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 2,
    },
    inputRoot: {
      color: "inherit",
      background: "#c9cdd65c ",
      borderRadius: "3rem",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),

      paddingLeft: `calc(1em + ${theme.spacing(8)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",

      [theme.breakpoints.up("sm")]: {
        width: "14ch",
        "&:focus": {
          width: "10ch",
        },
      },
    },
  })
);

const style = {
  minHeight: "8rem",
  display: "grid",
  fontSize: "0.7rem",
  margin: "1rem",
};

export default function SearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent" elevation="flex-end">
        <Toolbar
          style={style}
          elevation="false"
          alignItems="flex-end"
          justifyContent="center"
        >
          <Grid container spacing={2}>
            <Grid
              item
              xs={2}
              style={{ display: "flex", justifyContent: "center" }}
              alignContent="center"
            >
              <ViewCompactIcon fontSize="large" />
              <Typography className={classes.title} variant="h6" noWrap>
                CRAVIOUS
              </Typography>
            </Grid>
            <Grid item xs>
              <Button className={classes.title}>
                <span className={classes.span}>Home</span>
              </Button>
            </Grid>
            <Grid item xs>
              <Button className={classes.title}>
                <span className={classes.span}>How it Works?</span>
              </Button>
            </Grid>
            <Grid item xs>
              <Button className={classes.title}>
                <span className={classes.span}>Job Seekers</span>
              </Button>
            </Grid>
            <Grid item xs>
              <Button className={classes.title}>
                <span className={classes.span}>Employees</span>
              </Button>
            </Grid>
            <Grid item xs>
              <Button className={classes.title}>
                <Badge
                  badgeContent={9}
                  color="primary"
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                >
                  <span className={classes.span}>contact</span>
                </Badge>
              </Button>
            </Grid>
            <Grid item xs>
              <Button className={classes.title}>
                <Badge
                  badgeContent={23}
                  color="primary"
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                >
                  <span className={classes.span}>Employees</span>
                </Badge>
              </Button>
            </Grid>
            <Grid item xs={2}>
              <div className={classes.search}>
                <div
                  style={{
                    position: "absolute",
                    top: "-1.8rem",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <MailIcon className={classes.icon} />
                  <TwitterIcon className={classes.icon} />
                  <ShareIcon className={classes.icon} />
                  <printIcon
                    className={classes.icon}
                    style={{ color: "#89a8c5e6" }}
                  />
                  <PrintIcon className={classes.icon} />
                  <FacebookIcon className={classes.icon} />
                </div>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ "aria-label": "search" }}
                />
              </div>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
