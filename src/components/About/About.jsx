import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.app}>
      <h2>Sobre</h2>
      <div className={styles.mainContent}>
        <p>
          Olá, sou o Rafael Barcarol! Atualmente em transição de carreira, estou
          migrando da área da Saúde para a área da Tecnologia.
        </p>
        <p>
          Estou no segundo semestre do curso de Tecnologia em Análise e
          Desenvolvimento de Sistemas. Além disso, também estou estudando e
          praticando Programação.
        </p>
        <p>
          Estou em busca de oportunidades profissionais para aprender, crescer,
          evoluir e contribuir!
        </p>
      </div>
    </div>
  );
};

export default About;
