import React, { useCallback, useEffect, useRef } from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  body {
    background-color: #eee;
    min-height: 100vh;
  }
`;

const Container = styled.div`
  overflow-x: hidden;
  background-color: #eee;
  z-index: 1;
  overflow-y: auto;
  height: 100%;
  padding-left: 20px;

  &::-webkit-scrollbar {
    outline: none;
    width: 20px;
  }
  &::-webkit-scrollbar-track {
    outline: none;
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    outline: none;
    background-color: red;
    border: 8.5px solid transparent;
    border-radius: 10px;
    background-clip: content-box;
  }
  &.scroll-hide::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
`;

const ScrollableContainer = ({ className = "", children, ...props }) => {
  const containerRef = useRef(null);

  const changeScrollHide = useCallback((element, scrollClass, type) => {
    const classNames =
      (element.className && element.className.split(" ")) || [];
    const newClassNames = classNames.filter((className) => {
      return className !== scrollClass;
    });

    if (type === "add") {
      newClassNames.push(scrollClass);
    }
    element.className = newClassNames.join(" ").trim();
  }, []);

  const scrollHandler = useCallback(() => {
    clearTimeout(containerRef.current.scrollTimeout);
    // hide 상태일때, onScroll시 스크롤 생성
    if (containerRef.current.className.split(" ").includes("scroll-hide")) {
      changeScrollHide(containerRef.current, "scroll-hide", "remove");
    }
    // scrollUI hide 처리, 1초 안에 scroll event 발생시, timeout 삭제됨
    containerRef.current.scrollTimeout = setTimeout(() => {
      changeScrollHide(containerRef.current, "scroll-hide", "add");
    }, 1000);
  }, []);

  useEffect(() => {
    containerRef.current.style["overflow-y"] = "auto";
    containerRef.current.style["-webkit-overflow-scrolling"] = "touch";
    changeScrollHide(containerRef.current, "scroll-show", "add");
    changeScrollHide(containerRef.current, "scroll-hide", "add");

    containerRef.current.addEventListener("scroll", scrollHandler, false);

    return () => {
      containerRef.current.removeEventListener("scroll", scrollHandler, false);
    };
  }, []);

  return (
    <>
      <GlobalStyle />
      <Container
        className={`${className} scrollable`}
        ref={containerRef}
        {...props}
      >
        {children}
      </Container>
    </>
  );
};

export { ScrollableContainer };
