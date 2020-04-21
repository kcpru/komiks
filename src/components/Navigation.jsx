import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.div`
  width: 1000px;
  display: block;
  margin: 2rem auto;

  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
`;

const StyledLink = styled(NavLink)`
  display: inline-block;
  min-width: 50px;
  height: 50px;
  border-radius: 5rem;
  border: solid 2px #3b6368;
  margin: 0 1rem;
  color: #3b6368; /*#233d40*/
  text-decoration: none;
  text-align: center;
  line-height: 3.2rem;
  font-weight: bold;
  background-color: #3b636850;
  transition: 0.2s;

  &:hover {
    background: #3b6368;
    color: white;
    transform: scale(1.3);
  }
`;

const path = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

class Navigation extends React.Component {
  render() {
    return (
      <Nav>
        <StyledLink to="/">0</StyledLink>
        {path.map((el, index) => (
          <StyledLink to={`/${el}`} key={index} activeClassName="selected">
            {el}
          </StyledLink>
        ))}
      </Nav>
    );
  }
}

export default Navigation;
