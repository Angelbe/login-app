import React from "react";
import type { NextPage } from "next";
import styled from "styled-components";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Body from "../src/components/Main";

const Title = styled.div`
  min-height: 100vh;
  display: grid;
`;

const Home: NextPage = () => (
  <Title>
    <Header />
    <Body />
    <Footer />
  </Title>
);

export default Home;
