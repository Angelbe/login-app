import React, { useState } from "react";
import { useRouter } from "next/router";
import type { NextPage } from "next";
import Header from "src/components/Header";
import Footer from "src/components/Footer";
import Main from "src/components/Main";
import { PageStyled } from "../../styles/globalStyledComponents";
import HomeContent from "../../src/components/HomeContent";

const Login: NextPage = () => {
  const router = useRouter();
  const { location } = router.query;
  const [currentLocation, setCurrentLocation] = useState<string>(
    location as string
  );
  return (
    <PageStyled>
      <Header />
      <Main className="MainHome">
        <HomeContent
          currentLocation={currentLocation}
          setCurrentLocation={setCurrentLocation}
        />
      </Main>
      <Footer />
    </PageStyled>
  );
};

export default Login;
