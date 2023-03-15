import { DataGrid } from "@mui/x-data-grid"
import Box from "@mui/material/Box"
import Text from "../../../components/Text/Text"
import { GetApplications } from "../../../apollo/queries"
import { useQuery } from "@apollo/client"
import { Container } from "./style"

const Applicant = () => {
  const { loading, error, data } = useQuery(GetApplications)
  if (loading) return "Loading..."
  if (error) return `Error! ${error.message}`
  if (data) {
    console.log(data.applicants)
  }
  const columns = [
    {
      field: "name",
      headerName: " Name",
      width: 150,
      //editable: true,
    },
    {
      field: "State",
      headerName: "State",
      width: 150,
    },
    {
      field: "District",
      headerName: "District",
      width: 110,
    },
    {
      field: "applicantType",
      headerName: "Applicant Type",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
    },
  ]

  const rows = []

  if (data) {
    data.applicants.forEach((item) => {
      rows.push({
        id: item.mobileNumber,
        name: item.name,
        State: item.State,
        District: item.District,
        applicantType: item.applicantType,
      })
    })
  }

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
            checkboxSelection
            disableRowSelectionOnClick
          />
        </Box>
      </Container>
    </>
  )
}

export default Applicant
