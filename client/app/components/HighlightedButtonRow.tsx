import styles from "./HighlightedButtonRow.module.css";

type HighlightedButtonRowProp = {
  title: String;
  buttonText: String;
  onButtonPress: () => void;
  style?: boolean;
};

const HighlightedButtonRow = (props: HighlightedButtonRowProp) => {
  const { title, buttonText, onButtonPress, style } = props;
  return (
    <div>
      <div className={`${styles.row} ${style ? styles.row_style : ""}`}>
        <span className={`${styles.title} ${style ? styles.title_style : ""}`}>{title}</span>
        <button
          type="button"
          className="btn btn-primary"
          onClick={onButtonPress}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default HighlightedButtonRow;
