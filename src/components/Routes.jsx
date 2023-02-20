import React from "react";
import { BrowserRouter, Routes as ReactRoutes, Route } from "react-router-dom";
import Intro from "./Intro";
import Questions from "./Questions";

export default function Routes() {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route path="/" element={<Intro />}></Route>
        <Route path="/questions" element={<Questions />}></Route>
      </ReactRoutes>
    </BrowserRouter>
  );
}
