import Input from "./Input";

export default function EdForm() {
  return (
    <div>
      <p>
        <Input name="school" label="School" />
        <Input name="degree" label="Degree" />
      </p>
      <p>
        <div className="start-end">
          <Input type="date" name="start" label="Start Date" />
          <Input type="date" name="end" label="End Date" />
        </div>
        <Input name="city" label="City" />
      </p>
      <p>
        <label htmlFor="description">
          Description<textarea name="description" id="description"></textarea>
        </label>
      </p>
    </div>
  );
}
