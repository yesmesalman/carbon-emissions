import { useState } from "react";
import styles from "./FieldWarningAlert.module.css";
import { IoMdClose } from "react-icons/io";
import { PiWarningCircleBold } from "react-icons/pi";

type FieldWarningAlertProp = {
  text: string;
};

const FieldWarningAlert = (prop: FieldWarningAlertProp) => {
  const [show, setShow] = useState(true);
  const { text } = prop;

  if (!show) return null;

  return (
    <div className={styles.alert}>
      <div className={styles.warning_icon}>
        <PiWarningCircleBold />
      </div>
      <p className={styles.text}>{text}</p>
      <div className={styles.close_icon} onClick={() => setShow(false)}>
        <IoMdClose />
      </div>
    </div>
  );
};

export default FieldWarningAlert;
