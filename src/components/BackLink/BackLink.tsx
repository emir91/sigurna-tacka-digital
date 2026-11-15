import { Link } from 'react-router';
import styles from './BackLink.module.css';

const BackLink = () => (
  <Link to="/moduli" className={styles.backLink}>
    <svg
      className={styles.icon}
      viewBox="0 0 24 24"
      width="24"
      height="24"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M19 12H5M5 12l7 7M5 12l7-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    <span>Edukativni moduli</span>
  </Link>
);

export default BackLink;
