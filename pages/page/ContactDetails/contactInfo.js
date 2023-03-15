import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Text from "../../../components/Text/Text";
import { data } from "./Collection/data";

const ContactInfo = () => {
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
      field: "company",
      headerName: "Company",
      width: 200,
    },
    {
      field: "subject",
      headerName: "Subject",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 250,
    },
    {
      field: "message",
      headerName: "Message",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 450,
    },
  ];

  const rows = [];

  data &&
    data.forEach((item, index) => {
      rows.push({
        id: item.name,
        name: item.name,
        email: item.email,
        company: item.company,
        subject: item.subject,
        message: item.message,
      });
    });

  return (
    <>
      <div>
        <Text
          Text="Contact Us List"
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
  );
};

export default ContactInfo;
