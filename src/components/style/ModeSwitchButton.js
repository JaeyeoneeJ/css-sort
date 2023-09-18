import React, { useEffect, useRef, useState } from "react";
import { styled, useTheme } from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  top: 60px;
  left: 0;
  width: 60px;
  height: 60px;
  box-sizing: border-box;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colorSet.sub}e6;
  border: 2px solid ${({ theme }) => theme.colorSet.error};
  z-index: 9999;
  cursor: pointer;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.span`
  color: ${({ theme }) => theme.colorSet.background};
  font-weight: bold;
`;

const ModeSwitchButton = ({ isDarkMode, setDarkMode }) => {
  const [isShow, setIsShow] = useState(true);

  const switchRef = useRef(null);
  const longpressTracker = useRef({});

  const getSafeArea = () => {
    const rootRef = getComputedStyle(document.getElementById("root"));
    const safeAreaValue = (direction) => {
      const propertyValue = rootRef.getPropertyValue(direction);
      if (propertyValue) {
        return parseInt(propertyValue);
      }
      return 0;
    };
    return {
      right: safeAreaValue("--safe-area-right"),
      left: safeAreaValue("--safe-area-left"),
      top: safeAreaValue("--safe-area-top"),
      bottom: safeAreaValue("--safe-area-bottom"),
    };
  };

  const initLongPressTracker = () => {
    clearTimeout(longpressTracker.current.longpressTimer);
    longpressTracker.current.startX = -1;
    longpressTracker.current.startY = -1;
  };

  const handleTouchStart = (e) => {
    const switchEl = switchRef?.current;
    if (switchEl) {
      switchEl.style.transition = "none";

      initLongPressTracker();
      longpressTracker.current.startX = e.touches[0].screenX;
      longpressTracker.current.startY = e.touches[0].screenY;
      longpressTracker.current.longpressTimer = setTimeout(() => {
        setIsShow(false);
      }, 1200);
    }
  };
  const handleTouchMove = (e) => {
    e.preventDefault();
    const switchEl = switchRef?.current;
    if (switchEl) {
      switchEl.style.left = `${e.touches[0].clientX - 30}px`;
      switchEl.style.top = `${e.touches[0].clientY - 30}px`;

      const diffX = Math.abs(
        longpressTracker.current.startX - e.touches[0].screenX
      );
      const diffY = Math.abs(
        longpressTracker.current.startY - e.touches[0].screenY
      );
      if (diffX > 30 || diffY > 30) {
        initLongPressTracker();
      }
    }
  };
  const handleTouchEnd = () => {
    const switchEl = switchRef?.current;
    if (switchEl) {
      initLongPressTracker();
      moveInsideSafeArea(switchEl);
      switchEl.style.transition = "0.2s ease-in-out";
    }
  };

  const moveInsideSafeArea = (switchEl) => {
    const {
      top: elTop,
      left: elLeft,
      bottom: elBottom,
      right: elRight,
    } = switchEl.getBoundingClientRect();

    const {
      top: safeAreaTop,
      left: safeAreaLeft,
      bottom: safeAreaBottom,
      right: safeAreaRight,
    } = getSafeArea();

    const SafeArea = {
      top: safeAreaTop,
      left: safeAreaLeft,
      bottom: window.innerHeight - safeAreaBottom,
      right: window.innerWidth - safeAreaRight,
    };

    if (elTop < SafeArea.top) {
      switchEl.style.top = `${SafeArea.top}px`;
    }
    if (elLeft < SafeArea.left) {
      switchEl.style.left = `${SafeArea.left}px`;
    }
    if (elBottom > SafeArea.bottom) {
      switchEl.style.top = `${SafeArea.bottom - 60}px`;
    }
    if (elRight > SafeArea.right) {
      switchEl.style.left = `${SafeArea.right - 60}px`;
    }
  };

  useEffect(() => {
    const switchEl = switchRef?.current;
    if (switchEl) {
      switchEl.addEventListener("touchstart", handleTouchStart);
      switchEl.addEventListener("touchmove", handleTouchMove);
      switchEl.addEventListener("touchend", handleTouchEnd);
    }
    return () => {
      switchEl.removeEventListener("touchstart", handleTouchStart);
      switchEl.removeEventListener("touchmove", handleTouchMove);
      switchEl.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <>
      {isShow && (
        <Wrapper ref={switchRef} onClick={() => setDarkMode(!isDarkMode)}>
          <Text>{isDarkMode ? "Dark" : "Light"}</Text>
        </Wrapper>
      )}
    </>
  );
};

export default ModeSwitchButton;
