import React from "react";
import Header from "./Header";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import "./App.css";
import styled from "styled-components";
import CardHeader from "./CardHeader";
import Form from "./Form";
import { Divider } from "@material-ui/core";
import Checkbox from "./Checkbox";
import CardHeading from "./CardHeading";

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "*::-webkit-scrollbar": {
          width: "0.4em",
          left: "-100px",
          Color: "",
          background: "#5980b01f",
          margin: "2rem 2rem",
        },
        typography: {
          fontSize: 16,
        },
        html: {},
        body: {
          display: "grid",
          position: "fixed",
          width: "100%",
          gridTemplateColumns: ` [sidebar-start] 22rem [sidebar-end full-start] minmax(6rem, 1fr)
          [center-start] repeat(8, [col-start] minmax(min-content, 19rem) [col-end])
          center-end] minmax(6rem, 1fr) [full-end]`,
        },

        "*::-webkit-scrollbar-track": {
          boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
          margin: "1rem",
          padding: "2rem",
        },

        "*::-webkit-scrollbar-thumb": {
          backgroundColor: "#1754feb5",
          outline: "1px solid slategrey",
          boxShadow: "inset 0 0 10px 10px red",
          border: "solid 3px transparent",
        },
      },
    },
  },
});

const STYLEDDIV = styled.div`
  .MuiBadge-anchorOriginTopRightRectangle {
    top: -8px;
    right: -2px;
  }
  .MuiGrid-spacing-xs-2 > .MuiGrid-item {
    padding: 0;
    margin: 1rem;
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <STYLEDDIV>
          <Header />
          <Divider />
          <CardHeader />

          <Form />
          <Checkbox />
          <CardHeading />
        </STYLEDDIV>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
