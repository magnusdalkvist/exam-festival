import "../styles/globals.css";
import App from "next/app";
import Layout from "../components/Layout.js";
import { useState } from "react";
import Head from "next/head";

function MyApp({ Component, pageProps, spotData, bandData }) {
  const [state, setState] = useState("close");
  return (
    <>
      <Head>
        <title>GREENMARK FESTIVAL</title>
        <meta name="description" content="GREENMARK FESTIVAL" />
        <link rel="icon" href="/gmfavicon.svg" />
      </Head>
      <Layout spotData={spotData} state={state} setState={(state) => setState(state)}>
        <Component {...pageProps} bandData={bandData} setState={(state) => setState(state)} />
      </Layout>
    </>
  );
}

export default MyApp;

MyApp.getInitialProps = async (appContext) => {
  // Provide the appContext, in order to do 404's
  const appProps = await App.getInitialProps(appContext);
  const res = await fetch("http://localhost:8080/available-spots/");
  const band = await fetch("http://localhost:8080/bands/");
  const bandData = await band.json();
  const spotData = await res.json();
  return { ...appProps, spotData, bandData };
};
