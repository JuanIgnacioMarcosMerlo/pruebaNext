import styles from '../styles/interests.module.css';

const Interests = ({ interests }) => (
  <section className={styles.interests}>
    <h2 className={styles.title}>Intereses</h2>
    <ul className={styles.list}>
      {interests.map((interest, index) => (
        <li key={index} className={styles.listItems}>{interest}</li>
      ))}
    </ul>
  </section>
);

export default Interests;