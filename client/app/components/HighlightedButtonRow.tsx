import styles from "./HighlightedButtonRow.module.css";

type HighlightedButtonRowProp = {
  title: String;
  buttonText: String;
  onButtonPress: () => void;
};

const HighlightedButtonRow = (props: HighlightedButtonRowProp) => {
  const { title, buttonText, onButtonPress } = props;
  return (
    <div>
      <div className={styles.row}>
        <span className={styles.title}>{title}</span>
        <button type="button" className="btn btn-primary" onClick={onButtonPress}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default HighlightedButtonRow;
