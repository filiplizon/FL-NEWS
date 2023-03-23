import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import App from "./App";

const inter = Inter({ subsets: ["latin"] });

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
