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
    data: {
      name: $name
      applicantType: $applicantType
      applicantAddress: $applicantAddress
      email: $email
      firmName: $firmName
      mobileNumber: $mobileNumber
      District: $District
      State: $State
    }) 
    {
      name
    }
}`)

export const CreateContactResponse = gql(`
mutation createUs (
  $name: String!,
      $email: String!
      $company: String!,
      $Subject: String!,
     $message: String!,
){createContactUsResponse(
    data: {
      name: $name
      email: $email
      company: $company
      Subject: $Subject
      message: $message
    }) 
    {
      name
    }
}`)

export const LogIn = gql(`
mutation loginUser (
$email: String!,
$password: String!,
){login(
    data: {
      email: $email
      password: $password
    }) 
    {
      accessToken
    }
}`)

export const GetApplications = gql(`
  query getAllApps{
  applicants{
    name
    email
    District
    State
    applicantType
    applicantAddress
    firmName
    mobileNumber
  }
}`)

export const GetContactResponses = gql(`
  query getContactResponses{
    contactUsRepsonses{
      name
      email
      company
      Subject
      message
  }
}`)
