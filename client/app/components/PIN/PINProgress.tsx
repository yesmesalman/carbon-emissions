import styles from "./PINProgress.module.css";

type PINProgressProp = {
  completed: number;
};

const PINProgress = (props: PINProgressProp) => {
  const { completed } = props;

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.progress_outer}></div>
        <span className={styles.completed}>{completed}%</span>
      </div>
      <div className={styles.right}>
        <span className={styles.title}>PIN progress</span>
        <span className={styles.warning}>71% is required for PIN creation</span>
      </div>
    </div>
  );
};

export default PINProgress;
