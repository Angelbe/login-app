import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import type { NextPage } from "next";
import Header from "src/components/Header";
import Footer from "src/components/Footer";
import Main from "src/components/Main";
import { PageStyled } from "../../styles/globalStyledComponents";
import HomeContent from "../../src/components/HomeContent";
import { useAppSelector } from "../../src/hooks";
import { selectUser } from "../../src/actions/user";
import { confirmLoggedin } from "../../src/helpers";

const Login: NextPage = () => {
  const router = useRouter();
  const user = useAppSelector(selectUser);

  useEffect(() => {
    const isLoggedIn = confirmLoggedin(user);
    if (!isLoggedIn) {
      router.push("/login?redirected=true");
    }
  }, []);

  const [currentLocation, setCurrentLocation] = useState<string>("dashboard");
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