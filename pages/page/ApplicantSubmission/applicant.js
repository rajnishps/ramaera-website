import React, { useState } from "react"
import { DataGrid } from "@mui/x-data-grid"
import Box from "@mui/material/Box"
import Text from "../../../components/Text/Text"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import { Container } from "./style"
import { useQuery } from "@apollo/client"
import { GetApplications } from "../../../apollo/queries"
import Link from "next/link"
import { useDispatch, useSelector } from "react-redux"
import { changeAppData } from "../../../state/slice/applicantDataSlice"
import Button from "../../../components/Button/SubmitButton"

const Applicant = () => {
  const applicantdata = useSelector((state) => state.applicationData.appData)
  const dispatch = useDispatch()
  const { loading, error, data } = useQuery(GetApplications)
  const [anchorEl, setAnchorEl] = useState(false)
  if (loading) {
    return "Loading..."
  }

  const ACCESSTOKEN = window.localStorage.getItem("accessToken")
  if (!ACCESSTOKEN) {
    return (
      <>
        <Link
          style={{
            color: "white",
          }}
          href=" /Login"
        >
          Login to continue
        </Link>
      </>
    )
  }

  const dataPush = async () => {
    try {
      dispatch(changeAppData(data.applicants))
    } catch (err) {
      console.log(err)
    }
  }

  //console.log(applicantdata)

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const columns = [
    {
      field: "number",
      headerName: " Details",
      width: 150,
      editable: false,
      selection: false,
      renderCell: (params) => (
        <Link href={`/DistributionChannelResponses/${params.value}`}>
          <button style={{ background: "none", border: "none" }} type="submit">
            <Button
              nav
              width="auto"
              height="auto"
              Text="View Details"
              inheight="auto"
              fontSize="auto"
              padding=" 5px 8px"
            />
          </button>
          {/* <button>View Details</button> */}
        </Link>
      ),
    },
    {
      field: "name",
      headerName: " Name",
      width: 150,
      editable: false,
      selection: false,
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
    },
    {
      field: "applicatant",
      headerName: "Applicatant",
      width: 150,
    },
    {
      field: "state",
      headerName: "State",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
    },
    {
      field: "district",
      headerName: "District",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
    },
    {
      field: "status",
      headerName: "Status",
      minWidth: 150,
      flex: 0.3,
    },
  ]

  const rows = []

  if (data) {
    dataPush()
    data.applicants.forEach((item, index) => {
      rows.push({
        id: index,
        number: index + 1,
        name: item.name,
        email: item.email,
        applicatant: item.applicantType,
        state: item.State,
        district: item.District,
        status: item.status,
      })
    })
    return (
      <>
        <Container>
          <Text
            Text="Applicant List"
            lg="linear-gradient(to right, #ffa73d, gold)"
            font
            size="clamp(2.2rem, 1.2vw, 1.5rem)"
            fw="400"
            align="center"
            lh="50px"
            m="0 0 1rem 0"
            xmsize="clamp(2.4rem, 1.5vw, 2rem)"
            xssize="clamp(2.4rem, 1.5vw, 2rem)"
            msize="2rem"
            mwidth="100%"
            padding="0"
            mpadding="0"
            mta="center"
            mlh="unset"
          />

          <AccountCircleIcon
            onClick={handleMenu}
            style={{
              color: "white",
              fontSize: "50px",
              right: "5%",
              top: "20px",
              position: "absolute",
              cursor: "pointer",
            }}
          />

          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Name</MenuItem>
            <a href="/PasswordChange">
              <MenuItem onClick={handleClose}>Change Password</MenuItem>
            </a>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>

          <Box
            sx={{
              height: "78vh",
              width: "90%",
              margin: "auto",
              background: "white",
              padding: "20px",
              borderRadius: "20px",
              marginBottom: "50px",
            }}
          >
            <DataGrid
              rows={rows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 9,
                  },
                },
              }}
              pageSizeOptions={[9]}
              disablecolumnSelectionOnClick
              displayRowCheckbox={false}
              //onClick={routeChange}
            />
          </Box>
        </Container>
      </>
    )
  } else {
    return <div onClick={location.reload()}></div>
  }
}

export default Applicant
