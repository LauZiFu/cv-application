import type { Entry, EntryRecord } from "../utils/resume";
import { formatDateResume } from "../utils/utils";
import styles from "../styles/Record.module.css";

export function Record({
  place,
  credential,
  startDate,
  endDate,
  city,
  description,
}: Entry) {
  return (
    <section className={styles.record}>
      <h3 className={styles.title}>
        {credential}
        {credential && ", "}
        {place}
      </h3>
      <h3 className={styles.date}> {formatDateResume(startDate, endDate)}</h3>
      <p className={styles.city}>{city}</p>
      <p>{description}</p>
    </section>
  );
}

export default function RecordList({ records }: { records: EntryRecord }) {
  const recordList = Object.entries(records);

  return (
    <ul>
      {recordList.map(([key, value]) => (
        <li key={key}>
          <Record {...value} />
        </li>
      ))}
    </ul>
  );
}
