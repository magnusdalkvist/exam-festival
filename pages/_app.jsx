import "../styles/globals.css";
import App from "next/app";
import Layout from "../components/Layout.js";
import { NextUIProvider } from "@nextui-org/react";

function MyApp({ Component, pageProps, spotData }) {
  return (
    <Layout spotData={spotData}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

MyApp.getInitialProps = async (appContext) => {
  // Provide the appContext, in order to do 404's
  const appProps = await App.getInitialProps(appContext);
  const res = await fetch("http://localhost:8080/available-spots/");
  const spotData = await res.json();
  return { ...appProps, spotData };
};
