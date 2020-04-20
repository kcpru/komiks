import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import Views from "./components/Views";
import Navigation from "./components/Navigation";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Montserrat';
  }
  body {
    background: #121f21;
  }
`;

class App extends Component {
  render() {
    return (
      <Router basename={'/komiks'}>
        <GlobalStyle />
        <div>
          <Navigation />
          <Views />
        </div>
      </Router>
    );
  }
}

export default App;
