import React from "react";
import image from "../Bio/rmb.jpg";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import styles from "./Bio.module.css";

const socialNetworks = [
  {
    name: "linkedin",
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/rafael-barcarol/",
  },
  {
    name: "github",
    icon: <FaGithub />,
    link: "https://github.com/rafaelbarcarol",
  },
];

const Bio = () => {
  return (
    <div className={styles.app}>
      <div className={styles.mainContent}>
        <img src={image} alt="" />
        <h1>Rafael Barcarol</h1>
        <h2>Desenvolvedor</h2>
        <h2>Estudante</h2>
        <div className={styles.socialNetwork}>
          {socialNetworks.map((network) => (
            <a
              href={network.link}
              className="socialBtn"
              id={network.name}
              key={network.name}
            >
              {network.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bio;
