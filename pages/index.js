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
            <p className={styles.featureText}>
              Proporcionamos oportunidades de partilha de conhecimento e desenvolvimento de habilidades para a criação de produtos digitais a jovens durante o period de formação e contribuímos para o desenvolvimento da sociedade atraves das soluções desenvolvidas.
            </p>
            <a href="#" className={styles.featureBtn}>Saiba mais</a>
          </aside>
        </section>

        {/* Join the community */}
        <section className={styles.join}>
          <h2 className={styles.joinTitle}>Queres fazer parte da comunidade?</h2>
          <div className={styles.joinBtns}>
            <a href="#" className={styles.joinCommunity}>Seja membro</a>
            <a href="#" className={styles.attendMeetup}>Seja membro</a>
          </div>
        </section>

        {/* Comexão e Integração */}
        <section className={styles.programs}>
          <div className={styles.programHeader}></div>
          <div className={styles.programItems}>
            <aside className={styles.item}>
              <h3 className={styles.itemTitle}>Talentos</h3>
              <p className={styles.itemText}>
                Capacitados e desenvolvemos talentos com o objective de preprarar e integrar no mercado de trabalho atraves da nossa rede de parceiros
              </p>
            </aside>
            <aside className={styles.item}>
              <h3 className={styles.itemTitle}>Startup</h3>
              <p className={styles.itemText}>
                Apoiamos equipas multidisplinares com orientação e capacitação no desenvolvimento de soluções tecnológicas em ambientes de extrema incerteza.
              </p>
            </aside>
            <aside className={styles.item}>
              <h3 className={styles.itemTitle}>Corporate</h3>
              <p className={styles.itemText}>
                Firmamos parceirias e trabalhamos com empresas e ONGs no desenvolvimento de soluções de base tecnológica para a resolução de problemas sociais.
              </p>
            </aside>
          </div>
        </section>

        {/* Team */}
        <section className={styles.teams}>
          <div className={styles.teamsHeader}></div>
          <div className={styles.teamsMembers}>
            <div className={styles.member}>
              <h5 className={styles.memberName}>Igor L. Sambo</h5>
              <p className={styles.memberRole}>Presidente</p>
            </div>
            <div className={styles.member}>
              <h5 className={styles.memberName}>Carrima Januario</h5>
              <p className={styles.memberRole}>Gestora de Projectos</p>
            </div>
            <div className={styles.member}>
              <h5 className={styles.memberName}>Sabera Pedro</h5>
              <p className={styles.memberRole}>Vice-Presidente</p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}
