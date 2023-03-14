import { gql } from "@apollo/client"

export const CreateApplications = gql(`
mutation creator {
  createApplication(
    data: {name: $name
      applicantType: $applicantType
      applicantAddress: $applicantAddress
      email: $email
      firmName: $firmName
      mobileNumber: $mobileNumber
      District: $District
      State: $State
    }) 
  
}`)
