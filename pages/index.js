import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Manuel Saavedra</title>
        <meta name="description" content="Bienvenido a mi humilde espacio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Hola este sera mi portafolio</h1>
      </main>
    </div>
  )
}
