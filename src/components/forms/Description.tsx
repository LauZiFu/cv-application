import styles from "../../styles/Input.module.css";
import { useId } from "react";

export default function Description({
  onChange,
}: {
  onChange: (stateValue: string) => void;
}) {
  const id = useId();
  return (
    <div className={styles.field}>
      <label htmlFor={id}>
        <div className={styles.label}>Description</div>
        <textarea
          name="description"
          id={id}
          onChange={(e) => onChange(e.target.value)}
        ></textarea>
      </label>
    </div>
  );
}
