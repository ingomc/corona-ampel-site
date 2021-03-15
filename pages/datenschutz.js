import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Datenschutz.module.css";

export default function Datenschutz() {
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
        <meta name="robots" content="noindex, nofollow"></meta>
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
        <div className={styles.logo}>
          <Image width="120" height="120" src="/app-icon.png" alt="Logo" />
        </div>
        <h1 className={styles.title}>Datenschutz - Corona-Ampel Website & Inzidenz-Ampel App</h1>
        <p>
          Die Nutzung unserer Webseite/App ist in der Regel ohne Angabe
          personenbezogener Daten möglich. Nur teile der IP Adresse, niemals die
          komplette IP-Adresse wird zu Trackingzwecken gebraucht. Soweit auf unseren Seiten
          personenbezogene Daten (beispielsweise Name, Anschrift oder
          eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets
          auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche
          Zustimmung nicht an Dritte weitergegeben. Wir weisen darauf hin, dass
          die Datenübertragung im Internet (z.B. bei der Kommunikation per
          E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der
          Daten vor dem Zugriff durch Dritte ist nicht möglich. Der Nutzung von
          im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch
          Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung
          und Informationsmaterialien wird hiermit ausdrücklich widersprochen.
          Die Betreiber der Seiten behalten sich ausdrücklich rechtliche
          Schritte im Falle der unverlangten Zusendung von Werbeinformationen,
          etwa durch Spam-Mails, vor.
        </p>
        <p>
          Wir verwenden keine Cookies, mit denen der Benutzer identifiziert
          werden könnte. Wir verwenden auch keine anderen Tracking-Technologien
          wie Pixel oder Fingerabdrücke.
        </p>
        <h2>Wie speichern wir Ihre persönlichen Daten</h2>
        <p>
          <ul>
            <li>IP-Adresse mit verschleiertem letzten Oktett</li>
            <li>
              User Agent ohne eindeutige und möglicherweise identifizierbare
              Teile{" "}
            </li>
            <li>
              Nur App: Favorisierte Liste der Landkreise wird anonym, nur auf
              dem Gerät gespeichert
            </li>
            <li>
              Ein Standort kann auf klick ermittelt werden, wird aber nie
              gespeichert
            </li>
          </ul>
        </p>
        <h2>Nutzung von Diensten Dritter</h2>
        <p>
          Google Admob Die kostenlose Version der App benutzt den Dienst Google
          Admob, um Werbeanzeigen einzublenden. Anzeigen werden basierend auf
          dem von Ihnen verwendeten Gerät personalisiert.
        </p>
        <p>
          Auf Geräten mit dem Betriebssystem iOS wird die Werbe-ID von Apple
          verwendet. Weitere Informationen zum Anzeigen-Tracking mithilfe dieser
          Werbe-ID finden Sie auf Ihrem Gerät in der App "Einstellungen".
        </p>
        <p>
          Der Google Admob Dienst wird von der Firma Google (Google Inc., 1600
          Amphitheatre Parkway Mountain View, CA 94043, USA) bereitgestellt.
          Google ist unter dem Privacy-Shield-Abkommen zertifiziert und bietet
          hierdurch eine Garantie, das europäische Datenschutzrecht einzuhalten
          (
          <a href="https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active">
            https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active
          </a>
          ).
        </p>
        <p>
          Allgemeine Informationen zum Umgang mit Nutzerdaten finden Sie in der
          Datenschutzerklärung von Google: &nbsp;
          <a href="https://www.google.de/intl/de/policies/privacy/">
            https://www.google.de/intl/de/policies/privacy/
          </a>
        </p>
        <h2>Änderung der Datenschutzerklärung</h2>
        <p>
        Im Zuge der Weiterentwicklung der App und der Implementierung neuer Funktionen können Änderungen dieser Datenschutzerklärung erforderlich werden. Daher empfehlen wir Ihnen, sich diese Datenschutzerklärung regelmäßig durchzulesen.
        </p>
        <h2>Verantwortlicher</h2>
        <p>
            Andre Bellmann
            Karlstr. 7
            96450 Coburg
            Deutschland
            info@corona-ampel.app
        </p>
      </main>
    </div>
  );
}
