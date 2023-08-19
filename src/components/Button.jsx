import styles from "./Button.module.css";
import { useNavigate } from "react-router-dom";

function Button({ children, onClick, type }) {
  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </button>
  );
}

function BackButton() {
  const navigate = useNavigate();

  return (
    <Button
      type={"back"}
      onClick={(e) => {
        e.preventDefault();
        navigate(-1);
      }}
    >
      &larr; Back
    </Button>
  );
}

export { Button, BackButton };
