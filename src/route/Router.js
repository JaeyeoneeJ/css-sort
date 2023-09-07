import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../page/Home";
import Flex from "../page/Flex";
import Grid from "../page/Grid";
import Scroll from "../page/Scroll";

function Router() {
  console.log("ROUTER");
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/flex"} element={<Flex />} />
        <Route path={"/grid"} element={<Grid />} />
        <Route path={"/scroll"} element={<Scroll />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
