import { useId, useState } from "react";
import { camelToTitleCase } from "../../utils/utils.ts";
import "../../styles/Input.module.css";

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

  return (
    <label htmlFor={id}>
      <div>{label}</div>
      <input
        type={type}
        name={name}
        id={id}
        value={currentValue}
        onChange={(e) => handleChange(e)}
      />
    </label>
  );
}

export { Input };
export type { InputProps };
