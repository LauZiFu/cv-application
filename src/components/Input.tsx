import { useState } from "react";

type InputType = string | number;

export default function Input({ name, label, type = "text" }) {
  const [value, setValue] = useState<InputType>();

  return (
    <label htmlFor={name}>
      {label}
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </label>
  );
}
