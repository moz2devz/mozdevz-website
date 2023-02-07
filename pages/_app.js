import '../styles/globals.css'
import { Hind } from '@next/font/google'

// If loading a variable font, you don't need to specify the font weight
const hindi = Hind({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
})

function MyApp({ Component, pageProps }) {
  return (
    <main className={hindi.className}>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
