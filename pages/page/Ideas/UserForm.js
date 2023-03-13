import { FormWrapper } from "./FormWrapper";
import { Country, State, City } from "country-state-city";
import { useState } from "react";
import Button from "../../../components/Button/SubmitButton";

export function UserForm({ yourName, citys, dob, occupation, contact }) {
  const [state, setState] = useState();
  const [country, setCountry] = useState("IN");
  const [buttonCount, setButtonCount] = useState(1);

  const changeButtonCount = (val) => {
    setButtonCount(buttonCount + val);
    console.log(buttonCount);
  };
  return (
    <>
      <FormWrapper number={0} title="Basic Details">
        <div style={{ width: "500px" }}>
          <label>Your Name</label>
          <br />
          <input
            autoFocus
            type="text"
            value={yourName}
            placeholder="Type your name"
          />
        </div>
        <div style={{ width: "450px" }}>
          <label>Country</label>
          <br />
          <select value={country} onChange={(e) => setCountry(e.target.value)}>
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
          <select value={state} onChange={(e) => setState(e.target.value)}>
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
          <input type="text" value={citys} />
        </div>
        <div style={{ width: "500px" }}>
          <label>Date Of Birth</label>
          <br />
          <input type="date" value={dob} />
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
          <input type="number" value={contact} placeholder="Type Contact No." />
        </div>
        <div style={{ width: "450px" }}></div>
        <div style={{ width: "500px", marginTop: "30px" }}>
          <label
            style={{ fontSize: ".8rem", opacity: ".9", fontWeight: "600" }}
          >
            Team Details
          </label>
        </div>
        <div style={{ width: "450px" }}></div>

        <hr />
        <hr />

        {buttonCount >= 1 && (
          <div style={{ width: "500px" }}>
            <label>Director Name</label>
            <br />
            <input autoFocus type="text" placeholder="Type your name" />
          </div>
        )}
        {buttonCount >= 1 && (
          <div style={{ width: "450px" }}>
            <label>Basic introduction with experience </label>
            <br />
            <input autoFocus type="text" />
          </div>
        )}
        {buttonCount >= 2 && (
          <div style={{ width: "500px" }}>
            <label>Director Name</label>
            <br />
            <input autoFocus type="text" placeholder="Type your name" />
          </div>
        )}
        {buttonCount >= 2 && (
          <div style={{ width: "450px" }}>
            <label>Basic introduction with experience </label>
            <br />
            <input autoFocus type="text" />
          </div>
        )}
        <div onClick={() => changeButtonCount(1)}>
          <Button
            width="150px"
            padding="0.85rem 1rem"
            height="2.75rem"
            Text="Add more"
            inheight="2rem"
            sh="none"
          />
        </div>
      </FormWrapper>
    </>
  );
}
