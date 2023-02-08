import '../styles/globals.css'
import { Hind, Raleway } from '@next/font/google'

const hind = Hind({
  variable: '--hind-font',
  weight: ['400'],
  subsets: ['latin'],
})

const raleway = Raleway({
  variable: '--raleway-font',
  weight: ['600', '700'],
  subsets: ['latin'],
})

function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        :root {
          /* ... */
          --hind-font: ${hind.style.fontFamily};
          --raleway-font: ${raleway.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
