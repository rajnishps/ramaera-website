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
    <FormWrapper title="Finish Setup">
      <label>Email</label>
      <input
        autoFocus
        required
        type="text"
        value={linkedinProfile}
        // onChange={(e) => updateFields({ email: e.target.value })}
      />
    </FormWrapper>
  )
}
