import styles from '../styles/Home.module.css'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Mozdevz: A maior comunidade de devs em Moçambique</h1>
      <p>Lorem ipsum dolor sit amet.</p>
      <Footer />
    </div>
  )
}
