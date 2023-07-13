import Link from 'next/link'
import Head from 'next/head'
import { Footer, Header } from '@/components'

const contact = () => {
  return (
    <div>
      <Head>
        <title>Amerisco Contact</title>
      </Head>
      <main>
        <Header />
      <h1>CONTACT PAGE</h1>
        <h2>
      <Link href={'/'}>Home</Link>
        </h2>
        <Footer />
        </main>
    </div>
  )
}

export default contact
