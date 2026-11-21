import type { SupportCategory } from '../../types/support';
import styles from './SupportCard.module.css';

interface SupportCardProps {
  category: SupportCategory;
}

const SupportCard = ({ category }: SupportCardProps) => (
  <article className={styles.card}>
    <img
      className={styles.icon}
      src={category.iconSrc}
      alt=""
      width={40}
      height={40}
    />
    <h2 className={styles.title}>{category.title}</h2>
  </article>
);

export default SupportCard;
