import { toTitleCase } from "../../utils/utils";

export default function Button({
  text,
  icon,
  children,
  className,
  handleClick,
}: {
  text?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  handleClick: () => void;
}) {
  const capitalizedText = text && toTitleCase(text);
  return (
    <button
      className={className}
      onClick={(e) => {
        e.preventDefault();
        handleClick();
      }}
    >
      {text && <span className="btn-text">{capitalizedText}</span>}
      {icon && <span className="btn-icon">{icon}</span>}
      {children}
    </button>
  );
}
