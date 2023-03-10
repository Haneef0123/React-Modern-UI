import React from "react";
import { Article, Brand, CTA, Featute, NavBar } from "./components";
import {
  Blog,
  Footer,
  Header,
  Possibility,
  WhatGPT3,
  Features,
} from "./containers";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <NavBar className="gradient__text"/>
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
