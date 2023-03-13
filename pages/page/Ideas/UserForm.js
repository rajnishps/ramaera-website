import { FormWrapper } from "./FormWrapper"
import { Country, State, City } from "country-state-city"
import { useState } from "react"

export function UserForm({ yourName, citys, dob, occupation, contact }) {
  const [state, setState] = useState()
  const [country, setCountry] = useState()
  return (
    <FormWrapper title="Basic Details">
      <div style={{ width: "500px" }}>
        <label>Your Name</label>
        <br />
        <input
          autoFocus
          required
          type="text"
          value={yourName}
          placeholder="Type your name"
        />
      </div>
      <div style={{ width: "450px" }}>
        <label>Country</label>
        <br />
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
      </div>
      <div style={{ width: "500px" }}>
        <label>State</label>
        <br />
        <select
          required
          value={state}
          onChange={(e) => setState(e.target.value)}
        >
          <option value="">Select State Name</option>
          {State &&
            State.getStatesOfCountry(country).map((item) => (
              <option key={item.isoCode} value={item.isoCode}>
                {item.name}
              </option>
            ))}
        </select>
      </div>
      <div style={{ width: "450px" }}>
        <label>City</label>
        <br />
        <input required type="text" value={citys} />
      </div>
      <div style={{ width: "500px" }}>
        <label>Date Of Birth</label>
        <br />
        <input required type="date" value={dob} />
      </div>
      <div style={{ width: "450px" }}>
        <label>Your Occupation</label>
        <br />
        <select>
          <option disabled selected>
            Select Occupation
          </option>
          <option value={occupation}>Job</option>
          <option value={occupation}>Business</option>
        </select>
      </div>
      <div style={{ width: "500px" }}>
        <label>Contact No</label>
        <br />
        <input
          required
          type="number"
          value={contact}
          placeholder="Type Contact No."
        />
      </div>
      <div style={{ width: "450px" }}>
        <label>Director Name</label>
        <br />
        <input autoFocus type="text" placeholder="Type your name" />
      </div>
      <div style={{ width: "500px" }}>
        <label>Basic introduction with experience </label>
        <br />
        <input autoFocus type="text" />
      </div>
      <div style={{ width: "450px" }}>
        <label>Role</label>
        <br />
        <input autoFocus type="text" />
      </div>
    </FormWrapper>
  )
}
