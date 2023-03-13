import { FormWrapper } from "./FormWrapper"
import { useState } from "react"

export function UserForm({
  yourName,
  dob,
  yourEmail,
  application,
  partnerType,
  contact,
}) {
  return (
    <FormWrapper title="a Partner">
      <div style={{ width: "500px" }}>
        <label>Applicant's Name (आवेदक का नाम)</label>
        <br />
        <input
          autoFocus
          required
          type="text"
          value={yourName}
          placeholder="Type your name (अपना नाम लिखो)"
        />
      </div>
      <div style={{ width: "450px" }}>
        <label>Applicant's Email (आवेदक का ईमेल) </label>
        <br />
        <input
          autoFocus
          required
          type="email"
          value={yourEmail}
          placeholder="Type your email (अपना ईमेल लिखो)"
        />
      </div>

      <div style={{ width: "500px" }}>
        <label>Application (आवेदन)</label>
        <br />
        <select>
          <option disabled selected>
            Select Application (चुनें)
          </option>
          <option value={application}>
            I am Interested to be a Distributor (मुझे डिस्ट्रीब्यूटर बनने में
            दिलचस्पी है)
          </option>
          <option value={application}>
            I am Interested to be a stockist (मुझे स्टॉकिस्ट बनने में दिलचस्पी
            है)
          </option>
          <option value={application}>
            I am Interested for SuperMart Project (मुझे सुपरमार्ट प्रोजेक्ट में
            दिलचस्पी है)
          </option>
          <option value={application}>Other (अन्य)</option>
        </select>
      </div>
      <div style={{ width: "450px" }}>
        <label>Partner Type (साथी का प्रकार)</label>
        <br />
        <select>
          <option disabled selected>
            Select Type (चुनें)
          </option>
          <option value={partnerType}>Stockist</option>
          <option value={partnerType}>Distributor</option>
          {/*           <option value={partnerType}>SuperMart</option>
           */}
        </select>
      </div>
      <div style={{ width: "500px" }}>
        <label>Date Of Birth</label>
        <br />
        <input required type="date" value={dob} />
      </div>

      <div style={{ width: "500px" }}>
        <label>Applicant's Mobile No. (आवेदक मोबाइल नं.)</label>
        <br />
        <input
          required
          type="number"
          value={contact}
          placeholder="Type Contact No."
        />
      </div>
      <div style={{ width: "500px" }}>
        <label>Firm Name (फर्म का नाम)</label>
        <br />
        <input
          required
          type="number"
          value={contact}
          placeholder="Type Contact No."
        />
      </div>
    </FormWrapper>
  )
}
