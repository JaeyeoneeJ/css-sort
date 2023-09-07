import React from "react";
import { ScrollableContainer } from "../components/ScrollableContainer";
import { createGlobalStyle, styled } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body::-webkit-scrollbar {
    background: transparent;
    width: 10px;
  }

  body::-webkit-scrollbar-thumb {
    height: 15%;
    background: #217af4;
    border-radius: 10px;
    border: 2px solid transparent;
    background-clip: content-box;
  }

  body::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;

const DummyWrapper = styled.div`
  height: 300vh;
`;

const Scroll = () => {
  return (
    <>
      <GlobalStyle />
      <DummyWrapper>scroll</DummyWrapper>
    </>
  );
};

export default Scroll;
