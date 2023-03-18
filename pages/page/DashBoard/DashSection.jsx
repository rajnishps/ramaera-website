// import { DataGrid } from "@mui/x-data-grid";
// import Box from "@mui/material/Box";
// import Text from "../../../components/Text/Text";

import Link from "next/link";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

// import { data } from "./Collection/data";
Link;
const DashSection = () => {
  return (
    <>
      <div className="container heading-container">
        <h1 className="heading-text">Dashboard Details </h1>
        <label class="dropdown">
          <div class="dd-button">Dropdown</div>
          <AccountCircleIcon style={{ fontSize: "50px", color: "white" }} />
          <input type="checkbox" class="dd-input" id="test" />

          <ul class="dd-menu">
            <li>Name</li>
            <li class="divider"></li>
            <li>Change Password</li>
            <li class="divider"></li>
            <li>Role</li>
            <li className="divider"></li>
            <li>Logout</li>
          </ul>
        </label>
      </div>
      <div className="container table-container">
        <div className="basis-2/12 table-2"></div>
        <div className="basis-8/12 table-8">
          <table id="myTable">
            <thead>
              <tr className="header">
                <th>DashBoard</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Application Data</td>
                <td>
                  <Link href="/applicants" className="btn success">
                    View All
                  </Link>
                </td>
              </tr>
              <tr>
                <td>Contact Data</td>
                <td>
                  <Link href="/projectApplication" className="btn success">
                    View All
                  </Link>
                </td>
              </tr>
              <tr>
                <td>Distributer Data</td>
                <td>
                  <Link href="/contactDetail" className="btn success">
                    View All
                  </Link>
                </td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>

              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="basis-2/12 table-2"></div>
      </div>
    </>
  );
};

export default DashSection;
