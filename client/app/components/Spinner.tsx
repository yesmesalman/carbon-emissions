import styles from "./Spinner.module.css";

type SpinnerProp = {
  size?: number;
  borderWidth?: number;
};

const Spinner = ({ size, borderWidth }: SpinnerProp) => {
  return (
    <div
      className={styles.spinner}
      style={{
        height: size || undefined,
        width: size || undefined,
        borderWidth: borderWidth || undefined,
      }}
    ></div>
  );
};

export default Spinner;
