import React, { useState } from "react"
import { DataGrid } from "@mui/x-data-grid"
import Box from "@mui/material/Box"
import Text from "../../../components/Text/Text"
 import { useQuery } from "@apollo/client"
 import { GetContactResponses } from "../../../apollo/queries"

const ProjectApplicationInfo = () => {
  const { loading, error, data } = useQuery(GetContactResponses)

  const columns = [
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
      field: "contact",
      headerName: "Contact No.",
      width: 200,
    },
    {
      field: "project",
      headerName: "Project Name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 450,
    },
    {
      field: "createAt",
      headerName: "Created At",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 250,
    },
  ]

  const rows = []
  if (data) {
    data.contactUsRepsonses.forEach((item) => {
      rows.push({
        id: item.name,
        name: item.name,
        email: item.email,
        contact: item.contact,
        project: item.project,
        createdAt: item.createAt,
      })
    })
  }

  return (
    <>
      <div style={{ marginTop: "150px" }}>
        <Text
          Text="Project Application List"
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
            pageSizeOptions={[8]}
            disablecolumnSelectionOnClick
            displayRowCheckbox={false}
            disableRowSelectionOnClick
          />
        </Box>
      </div>
    </>
  )
}

export default ProjectApplicationInfo
