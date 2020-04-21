import React, { Component } from "react";
import { HashRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import Views from "./components/Views";
import Navigation from "./components/Navigation";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Montserrat';
  }
  body {
    margin: 0;
    background: #121f21;
  }
  .selected{
    transform: scale(1.3);
    background: #3b6368;
    color: white;
  }

  /* width */
::-webkit-scrollbar {
  width: 15px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #121f21;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #233d40;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #3b6368;
}
`;

class App extends Component {
  render() {
    return (
      <HashRouter>
        <GlobalStyle />
        <div>
          <Navigation />
          <Views />
        </div>
        <div id="bottom"></div>
      </HashRouter>
    );
  }
}

export default App;
