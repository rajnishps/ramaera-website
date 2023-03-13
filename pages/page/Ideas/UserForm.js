import { FormWrapper } from "./FormWrapper"
import { Country, State, City } from "country-state-city"
import { useState } from "react"

export function UserForm({ yourName, citys, dob, occupation, contact }) {
  const [state, setState] = useState()
  const [country, setCountry] = useState()
  return (
    <FormWrapper title="Basic Details">
      <label>Your Name</label>
      <input
        autoFocus
        required
        type="text"
        value={yourName}
        placeholder="Type your name"
      />

      <label>Country</label>
      <select
        required
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      >
        <option value="">Select Country Name</option>
        {Country &&
          Country.getAllCountries().map((item) => (
            <option key={item.isoCode} value={item.isoCode}>
              {item.name}
            </option>
          ))}
      </select>

      <label>State</label>
      <select required value={state} onChange={(e) => setState(e.target.value)}>
        <option value="">Select State Name</option>
        {State &&
          State.getStatesOfCountry(country).map((item) => (
            <option key={item.isoCode} value={item.isoCode}>
              {item.name}
            </option>
          ))}
      </select>

      <label>City</label>
      <input required type="text" value={citys} />
      <label>Date Of Birth</label>
      <input required type="date" value={dob} />
      <label>Your Occupation</label>
      <select>
        <option disabled selected>
          Select Occupation
        </option>
        <option value={occupation}>Job</option>
        <option value={occupation}>Business</option>
      </select>

      <label>Contact No</label>
      <input
        required
        type="number"
        value={contact}
        placeholder="Type Contact No."
      />

      <label>Director Name</label>
      <input autoFocus type="text" placeholder="Type your name" />

      <label>Basic introduction with experience </label>
      <input autoFocus type="text" />

      <label>Role</label>
      <input autoFocus type="text" />
    </FormWrapper>
  )
}
