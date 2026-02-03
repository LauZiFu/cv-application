import { useState } from "react";
import styles from "../styles/Accordion.module.css";

interface AccordionProps {
  open: boolean;
  content: React.ReactNode;
  control?: React.ReactNode;
  description?: string;
}

export default function Accordion({
  title,
  content,
  control,
  description = "",
}: {
  title: React.ReactNode;
  content: React.ReactNode;
  control?: React.ReactNode;
  description?: string;
}) {
  const [open, setOpen] = useState(true);

  return (
    <section className={styles.container}>
      <button
        className={`${styles.accordion} ${open ? styles.open : ""}`}
        onClick={(e) => {
          e.preventDefault();
          setOpen(!open);
        }}
      >
        {title}
      </button>
      <Panel
        open={open}
        content={content}
        description={description}
        control={control}
      />
    </section>
  );
}

function Panel({ open, content, control, description = "" }: AccordionProps) {
  return (
    <div className={`${styles.panel} ${open ? styles.show : ""}`}>
      <div>
        {description && <small>{description}</small>}
        <div className={styles.animated}>{content}</div>
        {control}
      </div>
    </div>
  );
}
