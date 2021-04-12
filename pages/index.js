import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Categories from '../components/storefront/categories'

export default function Home() {
  return (
   
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/css/react-phone-number-input/style.css"/>
      </Head>
      <Categories/>
     </div>
  )
}
