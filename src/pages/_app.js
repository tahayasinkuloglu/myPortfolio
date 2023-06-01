import Footer from '@/components/Footer'
import '@/styles/globals.css'
//font dosyasını içeri çektik
import {Montserrat} from 'next/font/google'
import Head from 'next/head'
import NavBar from 'src/components/NavBar.js'

//nedenini sor, subsets ve variable ne anlam taşıyor bu kodu neden yazdık mantığı nedir
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont'
})


export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* sanırım burada font'u tüm main kısmına uyguladık */}
      <main className={`${montserrat.variable} font-mont bg-light w-full min-h-screen`}>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
}
