import type { Entry, EntryRecord } from "../utils/resume";
import { formatDateResume } from "../utils/utils";

export function Record({
  place,
  credential,
  startDate,
  endDate,
  city,
  description,
}: Entry) {
  return (
    <section>
      <h3>
        <span>
          {credential}
          {credential && ", "}
          {place}
        </span>
        <span>{formatDateResume(startDate, endDate)}</span>
      </h3>
      <p>{city}</p>
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
