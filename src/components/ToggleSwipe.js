import React from "react";
import { styled } from "styled-components";

const Wrapper = styled.div`
  position: relative;
  background-color: #ddd;
  border: 1px solid #ccc;
  border-radius: 20px;
  padding: 2px;
  width: 35px;
  height: 20px;
  cursor: pointer;
`;

const Circle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 20px;
  position: absolute;
  transition: all 0.3s ease-in-out;
  left: ${({ isOn }) => (isOn ? "17px" : "2px")};
  background-color: ${({ isOn }) => (isOn ? "#34d120" : "gray")};
`;

const ToggleSwipe = ({ isOn, setOn }) => {
  return (
    <Wrapper onClick={() => setOn(!isOn)}>
      <Circle isOn={isOn} />
    </Wrapper>
  );
};

export default ToggleSwipe;
