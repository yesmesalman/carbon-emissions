import { GetProjectPINScreen } from "@/helpers";
import styles from "./PINProgress.module.css";
import { useEffect } from "react";

type PINProgressProp = {
  completed: number;
};

const PINProgress = (props: PINProgressProp) => {
  const { completed } = props;
  const project_id = GetProjectPINScreen();

  useEffect(() => {
    if (project_id) {
      console.log("project_id", project_id)
    }
  }, [project_id])

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
