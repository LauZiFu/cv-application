import type { JSX } from "react";
import style from "../../styles/Section.module.css";

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
    <section aria-labelledby={title + "-heading"} className={style.sectionCard}>
      <details open className="container">
        <summary className={style.sectionTitle}>
          <h2 id={title + "-heading"}>{title}</h2>
          {description && <small>{description}</small>}
        </summary>
        {fields}
      </details>
    </section>
  );
}
