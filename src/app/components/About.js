import styles from '../styles/about.module.css';

const About = ({ description }) => (
  <section className={styles.about}>
    <h2 className={styles.titulo}>Sobre mí</h2>
    <p className={styles.description}>{description}</p>
  </section>
);

export default About;
