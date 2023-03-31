import Head from "next/head";
import App from "../components/App/App";

export default function Home() {
  return (
    <>
      <Head>
        <title>gnNews</title>
        <meta name="description" content="Created by Filip Lizoń" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <App />
    </>
  );
}
