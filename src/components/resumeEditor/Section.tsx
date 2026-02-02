import type { JSX } from "react";

export default function Section({
  title,
  fields,
  description = "",
}: {
  title: string;
  fields: JSX.Element;
  description?: string;
}) {
  return (
    <section aria-labelledby={title + "-heading"}>
      <h2 id={title + "-heading"}>{title}</h2>
      {description ?? <p>{description}</p>}
      {fields}
    </section>
  );
}
