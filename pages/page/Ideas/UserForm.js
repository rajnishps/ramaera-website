import { FormWrapper } from "./FormWrapper";

export function UserForm({ firstName, lastName, age, updateFields }) {
  return (
    <FormWrapper title="User Details">
      <label>Your Name</label>
      <input
        autoFocus
        required
        type="text"
        value={firstName}
        onChange={(e) => updateFields({ firstName: e.target.value })}
      />
      <label>Country</label>
      <input
        required
        type="text"
        value={country}
        onChange={(e) => updateFields({ lastName: e.target.value })}
      />
      <label>State</label>
      <input
        required
        type="text"
        value={state}
        onChange={(e) => updateFields({ lastName: e.target.value })}
      />
      <label>City</label>
      <input
        required
        type="text"
        value={city}
        onChange={(e) => updateFields({ lastName: e.target.value })}
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
        value={o}
        onChange={(e) => updateFields({ lastName: e.target.value })}
      />
    </FormWrapper>
  );
}
