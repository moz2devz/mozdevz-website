import styles from '../styles/Home.module.css'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        {/* Features */}
        <section className={styles.features}>
          {/* Feature Cards */}
          <aside className={styles.featureCards}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>É profissional de tecnologia?</h3>
              <p className={styles.cardText}>
                Com uma comunidade que ostenta uma interessante
                mistura de profissionais, sem duvidas o melhor
                sitio para fazer networking.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Pretende mudar de carreira para a tecnologia?</h3>
              <p className={styles.cardText}>
                Pretende mudar de carreira para tech? Parece assustador pois?
                Fazer parte da comunidade lhe possibilita mergulhar suavemente
                na sua carreira escolhida antes de dar o grande salto.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>É estudante de STEM?</h3>
              <p className={styles.cardText}>
                Temos constantemente veteranos da indústria
                e líderes que passam por aqui para ter conversas
                e discussões num ambiente informal e isto revela-se
                sempre um óptimo local para encontrar mentores.
              </p>
            </div>
          </aside>

          {/* Feature Header */}
          <aside className={styles.featureHeader}>
            <h2 className={styles.featureTitle}>Aprendemos em comunidade</h2>
            <p>
              Proporcionamos oportunidades de partilha de conhecimento e desenvolvimento de habilidades para a criação de produtos digitais a jovens durante o period de formação e contribuímos para o desenvolvimento da sociedade atraves das soluções desenvolvidas.
            </p>
          </aside>
        </section>

        {/* Comexão e Integração */}
        <section className={styles.programs}>
          <div className={styles.programHeader}></div>
          <div className={styles.programItems}>
            <aside className="programItem">
              <h3>Talentos</h3>
              <p>
                Capacitados e desenvolvemos talentos com o objective de preprarar e integrar no mercado de trabalho atraves da nossa rede de parceiros
              </p>
            </aside>
            <aside className="programItem">
              <h3>Startup</h3>
              <p>
                Apoiamos equipas multidisplinares com orientação e capacitação no desenvolvimento de soluções tecnológicas em ambientes de extrema incerteza.
              </p>
            </aside>
            <aside className="programItem">
              <h3>Corporate</h3>
              <p>
                Firmamos parceirias e trabalhamos com empresas e ONGs no desenvolvimento de soluções de base tecnológica para a resolução de problemas sociais.
              </p>
            </aside>
          </div>
        </section>

        {/* Team */}
        <section className={styles.teams}>
          <div className={styles.teamsHeader}></div>
          <div className={styles.teamsMembers}>
            <div className="teamMember">
              <h5>Igor L. Sambo</h5>
              <p>Presidente</p>
            </div>
            <div className="teamMember">
              <h5>Carrima Januario</h5>
              <p>Gestora de Projectos</p>
            </div>
            <div className="teamMember">
              <h5>Sabera Pedro</h5>
              <p>Vice-Presidente</p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}
