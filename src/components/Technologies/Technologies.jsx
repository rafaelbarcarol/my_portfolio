import styles from "./Technologies.module.css";
import { DiHtml5, DiCss3, DiJsBadge, DiReact } from "react-icons/di";

const technologies = [
  { id: "html", name: "HTML", icon: <DiHtml5 /> },
  { id: "css", name: "CSS", icon: <DiCss3 /> },
  { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
  { id: "react", name: "React", icon: <DiReact /> },
];

const Technologies = () => {
  return (
    <div className={styles.app}>
      <div className="technologies">
        <h2>Tecnologias</h2>
        <div className={styles.techCards}>
          {technologies.map((tech) => (
            <div className={styles.techCard} id={tech.id} key={tech.id}>
              {tech.icon}
              <div className="technology-info">
                <h3>{tech.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
