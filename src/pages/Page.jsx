import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { FaAngleDoubleUp } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const keyframeImg = keyframes`
  0% {
    transform: scale(0.9) translateX(-55%);
  }
  100% {
    transform: scale(1) translateX(-50%);
  }
`;

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
  animation: ${keyframeImg} 0.3s ease-in-out;
`;

const keyframeText = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
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
  animation: ${keyframeText} 1s ease-in-out;
`;

const Text = styled.section`
  flex: 1;
  font-size: 1.2rem;
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
  animation: ${keyframeIconUp} 2.49s ease-in-out 1s;
`;

function Page({ text, index }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
