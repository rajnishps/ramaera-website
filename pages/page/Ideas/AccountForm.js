import { FormWrapper } from "./FormWrapper";

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
    <FormWrapper title="Account Creation">
      <label>Your Linked-in Profile</label>
      <input
        autoFocus
        required
        type="text"
        value={linkedinProfile}
        // onChange={(e) => updateFields({ email: e.target.value })}
      />
      <label>Your Facebook Profile</label>
      <input required type="text" value={facebookProfile} />

      <label>Your Twitter Profile</label>
      <input required type="text" value={twitterProfile} />

      <label>Your Instagram Profile</label>
      <input required type="text" value={instagramProfile} />

      <label>Website URL if any</label>
      <input required type="text" value={websiteURL} />

      <label>Verify Your Account</label>
      <input required type="text" value={verifAccount} />

      <label>Thanks Note</label>
      <input required type="text" value={thanksNote} />
    </FormWrapper>
  );
}
