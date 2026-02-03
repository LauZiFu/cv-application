import { useId } from "react";

export default function Description({
  onChange,
}: {
  onChange: (stateValue: string) => void;
}) {
  const id = useId();
  return (
    <label htmlFor={id}>
      Description
      <textarea
        name="description"
        id={id}
        onChange={(e) => onChange(e.target.value)}
      ></textarea>
    </label>
  );
}
