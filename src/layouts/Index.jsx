import React from "react";
import MainContextContainer from "../contexts/MainContext";
import Header from "./header/Header";
import Content from "../pages/Content";
import Footer from "./footer/Footer";

function Index() {
  return (
    <MainContextContainer>
      <Header />
      <Content />
      <Footer />
    </MainContextContainer>
  );
}

export default Index;
