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
    <FormWrapper title="Finish Details">
      <label>Your Linked-in Profile</label>
      <input
        autoFocus
        required
        type="text"
        value={linkedinProfile}
        // onChange={(e) => updateFields({ email: e.target.value })}
      />
      <label>Your Facebook Profile</label>
      <input
        required
        type="text"
        value={facebookProfile}
        placeholder="paste or type  link here"
      />
      <label>Your Twitter Profile</label>
      <input
        required
        type="text"
        value={twitterProfile}
        placeholder="paste or type  link here"
      />
      <label>Your Instagram Profile</label>
      <input
        required
        type="text"
        value={instagramProfile}
        placeholder="paste or type  link here"
      />
      <label>Website URL if any</label>
      <input
        required
        type="text"
        value={websiteURL}
        placeholder="paste or type  link here"
      />
      <label>Verify Your Account</label>
      <input
        required
        type="text"
        value={verifAccount}
        placeholder="Type Your Private Key"
      />
      <label>Thanks Note</label>
      <input
        required
        type="text"
        value={thanksNote}
        placeholder=" Type your message to Donor's"
      />
    </FormWrapper>
  );
}
