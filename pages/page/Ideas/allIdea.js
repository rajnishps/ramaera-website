import { AddressForm } from "./AddressForm"
import { AccountForm } from "./AccountForm"
import { useMultistepForm } from "./useMultistepForm"
import { UserForm } from "./UserForm"
import Button from "../../../components/Button/SubmitButton"
import { CreateProjectApplications } from "../../../apollo/queries/idea"
import { useMutation } from "@apollo/client"
import { useSelector } from "react-redux"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { Container, ButtonContainer } from "./allIdeaStyle.js"

const Ideas = () => {
  const [CreateProject] = useMutation(CreateProjectApplications)

  const CityVar = useSelector((state) => state.project.City)
  const CountryVar = useSelector((state) => state.project.Country)
  const StateVar = useSelector((state) => state.project.State)
  const dobVar = useSelector((state) => state.project.dob)
  const mobileNumberVar = useSelector((state) => state.project.mobileNumber)
  const occupationVar = useSelector((state) => state.project.occupation)
  const nameVar = useSelector((state) => state.project.name)
  const emailVar = useSelector((state) => state.project.email)
  const directorDataVar = useSelector((state) => state.project.directorData)
  const yourProjectTypeVar = useSelector(
    (state) => state.project.yourProjectType
  )
  const youAreVar = useSelector((state) => state.project.youAre)
  const typeOfPartnershipVar = useSelector(
    (state) => state.project.typeOfPartnership
  )
  const fundingTypeVar = useSelector((state) => state.project.fundingType)
  const receivingModeVar = useSelector((state) => state.project.receivingMode)
  const goalVar = useSelector((state) => state.project.goal)
  const targetForVar = useSelector((state) => state.project.targetFor)
  const perPersonAmountVar = useSelector(
    (state) => state.project.perPersonAmount
  )
  const yourProjectTitleVar = useSelector(
    (state) => state.project.yourProjectTitle
  )
  const briefVar = useSelector((state) => state.project.brief)
  const marketProblemVar = useSelector((state) => state.project.marketProblem)
  const solutionVar = useSelector((state) => state.project.solution)
  const yourProductVar = useSelector((state) => state.project.yourProduct)
  const businessModelVar = useSelector((state) => state.project.businessModel)
  const sizeOfMarketVar = useSelector((state) => state.project.sizeOfMarket)
  const currentTransactionVar = useSelector(
    (state) => state.project.currentTransaction
  )
  const competitiveLandscapeVar = useSelector(
    (state) => state.project.competitiveLandscape
  )
  const financialProjectionVar = useSelector(
    (state) => state.project.financialProjection
  )
  const fundNeedVar = useSelector((state) => state.project.fundNeed)
  const equityStructureVar = useSelector(
    (state) => state.project.equityStructure
  )
  const exitOptionVar = useSelector((state) => state.project.exitOption)
  const selectFundingTypeVar = useSelector(
    (state) => state.project.selectFundingType
  )
  const fundingStageVar = useSelector((state) => state.project.fundingStage)
  const selectFundingTypeAgainVar = useSelector(
    (state) => state.project.selectFundingTypeAgain
  )
  const fundingAmountVar = useSelector((state) => state.project.fundingAmount)
  const fundingDateVar = useSelector((state) => state.project.fundingDate)
  const linkedinProfileVar = useSelector(
    (state) => state.project.linkedinProfile
  )
  const twitterProfileVar = useSelector((state) => state.project.twitterProfile)
  const facebookProfileVar = useSelector(
    (state) => state.project.facebookProfile
  )
  const instagramProfileVar = useSelector(
    (state) => state.project.instagramProfile
  )
  const websiteURLVar = useSelector((state) => state.project.websiteURL)
  const thanksNoteVar = useSelector((state) => state.project.thanksNote)

  const { step, isFirstStep, isLastStep, back, next } = useMultistepForm([
    <UserForm />,
    <AddressForm />,
    <AccountForm />,
  ])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!isLastStep) return next()
    console.log("hi")
    /* 
      CreateProject({
        variables: {
          City: CityVar,
          Country: CountryVar,
          State: StateVar,
          dob: dobVar,
          mobileNumber: mobileNumberVar,
          occupation: occupationVar,
          name: nameVar,
          email: emailVar,
          director: directorDataVar,
          yourProjectType: yourProjectTypeVar,
          youAre: youAreVar,
          typeOfPartnership: typeOfPartnershipVar,
          fundingType: fundingTypeVar,
          receivingMode: receivingModeVar,
          goal: goalVar,
          targetFor: targetForVar,
          perPersonAmount: perPersonAmountVar,
          yourProjectTitle: yourProjectTitleVar,
          brief: briefVar,
          marketProblem: marketProblemVar,
          solution: solutionVar,
          yourProduct: yourProductVar,
          businessModel: businessModelVar,
          sizeOfMarket: sizeOfMarketVar,
          currentTransaction: currentTransactionVar,
          competitiveLandscape: competitiveLandscapeVar,
          financialProjection: financialProjectionVar,
          fundNeed: fundNeedVar,
          equityStructure: equityStructureVar,
          exitOption: exitOptionVar,
          selectFundingType: selectFundingTypeVar,
          fundingStage: fundingStageVar,
          selectFundingTypeAgain: selectFundingTypeAgainVar,
          fundingAmount: fundingAmountVar,
          fundingDate: fundingDateVar,
          linkedinProfile: linkedinProfileVar,
          twitterProfile: twitterProfileVar,
          facebookProfile: facebookProfileVar,
          instagramProfile: instagramProfileVar,
          websiteURL: websiteURLVar,
          thanksNote: thanksNoteVar,
        },
      }) */

    clearForm()
  }
  const clearForm = () => {
    toast.success("Thanks for Submission", {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    })
    setTimeout(() => {
      location.reload()
    }, "320000")
  }

  return (
    <Container>
      <form onSubmit={(e) => handleSubmit(e)}>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <div
          style={{
            position: "absolute",
            top: ".5rem",
            right: ".5rem",
            fontSize: ".8rem",
          }}
        >
          {/* {currentStepIndex + 1} / {steps.length} */}
        </div>
        {step}
        <ButtonContainer>
          {!isFirstStep && (
            <div style={{ background: "none", border: "none" }} onClick={back}>
              <Button
                nav
                width="150px"
                height="2.75rem"
                Text="⬅ Back"
                inheight="2.5rem"
              />
            </div>
          )}
          <button style={{ background: "none", border: "none" }} type="submit">
            <Button
              nav
              width="140px"
              height="2.75rem"
              Text={isLastStep ? "Finish" : "Next ⮕"}
              inheight="2.5rem"
            />
          </button>
        </ButtonContainer>
      </form>
    </Container>
  )
}

export default Ideas
