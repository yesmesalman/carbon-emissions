import { GetProjectPINScreen, HttpRequest } from "@/helpers";
import styles from "./PINProgress.module.css";
import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const PINProgress = () => {
  const project_id = GetProjectPINScreen();
  const [steps, setSteps] = useState(0);

  useEffect(() => {
    if (project_id) {
      const request = HttpRequest("/api/project/check-pin-step", {
        project: project_id,
      });

      request
        .then((e) => e.json())
        .then((e) => {
          if (e?.data?.project_pin?.step) {
            setSteps(e?.data?.project_pin?.step);
          }
        });
    }
  }, [project_id]);

  const StepPercentage = (100 / 5) * steps;

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div style={{ width: 70, height: 70 }}>
          <CircularProgressbar
            value={StepPercentage}
            text={`${StepPercentage}%`}
            styles={buildStyles({
              pathColor: `#6a4a99`,
              textColor: "#6a4a99",
            })}
          />
        </div>
      </div>
      <div className={styles.right}>
        <span className={styles.title}>PIN progress</span>
        <span className={styles.warning}>70% is required for PIN creation</span>
      </div>
    </div>
  );
};

export default PINProgress;
