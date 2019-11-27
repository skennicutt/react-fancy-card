import * as React from "react";
import { render } from "react-dom";
import chroma from "chroma-js";
import styled, { ThemeProvider } from "styled-components";
import Card from "./components/Card";
import CardContent from "./components/CardContent";

import "./styles.css";

const StyledSiteHeader = styled.div`
  text-align: center;
`;

const StyledCardsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const theme = {
  backgroundColor: "#fff",
  colorAccent: "#3978EF",
  colorAccentDarken: chroma("#3978EF")
    .darken(2)
    .css(),
  colorAccentDropShadow: chroma("#3978EF")
    .darken(2)
    .alpha(0.06)
    .css(),
  colorAccentInnerShadow: chroma("#3978EF")
    .darken(2)
    .alpha(0.2)
    .css()
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledSiteHeader>
        <h1>Cards Action Sandbox</h1>
        <h2>Share the report and watch it go.</h2>
      </StyledSiteHeader>
      <StyledCardsContainer>
        <Card>
          <CardContent />
        </Card>
      </StyledCardsContainer>
    </ThemeProvider>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
