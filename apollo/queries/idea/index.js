import { gql } from "@apollo/client"

export const CreateProjectApplications = gql(`
mutation CreateProject (
$City: String!,
$State: String!,
$Country: String!,
$dob: String!,
$email: String!,
$mobileNumber: String!,
$occupation: String!,
$name: String!,
$yourProjectType: String!,
$youAre: String!,
$typeOfPartnership: String!,
$fundingType: String!,
$receivingMode: String!,
$goal: String!,
$targetFor: String!,
$perPersonAmount: String!,
$yourProjectTitle: String!,
$brief: String!,
$marketProblem: String!,
$solution: String!,
$yourProduct: String!,
$businessModel: String!,
$sizeOfMarket: String!,
$currentTransaction: String!,
$competitiveLandscape: String!,
$financialProjection: String!,
$fundNeed: String!,
$equityStructure: String!,
$exitOption: String!,
$selectFundingType: String!,
$fundingStage: String!,
$selectFundingTypeAgain: String!,
$fundingAmount: String!,
$fundingDate: String!,
$linkedinProfile: String!,
$twitterProfile: String!,
$facebookProfile: String!,
$instagramProfile: String!,
$websiteURL: String!,
$thanksNote: String!,
$director: [String!]!,
){CreateProject(
    data: {
      City: $City
      State:$State
      Country:$Country
      dob:$dob
      email:$email
      mobileNumber:$mobileNumber
      occupation:$occupation
      name:$name
      yourProjectType: $yourProjectType
      youAre: $youAre
      typeOfPartnership: $typeOfPartnership
      fundingType: $fundingType
      receivingMode: $receivingMode
      goal: $goal
      targetFor: $targetFor
      perPersonAmount: $perPersonAmount
      yourProjectTitle: $yourProjectTitle
      brief: $brief
      marketProblem: $marketProblem
      solution: $solution
      yourProduct: $yourProduct
      businessModel: $businessModel
      sizeOfMarket: $sizeOfMarket
      currentTransaction: $currentTransaction
      competitiveLandscape: $competitiveLandscape
      financialProjection: $financialProjection
      fundNeed: $fundNeed
      equityStructure: $equityStructure
      exitOption: $exitOption
      selectFundingType: $selectFundingType
      fundingStage: $fundingStage
      selectFundingTypeAgain: $selectFundingTypeAgain
      fundingAmount: $fundingAmount
      fundingDate: $fundingDate
      linkedinProfile: $linkedinProfile
      twitterProfile: $twitterProfile
      facebookProfile: $facebookProfile
      instagramProfile: $instagramProfile
      websiteURL: $websiteURL
      thanksNote: $thanksNote
      director: $director
    }) 
    {
      name
    }
}`)

export const hGetProjectApplications = gql(`

query getProjectApplicants {
  AllProjectDetails {
    City
    State
    Country
    dob
    email
    mobileNumber
    occupation
    name
    yourProjectType
    youAre
    typeOfPartnership
    fundingType
    receivingMode
    goal
    targetFor
    perPersonAmount
    yourProjectTitle
    brief
    marketProblem
    solution
    yourProduct
    businessModel
    sizeOfMarket
    currentTransaction
    competitiveLandscape
    financialProjection
    fundNeed
    equityStructure
    exitOption
    selectFundingType
    fundingStage
    selectFundingTypeAgain
    fundingAmount
    fundingDate
    linkedinProfile
    twitterProfile
    facebookProfile
    instagramProfile
    websiteURL
    thanksNote
    director
  }
}`)
export const GetProjectApplications = gql(`

query getProjectApplicants {
  AllProjectDetails {
    name
    typeOfPartnership
    fundingType
    receivingMode
    goal
    targetFor
    perPersonAmount
    brief
    marketProblem
    solution
    businessModel
    sizeOfMarket
    currentTransaction
    competitiveLandscape
    financialProjection
    fundNeed
    equityStructure
    exitOption
    selectFundingType
    fundingStage
    selectFundingTypeAgain
    fundingAmount
    fundingDate
    linkedinProfile
    twitterProfile
    facebookProfile
    instagramProfile
    websiteURL
    thanksNote
    director
  }
}`)
