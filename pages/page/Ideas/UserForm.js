import { FormWrapper } from "./FormWrapper";

export function UserForm({
  yourName,
  country,
  states,
  citys,
  dob,
  occupation,
  contact,
}) {
  return (
    <FormWrapper title="User Details">
      <label>Your Name</label>
      <input autoFocus required type="text" value={yourName} />
      <label>Country</label>
      <input
        required
        type="text"
        value={country}
        // onChange={(e) => updateFields({ country: e.target.value })}
      />

      <label>State</label>
      <input required type="text" value={states} />
      <label>City</label>
      <input required type="text" value={citys} />
      <label>Date Of Birth</label>
      <input required min={1} type="number" value={dob} />
      <label>Your Occupation</label>
      <input required type="text" value={occupation} />
      <label>Contact No</label>
      <input required type="number" value={contact} />
    </FormWrapper>
  );
}
