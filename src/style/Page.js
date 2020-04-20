import styled from "styled-components";

export const Img = styled.img`
  height: 80vmin;
  box-shadow: 0 2rem 3rem #00000080;
  border-radius: 1rem;
  margin: 10% 0 95vh 0;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
`;

export const WrapText = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-60%);
  align-items: center;
  justify-content: center;
  height: 100%;
  z-index: -1;
`;

export const Text = styled.section`
  flex: 1;
  font-size: 1.3rem;
  line-height: 1.7rem;
  color: #ffffffaa;
  text-align: center;
`;
