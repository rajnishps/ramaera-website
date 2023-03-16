import { gql } from "@apollo/client"

export const CreateProjectApplications = gql(`
mutation CreateProject ($City: String!,
$State: String!,
$Country: String!,
$dob: String!,
$email: String!,
$mobileNumber: String!,
$occupation: String!,
$name: String!,
$director: [String!],
){CreateProject(
    data: {
      City: $City
      Country:$Country
      State:$State
      dob:$dob
      mobileNumber:$mobileNumber
      occupation:$occupation
      name:$name
      email:$email
      director:$director
      
    }) 
    {
      name
      id
    }
}`)

export const CreateProjectField = gql(`
mutation CreateProjectDataField (
$fieldName: String!
$fieldValue: String!
$projectId: String!
  
){CreateProjectDataField(
    data: {
      fieldName: $fieldName
      fieldValue: $fieldValue
      projectId: $projectId
    }) 
    {  
      id
    }
}`)

//  const ProjectId = useSelector((state) => state.projectField.ProjectId)
