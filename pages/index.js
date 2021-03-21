import Head from "next/head";
import Image from "next/image";
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
          content="https://corona-ampel.app/playstore-icon.png"
        />
        <meta
          property="og:image:secure_url"
          content="https://corona-ampel.app/playstore-icon.png"
        />
        <meta property="og:image:width" content="310" />
        <meta property="og:image:height" content="310" />

        <meta
          name="twitter:image"
          content="https://corona-ampel.app/playstore-icon.png"
        />
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <title>
          Corona-Ampel App - Aktuelle Zahlen, Inzidenz, Impf-Fortschritt ...
        </title>
        <link rel="icon" href="https://corona-ampel.app/favicon.ico" />
        <link rel="icon" href="https://corona-ampel.app/playstore-icon.png" />
        <link
          href="https://corona-ampel.app/playstore-icon.png"
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
        <div className={styles.logo}>
          <Image
            width="120"
            height="120"
            src="/playstore-icon.png"
            alt="Logo"
          />
        </div>
        <h1 className={styles.title}>Inzidenz-Ampel für Android</h1>
        <a
          className={styles.playstorelogo}
          href="https://play.google.com/store/apps/details?id=com.ingomc.inzidenzampel&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
        >
          <img
            width="50%"
            alt="Jetzt bei Google Play"
            src="https://play.google.com/intl/en_us/badges/static/images/badges/de_badge_web_generic.png"
          />
        </a>
        <div class="hinweis">
          <p>
            <small>
              Die Playstore-Entwicklerrichtlinien verbieten es mir meine App als
              Corona-Ampel zu veröffentlichen, deshalb gibt es jetzt die
              Inzidenz-Ampel.
            </small>
          </p>
          <p>
            <small>
              Google Play und das Google Play-Logo sind Marken von Google LLC.
            </small>
          </p>
        </div>
        <p>
          <small>
            <a href="/datenschutz">Datenschutz / Impressum</a>
          </small>
        </p>
      </main>
    </div>
  );
}
