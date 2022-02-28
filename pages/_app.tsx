import React from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";
import { Provider } from "react-redux";
import "styles/globals.css";
import { store } from "src/store";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  </ThemeProvider>
);
export default MyApp;
