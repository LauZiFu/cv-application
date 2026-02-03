import type { Details } from "../../utils/resume";
import { Input } from "../forms/Input";
import style from "../../styles/PersonalDetails.module.css";
import Accordion from "../Accordion";

//name, email, phone number, address
export default function PersonalDetails({
  details,
  onChange,
}: {
  details: Details;
  onChange: (a: Details) => void;
}) {
  const heading = <h2 id="personal-details">Personal Details</h2>;
  const inputs = Object.entries(details).map(([key]) => (
    <Input
      key={key}
      name={key}
      onChange={(value) => onChange({ ...details, [key]: value })}
    />
  ));
  return (
    <Accordion
      title={heading}
      content={
        <fieldset className={style.personal}>
          <legend>Personal Information</legend>
          {inputs}
        </fieldset>
      }
    />
  );
}
