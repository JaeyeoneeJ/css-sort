import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  border-radius: 10px;
  border: 1px solid gray;
  margin-right: 10px;
`;

const Home = () => {
  return (
    <div>
      <h1>CSS-Sort</h1>
      <Link to={"/flex"}>
        <Button>Flex</Button>
      </Link>
      <Link to={"/grid"}>
        <Button>Grid</Button>
      </Link>
    </div>
  );
};

export default Home;
