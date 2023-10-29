import styles from "./Button.module.css";

const Button = (params: any) => {
  const { label, className, onClick, loading = false } = params;
  return (
    <button
      type="button"
      className={`btn btn-primary btn-lg btn-block ${className}`}
      onClick={onClick}
      disabled={loading}
    >
      {loading ? (
        <span className="d-flex align-items-center justify-content-center">
          <div className={styles.spinner}></div>
          <span>Loading...</span>
        </span>
      ) : (
        <span>{label}</span>
      )}
    </button>
  );
};

export default Button;
