import styles from "./HighlightedButtonRow.module.css";

type HighlightedButtonRowProp = {
  title: String;
  buttonText: String;
  onButtonPress: () => void;
};

const HighlightedButtonRow = (props: HighlightedButtonRowProp) => {
  const { title, buttonText } = props;
  return (
    <div className={styles.row}>
      <span className={styles.title}>{title}</span>
      <button type="button" className="btn btn-primary">
        {buttonText}
      </button>
    </div>
  );
};

export default HighlightedButtonRow;
