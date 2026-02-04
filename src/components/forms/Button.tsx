import { toTitleCase } from "../../utils/utils";
import styles from "../../styles/Button.module.css";

export default function Button({
  text,
  icon,
  id = "",
  children,
  className,

  handleClick,
}: {
  text?: string;
  icon?: React.ReactNode;
  id?: string;
  children?: React.ReactNode;
  className?: string;

  handleClick: () => void;
}) {
  const capitalizedText = text && toTitleCase(text);

  return (
    <button
      className={className ?? styles.button}
      onClick={(e) => {
        e.preventDefault();
        handleClick();
      }}
      id={id}
    >
      {icon}
      {text && <span className="btn-text">{capitalizedText}</span>}
      {children}
    </button>
  );
}
