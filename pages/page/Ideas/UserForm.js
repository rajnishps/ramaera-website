import { FormWrapper } from "./FormWrapper"

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
    <FormWrapper title="Basic Details">
      <div style={{ width: "500px" }}>
        <label>Your Name</label>
        <br />
        <input autoFocus required type="text" value={yourName} />
      </div>
      <div style={{ width: "450px" }}>
        <label>Country</label>
        <br />
        <input
          required
          type="text"
          value={country}
          // onChange={(e) => updateFields({ country: e.target.value })}
        />
      </div>
      <div>
        <label>State</label>
        <br />
        <input required type="text" value={states} />
      </div>
      <div>
        <label>City</label>
        <br />
        <input required type="text" value={citys} />
      </div>
      <div>
        <label>Date Of Birth</label>
        <br />
        <input required min={1} type="number" value={dob} />
      </div>
      <div>
        <label>Your Occupation</label>
        <br />
        <input required type="text" value={occupation} />
      </div>
      <div>
        <label>Contact No</label>
        <br />
        <input required type="number" value={contact} />
      </div>
    </FormWrapper>
  )
}
