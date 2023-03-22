import { FormWrapper } from "./FormWrapper"
import { Country, State } from "country-state-city"
import { useState } from "react"
import Button from "../../../components/Button/SubmitButton"
import { useDispatch } from "react-redux"
import {
  changeCity,
  changeCountry,
  changeState,
  changeDob,
  changeEmail,
  changeMobileNumber,
  changedirectorOne,
  changedirectorIntroOne,
  changedirectorTwo,
  changedirectorIntroTwo,
  changedirectorThree,
  changedirectorIntroThree,
  changeName,
  changeOccupation,
} from "../../../state/slice/projectSlice"
export function UserForm() {
  const dispatch = useDispatch()
  const [state, setState] = useState()
  const [country, setCountry] = useState()
  const [buttonCount, setButtonCount] = useState(1)

  const changeButtonCount = (val) => {
    setButtonCount(buttonCount + val)
    //console.log(buttonCount)
  }
  const handleCountryChange = (val) => {
    dispatch(changeCountry(val))
    setCountry(val)
  }

  return (
    <>
      <FormWrapper number={0} title="Basic Details">
        <div style={{ width: "500px" }}>
          <label>Your Name</label>
          <br />
          <input
            required
            type="text"
            onChange={(e) => dispatch(changeName(e.target.value))}
            placeholder="Type your name"
          />
        </div>
        <div style={{ width: "450px" }}>
          <label>Country</label>
          <br />
          <select
            required
            value={country}
            onChange={(e) => handleCountryChange(e.target.value)}
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
            onChange={(e) => dispatch(changeState(e.target.value))}
          >
            <option value="IN">Select State Name</option>
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
          <input
            required
            type="text"
            onChange={(e) => dispatch(changeCity(e.target.value))}
            placeholder="Type City name"
          />
        </div>
        <div style={{ width: "500px" }}>
          <label>Date Of Birth</label>
          <br />
          <input
            required
            type="date"
            onChange={(e) => dispatch(changeDob(e.target.value))}
          />
        </div>
        <div style={{ width: "450px" }}>
          <label>Your Occupation</label>
          <br />
          <select
            required
            onChange={(e) => dispatch(changeOccupation(e.target.value))}
          >
            <option disabled selected>
              Select Occupation
            </option>
            <option value={"Job"}>Job</option>
            <option value={"Business"}>Business</option>
          </select>
        </div>
        <div style={{ width: "500px" }}>
          <label>Contact No</label>
          <br />
          <input
            required
            type="number"
            onChange={(e) => dispatch(changeMobileNumber(e.target.value))}
            placeholder="Type Contact No."
          />
        </div>
        <div style={{ width: "450px" }}>
          <label>Email Id</label>
          <br />
          <input
            required
            type="email"
            onChange={(e) => dispatch(changeEmail(e.target.value))}
            placeholder="Type Email Id"
          />
        </div>

        <div style={{ width: "500px", marginTop: "30px" }}>
        <label style={{ fontSize: "1.3rem", opacity: ".9", fontWeight: "600" ,color:"#5a5a5a"}}>
            Team Details
          </label>
        </div>
        <div style={{ width: "450px" }}></div>

        <hr className="lineHr1" />
        <hr className="lineHr2" />

        {buttonCount >= 1 && (
          <div style={{ width: "500px" }}>
            <label>Director Name</label>
            <br />
            <input
              onChange={(e) => dispatch(changedirectorOne(e.target.value))}
              type="text"
              placeholder="Type your name"
            />
          </div>
        )}
        {buttonCount >= 1 && (
          <div style={{ width: "450px" }}>
            <label>Basic introduction with experience </label>
            <br />
            <input
              type="text"
              onChange={(e) => dispatch(changedirectorIntroOne(e.target.value))}
            />
          </div>
        )}
        {buttonCount >= 2 && (
          <div style={{ width: "500px" }}>
            <label>Director Name</label>
            <br />
            <input
              type="text"
              onChange={(e) => dispatch(changedirectorTwo(e.target.value))}
              placeholder="Type your name"
            />
          </div>
        )}
        {buttonCount >= 2 && (
          <div style={{ width: "450px" }}>
            <label>Basic introduction with experience </label>
            <br />
            <input
              type="text"
              onChange={(e) => dispatch(changedirectorIntroTwo(e.target.value))}
            />
          </div>
        )}

        {buttonCount >= 3 && (
          <div style={{ width: "500px" }}>
            <label>Director Name</label>
            <br />
            <input
              type="text"
              onChange={(e) => dispatch(changedirectorThree(e.target.value))}
              placeholder="Type your name"
            />
          </div>
        )}
        {buttonCount >= 3 && (
          <div style={{ width: "450px" }}>
            <label>Basic introduction with experience </label>
            <br />
            <input
              onChange={(e) =>
                dispatch(changedirectorIntroThree(e.target.value))
              }
              type="text"
            />
          </div>
        )}
        {buttonCount === 3 ? null : (
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
        )}
      </FormWrapper>
    </>
  )
}
const StyleImage = () => {
  return <div>StyleImage</div>
}

export default StyleImage
