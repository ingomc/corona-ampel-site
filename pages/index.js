import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Corona-Ampel App - Aktuelle Zahlen, Inzidenz, Impf-Fortschritt ...</title>
        <meta name="description" content="Alle Landkreise, Bundesländer im Überblick. Die neue Corona-Ampel App hat die wichtigsten Corona und Covid-19 Daten für ganz Deutschland in übersichtlicher Form!" />
        <meta property="og:title" content="Corona-Ampel App - Aktuelle Zahlen, Inzidenz, Impf-Fortschritt ..." />
        <meta property="og:url" content="https://corona-ampel.app" />
        <meta property="og:description" content="Alle Landkreise, Bundesländer im Überblick. Die neue Corona-Ampel App hat die wichtigsten Corona und Covid-19 Daten für ganz Deutschland in übersichtlicher Form!" />
        <meta property="og:image" content="https://corona-ampel.app/app-icon.png" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://corona-ampel.app/app-icon.png" rel="icon" type="image/png"></link>
      </Head>

      <main className={styles.main}>
        <img src="/app-icon.png" className={styles.logo} />
        <h1 className={styles.title}>
          Corona-Ampel für Android und iOS
        </h1>
        <h2>Coming soon ...</h2>
      </main>
    </div>
  )
}
