import { FormWrapper } from "./FormWrapper"
import { useDispatch } from "react-redux"
import {
  changelinkedinProfile,
  changetwitterProfile,
  changefacebookProfile,
  changeinstagramProfile,
  changewebsiteURL,
  changethanksNote,
} from "../../../state/slice/projectSlice"

export function AccountForm() {
  const dispatch = useDispatch()

  return (
    <FormWrapper number={2} title="Finish Details">
      <div style={{ width: "500px" }}>
        <label>Your LinkedIn Profile</label>
        <br />
        <input
          //required
          autoFocus
          type="text"
          onChange={(e) => dispatch(changelinkedinProfile(e.target.value))}
        />
      </div>
      <div style={{ width: "450px" }}>
        <label>Your Facebook Profile</label>
        <br />
        <input
          //required
          type="text"
          onChange={(e) => dispatch(changefacebookProfile(e.target.value))}
          placeholder="paste or type  link here"
        />
      </div>
      <div style={{ width: "500px" }}>
        <label>Your Twitter Profile</label>
        <br />
        <input
          //required
          type="text"
          onChange={(e) => dispatch(changetwitterProfile(e.target.value))}
          placeholder="paste or type  link here"
        />{" "}
      </div>
      <div style={{ width: "450px" }}>
        <label>Your Instagram Profile</label>
        <br />
        <input
          //required
          type="text"
          onChange={(e) => dispatch(changeinstagramProfile(e.target.value))}
          placeholder="paste or type  link here"
        />
      </div>
      <div style={{ width: "500px" }}>
        <label>Website URL if any</label>
        <br />
        <input
          //required
          type="text"
          onChange={(e) => dispatch(changewebsiteURL(e.target.value))}
          placeholder="paste or type  link here"
        />
      </div>

      <div style={{ width: "450px" }}>
        <label>Thanks Note</label>
        <br />
        <input
          //required
          type="text"
          onChange={(e) => dispatch(changethanksNote(e.target.value))}
          placeholder=" Type your message"
        />
      </div>
    </FormWrapper>
  )
}
const StyleImage = () => {
  return <div>StyleImage</div>
}

export default StyleImage
