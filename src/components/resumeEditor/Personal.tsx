import type { Details } from "../../resume";
import { Input } from "../forms/Input";

//name, email, phone number, address
export default function PersonalDetails({
  details,
  onChange,
}: {
  details: Details;
  onChange: (a: Details) => void;
}) {
  return (
    <section aria-labelledby="personal-details">
      <h2 id="personal-details">Personal Details</h2>

      <fieldset>
        <legend>Personal Information</legend>
        <Input
          name="firstName"
          onChange={(firstName) =>
            onChange({ ...details, firstName: firstName })
          }
        />
        <Input
          name="lastName"
          onChange={(lastName) => onChange({ ...details, lastName: lastName })}
        />

        <Input
          type="email"
          name="email"
          onChange={(email) => onChange({ ...details, email: email })}
        />
        <Input
          type="tel"
          name="tel"
          onChange={(tel) => onChange({ ...details, tel: tel })}
        />

        <Input
          name="cityState"
          onChange={(cityState) =>
            onChange({ ...details, cityState: cityState })
          }
        />
        <Input
          name="country"
          onChange={(country) => onChange({ ...details, country: country })}
        />
      </fieldset>
    </section>
  );
}
