import Button from '../../components/Button/Button';
import homeImageSrc from '../../assets/images/sigurna-tacka-home-image.png';
import styles from './HomePage.module.css';

const HomePage = () => (
  <section className={styles.homePage}>
    <h1 className={styles.heading}>
      <span>Sigurna tačka</span>
      <span className={styles.headingAccent}>Digital</span>
    </h1>
    <img
      src={homeImageSrc}
      alt=""
      className={styles.illustration}
    />
    <p className={styles.description}>
      Kratka edukacija, praktični savjeti i provjerene informacije za veću
      sigurnost.
    </p>
    <div className={styles.actions}>
      <Button to="/moduli" fullWidth>
        Započni
      </Button>
      <Button to="/podrska" variant="secondary" fullWidth>
        Treba mi podrška
      </Button>
    </div>
  </section>
);

export default HomePage;
