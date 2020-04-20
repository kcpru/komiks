import React from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";

import Page from "../pages/Page";
import Home from "../pages/Home";

import data from "../data/data.json";

const Main = styled.main`
  margin: auto;
  width: 1000px;
`;

function Views() {
  return (
    <Main>
      <Switch>
        {data.map((el, index) => (
          <Route key={index} path={`${process.env.PUBLIC_URL}/${index + 1}`}>
            <Page text={el} index={index} />
          </Route>
        ))}
        <Route path={`${process.env.PUBLIC_URL}/`}>
          <Home />
        </Route>
      </Switch>
    </Main>
  );
}

export default Views;
