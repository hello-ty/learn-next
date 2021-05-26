import Head from 'next/head'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Main } from '../components/main'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>AboutPage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <Main page="about" />

      <Footer />
    </div>
  )
}
