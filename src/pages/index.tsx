import type { NextPage } from "next";
import Head from "next/head";

import { Header } from "@/containers/Header";
import { Home } from "@/containers/Section/Home";
import { About } from "@/containers/Section/About";
import { Experience } from "@/containers/Section/Experience";
import { Portfolio } from "@/containers/Section/Portfolio";
import { Contact } from "@/containers/Section/Contact";
import { Footer } from "@/containers/Footer";

const pageSections = [
  { id: "home", title: "Home", Container: Home },
  { id: "about", title: "About Me", Container: About },
  { id: "experience", title: "Experience", Container: Experience },
  { id: "projects", title: "Portfolio", Container: Portfolio },
  { id: "contact", title: "Contact Me", Container: Contact },
];

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thiagosouza.com/" />
        <meta
          property="og:image"
          content="/assets/images/banner/thiagosouza-620x316.png"
        />
        <meta
          property="og:description"
          content="Hello, I'm Thiago Souza! You are welcome if you want to know more about me, my experience, portfolio, etc."
        />
        <meta
          property="og:site_name"
          content="Thiago Souza | Full Stack Developer"
        />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://thiagosouza.com/" />
        <meta
          name="twitter:title"
          content="Thiago Souza | Full Stack Developer"
        />
        <meta
          name="twitter:description"
          content="Hello, I'm Thiago Souza! You are welcome if you want to know more about me, my experience, portfolio, etc."
        />
        <meta
          name="twitter:image"
          content="/assets/images/banner/thiagosouza-620x316.png"
        />

        <meta
          name="keywords"
          content="Thiago, Souza, Flutter, React, Nodejs, Mobile, Developer, Front-end, Back-end"
        />
        <meta
          name="description"
          content="Hello, I'm Thiago Souza! You are welcome if you want to know more about me, my experience, portfolio, etc."
        />
        <title>Thiago Souza | Full Stack Developer</title>
      </Head>
      <>
        <Header
          navigation={pageSections.map((section) => ({
            id: section.id,
            title: section.title,
          }))}
        />
        {pageSections.map((section, index) => (
          <section.Container
            key={index}
            id={section.id}
            title={section.title}
          />
        ))}
        <Footer />
      </>
    </>
  );
};

export default Index;
