import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
      <meta
          property="og:title"
          content="Corona-Ampel App - Aktuelle Zahlen, Inzidenz, Impf-Fortschritt ..."
        />
        <meta
          property="og:site_name"
          content="Corona-Ampel App - Aktuelle Zahlen, Inzidenz, Impf-Fortschritt ..."
        />
        <meta property="og:url" content="https://corona-ampel.app" />
        <meta
          property="og:description"
          content="🚦 Alle Landkreise, Bundesländer im Überblick. Die neue Corona-Ampel App hat die wichtigsten Corona und Covid-19 Daten für ganz Deutschland in übersichtlicher Form!"
        />
        <meta
          property="og:image"
          content="https://corona-ampel.app/app-icon.png"
        />
        <meta
          property="og:image:secure_url"
          content="https://corona-ampel.app/app-icon.png"
        />
        <meta property="og:image:width" content="310" />
        <meta property="og:image:height" content="310" />

        <meta
          name="twitter:image"
          content="https://corona-ampel.app/app-icon.png"
        />
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <title>
          Corona-Ampel App - Aktuelle Zahlen, Inzidenz, Impf-Fortschritt ...
        </title>
        <link rel="icon" href="https://corona-ampel.app/favicon.ico" />
        <link rel="icon" href="https://corona-ampel.app/app-icon.png" />
        <link
          href="https://corona-ampel.app/app-icon.png"
          rel="icon"
          type="image/png"
        ></link>
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="de_DE" />
        <meta name="theme-color" content="#292F36" />
        <meta
          name="keywords"
          content="Inzidenz, Ampel, Corona, Coburg, aktuell, Zahlen, Fall, Fälle, Bamberg, Schweinfurt, Warnung, Info"
        />
        <meta name="author" content="Andre Bellmann" />
        <meta
          name="description"
          content="🚦 Alle Landkreise, Bundesländer im Überblick. Die neue Corona-Ampel App hat die wichtigsten Corona und Covid-19 Daten für ganz Deutschland in übersichtlicher Form!"
        />
        <meta name="”twitter:creator”" value="”@ingomc”" />
      </Head>

      <main className={styles.main}>
        <img src="/app-icon.png" className={styles.logo} />
        <h1 className={styles.title}>Corona-Ampel für Android und iOS</h1>
        <h2>Coming soon ...</h2>
      </main>
    </div>
  );
}
