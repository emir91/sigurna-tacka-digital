import { Link } from 'react-router';
import type { Module } from '../../types/module';
import styles from './ModuleCard.module.css';

interface ModuleCardProps {
  module: Module;
}

const ModuleCard = ({ module }: ModuleCardProps) => (
  <Link
    to={`/moduli/${module.slug}`}
    className={styles.card}
    aria-label={`Modul ${module.id}: ${module.title}`}
  >
    <span className={styles.number}>{module.id}</span>
    <img
      className={styles.icon}
      src={module.iconSrc}
      alt=""
      width={40}
      height={40}
    />
    <h2 className={styles.title}>{module.title}</h2>
  </Link>
);

export default ModuleCard;
