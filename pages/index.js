import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Corona-Ampel App - Aktuelle Zahlen, Inzidenz, Impf-Fortschritt ...</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="/app-icon.png" rel="icon" type="image/png"></link>
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
