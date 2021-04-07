import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Categories from '../components/storefront/categories'

export default function Home() {
  return (
   
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Categories/>
     </div>
  )
}
