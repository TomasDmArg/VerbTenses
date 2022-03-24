import React from "react";
import { useRouter } from "next/router";
import { articles } from "../../constants/articles";
import Head from "next/head";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";
import { Navbar } from "../../components/composed/navbar";
import { IoExtensionPuzzle, IoTime } from "react-icons/io5";
import { WhatsappShareButton, WhatsappIcon, TelegramShareButton, TelegramIcon, FacebookMessengerShareButton, FacebookMessengerIcon, TwitterShareButton, TwitterIcon, FacebookIcon, FacebookShareButton } from "react-share";
const Page = () => {
  const router = useRouter();
  let urlRoute;
  const [data, setData] = React.useState(false);
  React.useEffect(() => {
    if (!router.isReady) return;
    urlRoute = router.query.id;
    if (!articles[urlRoute]) router.push("/404");
    setData(articles[urlRoute]);
  }, [router.isReady && router.query.id]);
  // Image = cardX.svg -> bg = cardX-bg.svg (add bg between card and .svg)
  let bg = (data) ? data.image.replace(".svg", "-bg.svg") : "";
  let route = data ? `/tenses/${router.query.id}` : "/";
  let url = data ? `https://vt.tmdm.com.ar/tenses/${router.query.id}` : "/";
  console.log(route);
  return (
    <React.Fragment>
      <Head>
        <title>{(data) ? data.content.title : "cargando..."}</title>
      </Head>
      <Navbar active={route} />
      <main className="main-article">
        {(data) ? (
          <React.Fragment>
            <main className="main-article">
              <section className="main-article__go-back">
                <Link href="/select">
                  <a className="main-article__go-back--link">
                    <IoArrowBack stroke="#171717" />
                    Volver
                  </a>
                </Link>
              </section>
              <section className="main-article__header" style={{ backgroundImage: `url(${bg})` }}>
                <h1 className="main-article__header--title">
                  {data.content.title}
                </h1>
                <p className="main-article__header--subtitle">
                  By: {data.content.by}
                </p>
              </section>
              <section className="main-article__stats">
                <p className="main-article__stats--text">
                  <IoExtensionPuzzle fill="#171717" /> {data.content.dificulty}
                  <IoTime fill="#171717" /> {data.content.minutes_to_read + "'"}
                  <br class="only-mobile" />
                  <b>Compartir:</b>
                  <WhatsappShareButton url={url}>
                    <WhatsappIcon type="button" size={25} round={true} />
                  </WhatsappShareButton>
                  <TelegramShareButton url={url}>
                    <TelegramIcon type="button" size={25} round={true} />
                  </TelegramShareButton>
                  <FacebookMessengerShareButton url={url}>
                    <FacebookMessengerIcon type="button" size={25} round={true} />
                  </FacebookMessengerShareButton>
                  <TwitterShareButton url={url}>
                    <TwitterIcon type="button" size={25} round={true} />
                  </TwitterShareButton>
                  <FacebookShareButton url={url}>
                    <FacebookIcon type="button" size={25} round={true} />
                  </FacebookShareButton>
                </p>
              </section>
              <section className="main-article__content">
                <p className="main-article__content--text">
                  {data.content.introduction.split('\n').map((item, key) => {
                    return (
                      <p key={key}>
                        {(item.includes("/")) ? (
                          <b>
                            {item.replace("/", "")}
                          </b>
                        ) : (
                          item
                        )}
                        <br />
                      </p>
                    );
                  })}
                </p>
                {
                  (data.content.form.length > 0) ? (
                    <h2 className="main-article__content--subtitle">Form</h2>
                  ) : (<></>)
                }
                <table className="main-article__content--table">
                  {data.content.form.map((item, index) => {
                    return (
                      (index == 0) ? (
                        <tr key={index}>
                          <th>{item[0]}</th>
                          <th>{item[1]}</th>
                        </tr>) : (
                        <tr key={index}>
                          <td>{item[0]}</td>
                          <td>{item[1]}</td>
                        </tr>)
                    );
                  })}
                </table>
                <h2 className="main-article__content--subtitle">Estructura</h2>
                {
                  data.content.structure.map((item, index) => {
                    return (
                      <p key={index}>
                        {item.map((item, index) => {
                          return (
                            <p key={index}>
                              {
                                (item.includes("#")) ? (
                                  <p className="main-article__content--example">
                                    {item.replace("#", "")}
                                  </p>
                                ) : (
                                  <p>
                                    {(item.includes("\n") ? (
                                      <React.Fragment>
                                        <br />
                                        {item.replace("/", "").split('\n').map((item, key) => {
                                          return (
                                            <p key={key}>
                                              {(key == 0) ? <b>{item}</b> : item}
                                              <br />
                                            </p>
                                          );
                                        })}
                                        <br />
                                      </React.Fragment>) : (
                                      <React.Fragment>
                                        {item}
                                      </React.Fragment>
                                    ))}
                                  </p>
                                )
                              }
                            </p>
                          );
                        })}
                      </p>
                    );
                  })
                }
                {
                  (data.content.moreuses.length > 0) ? (
                    <h2 className="main-article__content--subtitle">Mas usos:</h2>
                  ) : (<></>)
                }
                {
                  data.content.moreuses.map((item, index) => {
                    return (
                      <p key={index}>
                        <br />
                        <b>{item[0] + ":"}</b>
                        <br />
                        {item[1].split('\n').map((item, key) => {
                          return (
                            <p key={key}>
                              {item}
                              <br />
                            </p>
                          );
                        })}
                      </p>
                    );
                  })
                }
              </section>
            </main>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <h1>Cargando...</h1>
          </React.Fragment>
        )}
      </main>
    </React.Fragment>
  );
}
export default Page;