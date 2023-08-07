import styles from "./Projects.module.css";
import signUp from "./signUpForm.png";
import groceryList from "./groceryList.png";
import soccerEbook from "./soccerEbook.png";

const Projects = () => {
  return (
    <div className={styles.app}>
      <h2>Projetos</h2>
      <div className={styles.projects}>
        <div className={styles.projectList}>
          <a href="https://rafaelbarcarol.github.io/signUpForm/">
            <img
              src={signUp}
              alt="print de tela de um formulário de cadastro"
            />
            <p>Formulário de Cadastro</p>
          </a>
          <a href="https://rafaelbarcarol.github.io/groceryList/">
            <img
              src={groceryList}
              alt="print de tela de um gerador de lista de supermercado"
            />
            <p>Lista de Compras</p>
          </a>
          <a href="https://rafaelbarcarol.github.io/soccerLandingPage/">
            <img
              src={soccerEbook}
              alt="print de tela de uma landing page de um e-book fictício de futebol"
            />
            <p>Landing Page - Ebook Futebol</p>
          </a>
        </div>
        <div className={styles.btn}>
          <a href="https://github.com/rafaelbarcarol">Ver mais Projetos</a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
