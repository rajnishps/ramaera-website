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

const Applicant = () => {
  const applicantdata = useSelector((state) => state.applicationData.appData)
  const dispatch = useDispatch()
  const { loading, error, data } = useQuery(GetApplications)
  const [anchorEl, setAnchorEl] = useState(false)
  if (loading) return "Loading..."
  console.log("allthe dataod=fapplicants", applicantdata)
  dispatch(changeAppData(data.applicants))

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const columns = [
    {
      field: "name",
      headerName: " Name",
      width: 150,
      editable: false,
      selection: false,
      renderCell: (params) => (
        <Link href={`/applicantDetail/${params.value}`}>{params.value}</Link>
      ),
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

  if (applicantdata) {
    applicantdata.forEach((item) => {
      rows.push({
        id: item.name,
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
              right: "100px",
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
            <a href="/passwordChange">
              <MenuItem onClick={handleClose}>Change Password</MenuItem>
            </a>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>

          <Box
            sx={{
              height: "80vh",
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
                    pageSize: 8,
                  },
                },
              }}
              pageSizeOptions={[5]}
              disablecolumnSelectionOnClick
              displayRowCheckbox={false}
              //onClick={routeChange}
            />
          </Box>
        </Container>
      </>
    )
  }
}

export default Applicant
