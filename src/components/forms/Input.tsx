import { useId, useState } from "react";
import { camelToTitleCase } from "../../utils/utils.ts";
import styles from "../../styles/Input.module.css";
import CustomPickerDate from "./CustomDatePicker.tsx";
import "react-datepicker/dist/react-datepicker.css";

interface InputProps {
  name: string;
  type?: string;
  value?: string | number;
  onChange?: (stateValue: string) => void;
}

function Input({ name, value, onChange, type = "text" }: InputProps) {
  const [localValue, setLocalValue] = useState("");
  const id = useId();

  const label = camelToTitleCase(name);
  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : localValue;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const next = e.target.value;
    if (!isControlled) {
      setLocalValue(next);
    }
    onChange?.(next);
  };
  let inputField;

  switch (type) {
    case "month":
      inputField = (
        <CustomPickerDate
          id={id}
          name={name}
          type="month"
          onChange={(date) => onChange?.(date)}
        />
      );
      break;
    case "date":
      inputField = (
        <CustomPickerDate
          id={id}
          name={name}
          type="date"
          onChange={(date) => onChange?.(date)}
        />
      );
      break;
    default:
      inputField = (
        <input
          type={type}
          name={name}
          id={id}
          value={currentValue}
          onChange={(e) => handleChange(e)}
        />
      );
  }
  return (
    <div className={styles.field}>
      <label htmlFor={id}>
        <div className={styles.label}>{label}</div>
        {inputField}
      </label>
    </div>
  );
}

export { Input };
export type { InputProps };
