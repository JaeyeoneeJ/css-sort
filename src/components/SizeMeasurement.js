import React, { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";

const Box = styled.div`
  box-shadow: 0 0 0 3px blue inset;
  position: relative;
`;

const MWrapper = styled.div`
  position: absolute;
  background-color: red;

  ${({ mPosition }) =>
    mPosition === "right" || mPosition === "left"
      ? `width: 1px; height: 100%;`
      : `width: 100%; height: 1px;`};

  ${({ mPosition }) => mPosition && `${mPosition}: -5px;`}
  z-index: 1;

  &:after {
    content: ${({ boxSize }) => '"' + boxSize + '"'};
    z-index: 1;
    color: #aaa;
    font-weight: 300;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    ${({ mPosition }) =>
      mPosition === "right"
        ? `left: 5px; width: auto; height: 100%;`
        : `bottom: 1px; width: 100%; height: auto;`}/* background-color: yellow; */
  }
`;

const SizeMeasurement = ({
  innerRef,
  children,
  isItemOutline = false,
  widthprop = false,
  outlineColor = "black",
  dataLength = 0,
  ...props
}) => {
  const boxRef = useRef(null);
  const contentRef = innerRef || boxRef;
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });
  console.log("boxSize: ", boxSize);
  console.log("innerRef: ", innerRef);

  useEffect(() => {
    const resizeHandler = () => {
      if (contentRef.current) {
        const { width, height } = getComputedStyle(contentRef.current);
        setBoxSize({ width, height });
      }
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, [contentRef.current, isItemOutline, dataLength]);

  return (
    <>
      <Box ref={contentRef} {...props}>
        {isItemOutline && (
          <>
            <MWrapper mPosition={"right"} boxSize={boxSize.height} />
            <MWrapper mPosition={"top"} boxSize={boxSize.width} />
          </>
        )}

        {children}
      </Box>
    </>
  );
};

export default SizeMeasurement;
