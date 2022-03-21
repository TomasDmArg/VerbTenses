import React from "react";
import Head from "next/head";
import { Navbar } from "../components/composed/navbar";
import { useRouter } from "next/router";
import { BgImg } from "../components/bgImg";
import { Title, Subtitle } from "../components/essential/text";
import { Card } from "../components/composed/tensecard";
import { articles } from "../constants/articles";
const Page = () => {
  const router = useRouter();
  const urlRoute = router.pathname;
  const [wereAnyClicked, setClicked] = React.useState(false);
  const urls = ["present-simple", "present-continuous", "past-simple", "future"]
  return (
    <React.Fragment>
      <Head>
        <title>Select the verb tense</title>
      </Head>
      <Navbar active={urlRoute} />
      <main className="main-select">
        <Title>Elige el tiempo verbal</Title>
        <Subtitle>Haz click en el tiempo verbal que quieres aprender</Subtitle>
        <section className="main-select__card-cont">
          {
            urls.map((url) => {
              let article = articles[url];
              let img = "/c" + article.image.split('/c')[1];
              return (
                <Card
                  key={url}
                  bgimg={img}
                  name={article.name}
                  desc={article.description}
                  url={`/tenses/${url}`}
                />
              )
            })
          }
        </section>
      </main>
      <BgImg src="/london.webp" nextPage={true} wereAnyClicked={wereAnyClicked} />
    </React.Fragment>
  );
};
export default Page;
