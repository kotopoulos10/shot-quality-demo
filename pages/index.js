import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Shot Quality Demo | Homepage</title>
        <meta name="description" content="Shot Quality | Homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Tom Kotopoulos' <a href="https://shotquality.com">Shot Quality</a> Demo!
        </h1>

        <p className={styles.description}>
          Thanks for taking the time to look at this demo! Browse the pages below to see how I've explored Shot Quality data!
        </p>

        <div className={styles.grid}>
          <a href="/teams" className={styles.card}>
            <h2>Teams &rarr;</h2>
            <p>Recreating the teams table using NBA data.</p>
          </a>

          <a href="/game" className={styles.card}>
            <h2>Games &rarr;</h2>
            <p>Take a deep dive by using Heat vs. Celtics ECF data.</p>
          </a>

          <a
            href="/about"
            className={styles.card}
          >
            <h2>About &rarr;</h2>
            <p>Learn more about Tom and some of the projects he has worked on.
            </p>
          </a>

          <a
            href="/404"
            className={styles.card}
          >
            <h2>404 &rarr;</h2>
            <p>
              Static 404 page used to learn about NextJS features 
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
