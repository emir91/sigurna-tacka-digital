import ModuleCard from '../../components/ModuleCard/ModuleCard';
import { modules } from '../../data/modules';
import styles from './ModulesPage.module.css';

const ModulesPage = () => (
  <section className={styles.page}>
    <h1 className={styles.heading}>Edukativni moduli</h1>
    <p className={styles.description}>
      Kratki video sadržaji za više znanja i sigurnosti.
    </p>
    <ul className={styles.grid}>
      {modules.map((module) => (
        <li className={styles.gridItem} key={module.id}>
          <ModuleCard module={module} />
        </li>
      ))}
    </ul>
  </section>
);

export default ModulesPage;
