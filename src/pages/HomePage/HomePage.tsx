import Button from '../../components/Button/Button';
import styles from './HomePage.module.css';

const HomePage = () => (
  <>
    <h1>Početna</h1>
    <div className={styles.actions}>
      <Button to="/moduli" fullWidth>
        Započni
      </Button>
      <Button to="/podrska" variant="secondary" fullWidth>
        Treba mi podrška
      </Button>
    </div>
  </>
);

export default HomePage;
