import { useId } from "react";

export default function Description() {
  const id = useId();
  return (
    <label htmlFor={id}>
      Description<textarea name="description" id={id}></textarea>
    </label>
  );
}
