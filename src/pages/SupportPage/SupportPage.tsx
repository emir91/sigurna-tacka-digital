import SupportCard from '../../components/SupportCard/SupportCard';
import { supportCategories } from '../../data/supportCategories';
import styles from './SupportPage.module.css';

const SupportPage = () => (
  <section className={styles.page}>
    <h1 className={styles.heading}>Treba mi podrška</h1>
    <p className={styles.description}>
      Informacije o službama i organizacijama za podršku.
    </p>
    <ul className={styles.grid}>
      {supportCategories.map((category) => (
        <li className={styles.gridItem} key={category.id}>
          <SupportCard category={category} />
        </li>
      ))}
    </ul>
  </section>
);

export default SupportPage;
