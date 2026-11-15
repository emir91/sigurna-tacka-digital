import { Link, useParams } from 'react-router';
import BackLink from '../../components/BackLink/BackLink';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import { modules } from '../../data/modules';
import styles from './ModulePage.module.css';

const ModulePage = () => {
  const { slug } = useParams();
  const module = modules.find((item) => item.slug === slug);

  if (!module) {
    return (
      <section className={styles.notFound}>
        <h1 className={styles.title}>Modul nije pronađen</h1>
        <Link className={styles.returnLink} to="/moduli">
          Povratak na edukativne module
        </Link>
      </section>
    );
  }

  const progressPosition =
    modules.findIndex((item) => item.slug === module.slug) + 1;

  return (
    <section className={styles.page}>
      <BackLink />
      <div className={styles.headingGroup}>
        <h1 className={styles.title}>{module.title}</h1>
        <p className={styles.progress}>
          Modul {progressPosition} od {modules.length}
        </p>
      </div>
      <VideoPlayer
        key={module.slug}
        title={module.title}
        videoUrl={module.videoUrl}
        posterSrc={module.posterSrc}
      />
      {module.description && (
        <p className={styles.description}>{module.description}</p>
      )}
    </section>
  );
};

export default ModulePage;
