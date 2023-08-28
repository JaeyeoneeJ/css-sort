import React, { useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import mockData from "../libs/mockData";

const Wrapper = styled.div`
  width: 100%;
`;

const FlexWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: flex-start;
  align-content: flex-start;
  margin: 0;

  border: 3px solid green;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  gap: 10px;
`;

const Input = styled.input`
  padding: 4px 8px;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
`;

const Button = styled.button`
  width: 100px;
  border-radius: 5px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 8px;
  margin-bottom: 10px;
  box-sizing: border-box;

  /* border: 1px solid red; */

  width: ${({ widthprop }) => widthprop + "%"};
  /* width: 20%; */
`;
const ItemTitle = styled.h3`
  text-align: center;
  width: 88px;
`;
const ItemImg = styled.img`
  display: block;
  width: 68px;
  height: auto;
`;

const Flex = () => {
  const [data, setData] = useState([mockData]);
  const [inputCount, setInputCount] = useState(1);

  const wrapRef = useRef(null);
  const [wrapperWidth, setWrapperWidth] = useState(0);

  const calcWidth = useMemo(() => {
    const itemWidth = 88 + 16;
    let baseWidth;
    if (wrapperWidth !== 0) {
      baseWidth = wrapperWidth;
    } else {
      baseWidth = itemWidth;
    }

    const itemCount = Math.floor(baseWidth / itemWidth);
    const dataLength = data?.length;

    let calcItemWidthPer;
    if (dataLength <= 3) {
      calcItemWidthPer = 100 / 3;
    } else if (itemCount > dataLength) {
      calcItemWidthPer = 100 / dataLength;
    } else {
      calcItemWidthPer = 100 / itemCount;
    }

    console.log("-----------");

    return calcItemWidthPer;
  }, [wrapperWidth, data]);

  console.log("calcWidth", calcWidth);

  const onChangeHandler = (event) => {
    console.log(event.target.value);
    setInputCount(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const newData = [];
    for (let i = 0; i < inputCount; i++) {
      newData.push({ ...mockData });
    }
    setData(newData);
  };

  useEffect(() => {
    const resizeHandler = () => {
      if (wrapRef && wrapRef.current) {
        setWrapperWidth(
          Number(
            window.getComputedStyle(wrapRef.current)["width"].replace("px", "")
          )
        );
      }
    };
    resizeHandler();

    window.addEventListener("resize", resizeHandler);

    return () => window.removeEventListener("resize", resizeHandler);
  }, [wrapRef.current]);

  console.log("wrapperWidth", wrapperWidth);

  return (
    <Wrapper>
      <h1>Flex</h1>
      <Form onSubmit={onSubmitHandler}>
        <Input
          type="number"
          placeholder="보여질 컨텐츠의 숫자를 입력하세요."
          value={inputCount}
          onChange={onChangeHandler}
        />
        <Button>Click</Button>
      </Form>
      <ul>
        <li>Flex를 이용하여 컨텐츠 추가에 따른 정렬 로직 조정</li>
        <li>width 크기에 따라 보여지는 1줄에 보여지는 컨텐츠의 숫자 조정</li>
      </ul>
      <FlexWrapper ref={wrapRef}>
        {data.map((item, index) => (
          <Item key={index} widthprop={calcWidth}>
            <ItemImg src={item.img} />
            <ItemTitle>{item.title}</ItemTitle>
          </Item>
        ))}
      </FlexWrapper>
    </Wrapper>
  );
};

export default Flex;
