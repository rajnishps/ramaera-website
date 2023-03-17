import React from "react";
import MailIcon from "@mui/icons-material/Mail";

const LegalSection = () => {
  return (
    <>
      <div className="container certificate-container">
        <h1 className="legalHeading mb-40">Certificate</h1>

        <div className="basis-12/12 certifcate-alignment w-full">
          <div className="basis-4">
            <img src="content/certificate.jpg" className="certificate-img" />
          </div>
        </div>
      </div>
      <div className="container contact-container" style={{ display: "flex" }}>
        <div className="basis-12/12" style={{ display: "flex", width: "100%" }}>
          <div className="contact-alignment"></div>
          <div className="basis-5/12 contact-align">
            <h2 className="contact-text">
              for any information related to certificate kindly contact:
            </h2>
            <p style={{ color: "white", textAlign: "center" }}>
              Email :
              <a href="mailto:legal@ramaera&subject=Query">legal@ramaera.com</a>
            </p>
            {/* <MailIcon /> */}
          </div>
          <div className="contact-alignment"></div>
        </div>
      </div>
    </>
  );
};

export default LegalSection;
