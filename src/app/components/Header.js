import Image from 'next/image';
import styles from '../styles/header.module.css';
import Profile from '../../../public/profile.png'
import Link from 'next/link';

const Header = ({ name }) => (
  <div>
      <nav className={styles.navegation}>
        <Link href="#ContactForm" className={styles.enlance}>Contacto</Link>
      </nav>
    <header className={styles.header}>
    <div className={styles.profile}>
      <Image src={Profile} alt="Profile Picture" width={100} height={100} className={styles.profileImage} />
      <h1 className={styles.title}>{name}</h1>
    </div>
  </header>
  </div>
);

export default Header;