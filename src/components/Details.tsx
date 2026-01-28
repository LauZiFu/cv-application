import Input from "./Input";

//name, email, phone number, address
export default function Details() {
  return (
    <section className="personal-details">
      <div>
        <Input name="firstName" label="First Name" />
        <Input name="lastName" label="Last Name" />
      </div>
      <div>
        <Input type="email" name="email" label="Email" />
        <Input type="tel" name="tel" label="Phone" />
      </div>
      <div>
        <Input name="cityState" label="City, State" />
        <Input name="country" label="Country" />
      </div>
    </section>
  );
}
