import React from "react";
import styled from "styled-components";

const Text = styled.div`
  text-align: center;
  font-size: 3rem;
  color: #ffffffaa;
`;
const Home = () => (
  <>
    <Text>
      <br />
      <br />
      <h1>Dziady cz.3</h1>
      <br />
      <br />
      <div>
        Autorzy:
        <br />
        Konrad Oleksy <br />
        Szymon Kasza <br />
        Łukasz Nowak <br />
        Łukasz Wierzycki
        <br />
        Sebastian Banach
        <br />
        Kacper Ślusarczyk
      </div>
      
      <br />
      <br />
      <br />
      <small style={{fontSize: 30}}>Prawidłowo działa tylko na komputerze</small>
      <br />
      <small style={{fontSize: 20}}>Klawisz <b>F11</b> -> Dla lepszych wrażeń (pełny ekran)</small>
    </Text>
  </>
);

export default Home;
