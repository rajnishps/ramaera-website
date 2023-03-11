import { FormWrapper } from "./FormWrapper";

export function UserForm({
  yourName,
  country,
  state,
  city,
  dob,
  occupation,
  contact,
}) {
  return (
    <FormWrapper title="User Details">
      <label>Your Name</label>
      <input
        autoFocus
        required
        type="text"
        value={yourName}
        onChange={(e) => updateFields({ yourName: e.target.value })}
      />
      <label>Country</label>
      <input
        required
        type="text"
        value={country}
        onChange={(e) => updateFields({ country: e.target.value })}
      />
      <label>State</label>
      <input
        required
        type="text"
        value={state}
        onChange={(e) => updateFields({ state: e.target.value })}
      />
      <label>City</label>
      <input
        required
        type="text"
        value={city}
        onChange={(e) => updateFields({ city: e.target.value })}
      />
      <label>Date Of Birth</label>
      <input
        required
        min={1}
        type="number"
        value={dob}
        onChange={(e) => updateFields({ dob: e.target.value })}
      />
      <label>Your Occupation</label>
      <input
        required
        type="text"
        value={occupation}
        onChange={(e) => updateFields({ occupation: e.target.value })}
      />
      <label>Contact No</label>
      <input
        required
        type="text"
        value={contact}
        onChange={(e) => updateFields({ contact: e.target.value })}
      />
    </FormWrapper>
  );
}
