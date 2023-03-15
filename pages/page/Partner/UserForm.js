import { FormWrapper } from "./FormWrapper";
import { useState } from "react";
// todo move state above,, firm name optional,, more detail,, delete dob ( applicant address)
export function UserForm({
  yourName,
  dob,
  yourEmail,
  application,
  address,
  partnerType,
  contact,
}) {
  const [partner, setPartner] = useState("");
  const [stateIndia, setStateIndia] = useState("");
  const [isFirm, setIsFirm] = useState(false);
  const [district, setDistrict] = useState("");
  const changeHandler = (val) => {
    setPartner(val);
    setDistrict("");
  };
  const changeStateIndia = (val) => {
    setStateIndia(val);
    setDistrict("");
  };
  const changeDistrict = (val) => {
    setDistrict(val);
  };
  const changeFirm = () => {
    setIsFirm(!isFirm);
  };
  return (
    <FormWrapper title="a PART OF OUR DISTRIBUTION SYSTEM">
      <div style={{ width: "500px", marginTop: "30px" }}>
        <label style={{ fontSize: ".8rem", opacity: ".9", fontWeight: "600" }}>
          Personal Details
        </label>
      </div>
      <div style={{ width: "450px" }}></div>
      <hr />
      <hr />
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
        <label>Address (पता)</label>
        <br />
        <input
          autoFocus
          required
          type="text"
          value={address}
          placeholder="Type your address (अपना पता लिखो)"
        />
      </div>
      <div style={{ width: "450px" }}>
        <label>State (राज्य)</label>
        <br />
        <input
          autoFocus
          required
          type="text"
          value={address}
          placeholder="Type your state (अपना राज्य लिखो)"
        />
      </div>
      <div style={{ width: "500px" }}>
        <label>Pincode (पिन कोड)</label>
        <br />
        <input
          autoFocus
          required
          type="number"
          value={address}
          placeholder="Type your pincode (अपना पिन कोड लिखो)"
        />
      </div>
      <div style={{ width: "450px" }}>
        <label>Applicant's Mobile No. (आवेदक मोबाइल नं.)</label>
        <br />
        <input
          required
          type="number"
          value={contact}
          placeholder="Type Contact No. (अपना संपर्क नं. लिखो)"
        />
      </div>
      <div style={{ width: "500px", marginTop: "30px" }}>
        <label style={{ fontSize: ".8rem", opacity: ".9", fontWeight: "600" }}>
          Application Details
        </label>
      </div>
      <div style={{ width: "450px" }}></div>
      <hr />
      <hr />
      <div style={{ width: "500px" }}>
        <label>Application (आवेदन)</label>
        <br />
        <select
          onChange={(e) => {
            changeHandler(e.target.value);
          }}
        >
          <option disabled selected>
            Select Application (चुनें)
          </option>
          <option value={"distributor"}>Distributor (डिस्ट्रीब्यूटर)</option>
          <option value={"stockist"}>Stockist (स्टॉकिस्ट)</option>
          {/*  <option value={application}>
            I am Interested for SuperMart Project (मुझे सुपरमार्ट प्रोजेक्ट में
              दिलचस्पी है)
              </option>
            <option value={application}>Other (अन्य)</option> */}
        </select>
      </div>
      {!isFirm && (
        <div style={{ width: "450px" }}>
          <label>Do you have a firm? (क्या आपके पास फर्म है?)</label>
          <br />
          <button
            style={{ padding: "5px", margin: "15px 0 0 0" }}
            onClick={() => {
              changeFirm();
            }}
          >
            Yes
          </button>
        </div>
      )}
      {isFirm && (
        <div style={{ width: "450px" }}>
          <label>Firm Name (फर्म का नाम)</label>
          <br />
          <input
            required
            type="text"
            value={contact}
            placeholder="Type Firm's Name (अपना फर्म का नाम लिखो)"
          />
        </div>
      )}
      {/* <div style={{ width: "500px" }}>
        <label>Partner Type (साथी का प्रकार)</label>
        <br />
        <select>
        <option disabled selected>
        Select Type (चुनें)
        </option>
        <option value={partnerType}>Stockist</option>
        <option value={partnerType}>Distributor</option>
        <option value={partnerType}>SuperMart</option>
        
        </select>
      </div> */}
      {/* {partner && (
        <div style={{ width: "500px", marginTop: "30px" }}>
          <label
            style={{ fontSize: ".8rem", opacity: ".9", fontWeight: "600" }}
          >
            More Details
          </label>
        </div>
      )}
      {partner && <div style={{ width: "450px" }}></div>}
      {partner && <hr />}
      {partner && <hr />} */}
      {partner && (
        <div style={{ width: "500px" }}>
          <label>State (राज्य)</label>
          <br />
          <select
            onChange={(e) => {
              changeStateIndia(e.target.value);
            }}
          >
            <option disabled selected>
              Select State (चुनें)
            </option>
            <option value={"Bihar"}>Bihar</option>
            <option value={"UP"}>Uttar Pradesh (UP)</option>
          </select>
        </div>
      )}
      {partner === "stockist" &&
        (stateIndia === "Bihar" ? (
          <div style={{ width: "450px" }}>
            <label>District (ज़िला)</label>
            <br />
            <select
              onChange={(e) => {
                changeDistrict(e.target.value);
              }}
            >
              <option disabled selected>
                Select District (चुनें)
              </option>
              <option value={"Patna"}>Patna</option>
              <option value={"Gaya"}>Gaya</option>
              <option value={"Buxar"}>Buxar</option>
              <option value={"Nalanda"}>Nalanda</option>
              <option value={"Jamui"}>Jamui</option>
              <option value={"Bhagalpur"}>Bhagalpur</option>
              <option value={"Purnia"}>Purnia</option>
              <option value={"Vaishali"}>Vaishali</option>
              <option value={"WestChamparan"}>West Champaran</option>
              <option value={"EastChamparan"}>East Champaran</option>
              <option value={"EastChamparan"}>East Champaran</option>
              <option value={"Sitamarhi"}>Sitamarhi</option>
              <option value={"Madhepura"}>Madhepura</option>
              <option value={"Siwan"}>Siwan</option>
            </select>
          </div>
        ) : (
          <div style={{ width: "450px" }}>
            <label>District (ज़िला)</label>
            <br />
            <select
              onChange={(e) => {
                changeDistrict(e.target.value);
              }}
            >
              <option disabled selected>
                Select District (चुनें)
              </option>
              <option value={""}>..</option>
            </select>
          </div>
        ))}
      {partner === "distributor" &&
        (stateIndia === "Bihar" ? (
          <div style={{ width: "450px" }}>
            <label>District (ज़िला)</label>
            <br />
            <select
              onChange={(e) => {
                changeDistrict(e.target.value);
              }}
            >
              <option disabled selected>
                Select District (चुनें)
              </option>
              <option value={"Jehanabad"}>Jehanabad</option>
              <option value={"Aurangabad"}>Aurangabad</option>
              <option value={"Rohtas"}>Rohtas</option>
              <option value={"Arrah"}>Arrah(Bhojpur)</option>
              <option value={"Nawada"}>Nawada</option>
              <option value={"Sheikhpure"}>Sheikhpure</option>
              <option value={"Lakhisarai"}>Lakhisarai</option>
              <option value={"Munger"}>Munger</option>
              <option value={"Katihar"}>Katihar</option>
              <option value={"Banka"}>Banka</option>
              <option value={"Muzaffarpur"}>Muzaffarpur</option>
              <option value={"Darbhanga"}>Darbhanga</option>
              <option value={"Sheohar"}>Sheohar</option>
              <option value={"Supaul"}>Supaul</option>
              <option value={"Araria"}>Araria</option>
              <option value={"Kishnaganj"}>Kishnaganj</option>
              <option value={"Gopalganj"}>Gopalganj</option>
              <option value={"Chhapra"}>Chhapra</option>
              <option value={"Saran"}>Saran</option>
            </select>
          </div>
        ) : (
          <div style={{ width: "450px" }}>
            <label>District (ज़िला)</label>
            <br />
            <select
              onChange={(e) => {
                changeDistrict(e.target.value);
              }}
            >
              <option disabled selected>
                Select District (चुनें)
              </option>
              <option value={""}>..</option>
            </select>
          </div>
        ))}
      {partner === "stockist" && district && (
        <div style={{ width: "500px" }}>
          <p style={{ padding: " 10px 0" }}>
            Security Deposit : 1.5 Lacs<sup>*</sup>
          </p>
          <p style={{ padding: " 10px 0" }}>
            Minimum Order Amount : 5.5 Lacs<sup>*</sup>
          </p>
        </div>
      )}
      {partner === "stockist" && district && (
        <div style={{ width: "450px" }}></div>
      )}
      {partner === "distributor" && district && (
        <div style={{ width: "500px" }}>
          <p style={{ padding: " 10px 0" }}>
            Security Deposit :<strong> 50 Thousand</strong>
            <sup> *</sup>{" "}
          </p>

          <p style={{ padding: " 10px 0" }}>
            Minimum Order Amount : <strong>1.5 Lacs</strong>
            <sup> *</sup>
          </p>
        </div>
      )}
      {partner === "distributor" && district && (
        <div style={{ width: "450px" }}></div>
      )}
      <div style={{ width: "500px", paddingTop: "7px", fontSize: "16px" }}>
        <br />
        <strong>Contact us:</strong>
        <br />
        E-Mail: sales@ramaera.in | Phone: +91-0120-4152818
      </div>
      <div style={{ width: "450px", fontSize: "16px" }}>
        <br />
        <strong>संपर्क करें:</strong>
        <br />
        ई-मेल: sales@ramaera.in | फोन: +91-120-4152818
      </div>
      {partner && district && (
        <div style={{ width: "500px" }}>
          <p style={{ fontSize: "12px" }}>
            <sup>*</sup>All Data for the proposal purpose only,
            <br />
            It would be final as per demand and supply basis
          </p>
        </div>
      )}
    </FormWrapper>
  );
}
