import Image from "next/image";

import styles from "../styles/About.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <h1>About this Project</h1>
      <p>
        Project created with Next.JS made for studies. <br />
        Feel free to download this project or send feedback
      </p>
      <Image
        src="/images/charizard.png"
        width="250"
        height="250"
        alt="Charizard"
        className={styles.image}
      />
    </div>
  );
}
