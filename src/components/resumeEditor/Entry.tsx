import { Input } from "../forms/Input";
import Button from "../forms/Button";
import Description from "../forms/Description";
import { formatDateResume } from "../../utils/utils";
import type { Entry, EntryRecord } from "../../utils/resume";
import style from "../../styles/Entry.module.css";
import { Trash2 } from "lucide-react";

export function Entry({
  props: entry,
  legend,
  onChange,
}: {
  props: Entry;
  legend: string;
  onChange: (entry: Entry) => void;
}) {
  return (
    <details open className={style.entryCard}>
      <summary>
        <h3>
          {!(entry.credential || entry.place)
            ? "(Undefined)"
            : entry.credential +
              (entry.place && entry.credential && " at ") +
              entry.place}
        </h3>
        <small>{formatDateResume(entry.startDate, entry.endDate)}</small>
      </summary>
      <fieldset className={style.content}>
        <legend>{legend}</legend>
        <Input
          name="place"
          value={entry.place}
          onChange={(e) => onChange({ ...entry, place: e })}
        />
        <Input
          name="credential"
          value={entry.credential}
          onChange={(e) => onChange({ ...entry, credential: e })}
        />
        <div className={style.startEnd}>
          <Input
            name="start"
            type="month"
            onChange={(e) => onChange({ ...entry, startDate: e })}
          />
          <Input
            name="end"
            type="month"
            onChange={(e) => onChange({ ...entry, endDate: e })}
          />
        </div>
        <Input name="city" onChange={(e) => onChange({ ...entry, city: e })} />
        <Description onChange={(e) => onChange({ ...entry, description: e })} />
      </fieldset>
    </details>
  );
}

export function EntryList({
  entryList,
  legend,
  onChange,
}: {
  entryList: EntryRecord;
  legend: string;
  onChange: (a: EntryRecord) => void;
}) {
  const handleDelete = (key: string) => {
    onChange(
      Object.fromEntries(Object.entries(entryList).filter(([k]) => key !== k)),
    );
  };

  return (
    <ul className={style.entryList}>
      {Object.entries(entryList).map(([id]) => (
        <li key={id}>
          <Entry
            props={entryList[id]}
            legend={legend}
            onChange={(entry: Entry) => onChange({ ...entryList, [id]: entry })}
          />
          <Button
            className={style.delete}
            icon={<Trash2 />}
            handleClick={() => handleDelete(id)}
          />
        </li>
      ))}
    </ul>
  );
}
