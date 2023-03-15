import { gql } from "@apollo/client"

export const CreateApplications = gql(`
mutation creator ($District: String!,
$State: String!,
$applicantAddress: String!,
$applicantType: ApplicantType!,
$email: String!,
$firmName: String!,
$mobileNumber: String!,
$name: String!,
){createApplication(
    data: {name: $name
      applicantType: $applicantType
      applicantAddress: $applicantAddress
      email: $email
      firmName: $firmName
      mobileNumber: $mobileNumber
      District: $District
      State: $State
    }) {
      name
    }
  
}`)
