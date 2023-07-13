import Link from 'next/link'
import Head from 'next/head'
import {Footer, Header} from '@/components'

const about = () => {
  return (
    <>

    <Head>
      <title>Amerisco About</title>
    </Head>

    <main>
      <Header/>
    <h1>ABOUT PAGE</h1>
    <h2>
        <Link href={'/'}>Home</Link>
    </h2>
    <Footer />
    </main>
    </>
  )
}

export default about
