import React from "react";
import type { NextPage } from "next";
import Header from "src/components/Header";
import Footer from "src/components/Footer";
import Main from "src/components/Main";
import LoginForm from "src/components/LoginForm";
import { PageStyled } from "styles/globalStyledComponents";
import HeadApp from "src/components/HeadApp";

const Login: NextPage = () => (
  <PageStyled>
    <HeadApp />
    <Header />
    <Main className="MainLogin">
      <LoginForm />
    </Main>
    <Footer />
  </PageStyled>
);

export default Login;
