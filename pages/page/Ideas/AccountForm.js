import { FormWrapper } from "./FormWrapper"
export function AccountForm({
  linkedinProfile,
  facebookProfile,
  twitterProfile,
  instagramProfile,
  websiteURL,
  verifAccount,
  thanksNote,
}) {
  return (
    <FormWrapper number={2} title="Finish Details">
      <div style={{ width: "500px" }}>
        <label>Your LinkedIn Profile</label>
        <br />
        <input
          autoFocus
          type="text"
          value={linkedinProfile}
          // onChange={(e) => updateFields({ email: e.target.value })}
        />
      </div>
      <div style={{ width: "450px" }}>
        <label>Your Facebook Profile</label>
        <br />
        <input
          type="text"
          value={facebookProfile}
          placeholder="paste or type  link here"
        />
      </div>
      <div style={{ width: "500px" }}>
        <label>Your Twitter Profile</label>
        <br />
        <input
          type="text"
          value={twitterProfile}
          placeholder="paste or type  link here"
        />{" "}
      </div>
      <div style={{ width: "450px" }}>
        <label>Your Instagram Profile</label>
        <br />
        <input
          type="text"
          value={instagramProfile}
          placeholder="paste or type  link here"
        />
      </div>
      <div style={{ width: "500px" }}>
        <label>Website URL if any</label>
        <br />
        <input
          type="text"
          value={websiteURL}
          placeholder="paste or type  link here"
        />
      </div>

      <div style={{ width: "450px" }}>
        <label>Thanks Note</label>
        <br />
        <input
          type="text"
          value={thanksNote}
          placeholder=" Type your message"
        />
      </div>
    </FormWrapper>
  )
}
