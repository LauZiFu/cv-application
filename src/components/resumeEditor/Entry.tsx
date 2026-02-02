import { Input } from "../forms/Input";
import { format } from "date-fns";
import Button from "../forms/Button";
import Description from "../forms/Description";
import type { Entry, EntryRecord } from "../../resume";

export function Entry({
  props: entry,
  onChange,
}: {
  props: Entry;
  onChange: (entry: Entry) => void;
}) {
  return (
    <details open>
      <summary>
        <h3>
          {!(entry.credential || entry.place)
            ? "(Undefined)"
            : entry.credential +
              (entry.place && entry.credential && " at ") +
              entry.place}
        </h3>
        <h3>
          {(entry.startDate && format(entry.startDate, "MMM yyyy")) +
            (entry.startDate && entry.endDate && " - ") +
            (entry.endDate && format(entry.endDate, "MMM yyyy"))}
        </h3>
      </summary>
      <fieldset>
        <legend>Job information</legend>
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
        <div className="start-end">
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
        <Input name="city" />
        <Description />
      </fieldset>
    </details>
  );
}

export function EntryList({
  entryList,
  onChange,
}: {
  entryList: EntryRecord;
  onChange: (a: EntryRecord) => void;
}) {
  const handleClick = () => {
    const id = crypto.randomUUID();
    onChange({
      ...entryList,
      [id]: {
        id: id,
        place: "",
        credential: "",
        startDate: "",
        endDate: "",
        city: "",
        description: "",
      },
    });
  };

  const handleDelete = (key: string) => {
    onChange(
      Object.fromEntries(Object.entries(entryList).filter(([k]) => key !== k)),
    );
  };

  return (
    <>
      <ul>
        {Object.entries(entryList).map(([id]) => (
          <li key={id}>
            <Entry
              props={entryList[id]}
              onChange={(entry: Entry) =>
                onChange({ ...entryList, [id]: entry })
              }
            />
            <Button text="delete" handleClick={() => handleDelete(id)} />
          </li>
        ))}
      </ul>
      <Button text="add entry" handleClick={() => handleClick()} />
    </>
  );
}
