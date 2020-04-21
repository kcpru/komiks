import React from "react";
import styled, { keyframes } from "styled-components";
import { FaAngleDoubleUp } from "react-icons/fa";

const Img = styled.img`
  height: 80vmin;
  box-shadow: 0 2rem 3rem #00000080;
  border-radius: 1rem;
  margin: 10vh 0 98vh 0;
  /* margin: 10vh 0 0 0; */
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
`;

const WrapText = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  align-items: center;
  justify-content: center;
  height: 100%;
  z-index: 0;
`;

const Text = styled.section`
  flex: 1;
  font-size: 1.3rem;
  line-height: 1.7rem;
  color: #ffffffaa;
  text-align: center;
`;

const keyframeIconUp = keyframes`
  0% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(1rem);
  }
  75% {
    transform: translateY(-1rem);
  }
  100% {
    transform: translateY(0);
  }
`;

const IconUp = styled(FaAngleDoubleUp)`
  font-size: 2.5rem;
  color: #ffffffaa;
  position: absolute;
  top: 3rem;
  left: 48%;
  /* transform: translateX(-50%); */
  animation: ${keyframeIconUp} 2.49s ease-in-out 1s;
`;

function Page({ text, index }) {
  return (
    <>
      <IconUp />
      <Img src={require(`../images/Strona_${++index}.png`)} alt="Zdjęcie" />
      <div style={{ height: `180vh` }}></div>
      <WrapText>
        <Text
          dangerouslySetInnerHTML={{ __html: text.replace(/\n/g, "<br />") }}
        ></Text>
      </WrapText>
    </>
  );
}

export default Page;
