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

const Ideas = () => {
  const [CreateProject] = useMutation(CreateProjectApplications)

  const City1 = useSelector((state) => state.project.City)
  const Country1 = useSelector((state) => state.project.Country)
  const State1 = useSelector((state) => state.project.State)
  const dob1 = useSelector((state) => state.project.dob)
  const mobileNumber1 = useSelector((state) => state.project.mobileNumber)
  const occupation1 = useSelector((state) => state.project.occupation)
  const name1 = useSelector((state) => state.project.name)
  const email1 = useSelector((state) => state.project.email)
  const directorData1 = useSelector((state) => state.project.directorData)
  const yourProjectType1 = useSelector((state) => state.project.yourProjectType)
  const youAre1 = useSelector((state) => state.project.youAre)
  const typeOfPartnership1 = useSelector(
    (state) => state.project.typeOfPartnership
  )
  const fundingType1 = useSelector((state) => state.project.fundingType)
  const receivingMode1 = useSelector((state) => state.project.receivingMode)
  const goal1 = useSelector((state) => state.project.goal)
  const targetFor1 = useSelector((state) => state.project.targetFor)
  const perPersonAmount1 = useSelector((state) => state.project.perPersonAmount)
  const yourProjectTitle1 = useSelector(
    (state) => state.project.yourProjectTitle
  )
  const brief1 = useSelector((state) => state.project.brief)
  const marketProblem1 = useSelector((state) => state.project.marketProblem)
  const solution1 = useSelector((state) => state.project.solution)
  const yourProduct1 = useSelector((state) => state.project.yourProduct)
  const businessModel1 = useSelector((state) => state.project.businessModel)
  const sizeOfMarket1 = useSelector((state) => state.project.sizeOfMarket)
  const currentTransaction1 = useSelector(
    (state) => state.project.currentTransaction
  )
  const competitiveLandscape1 = useSelector(
    (state) => state.project.competitiveLandscape
  )
  const financialProjection1 = useSelector(
    (state) => state.project.financialProjection
  )
  const fundNeed1 = useSelector((state) => state.project.fundNeed)
  const equityStructure1 = useSelector((state) => state.project.equityStructure)
  const exitOption1 = useSelector((state) => state.project.exitOption)
  const selectFundingType1 = useSelector(
    (state) => state.project.selectFundingType
  )
  const fundingStage1 = useSelector((state) => state.project.fundingStage)
  const selectFundingTypeAgain1 = useSelector(
    (state) => state.project.selectFundingTypeAgain
  )
  const fundingAmount1 = useSelector((state) => state.project.fundingAmount)
  const fundingDate1 = useSelector((state) => state.project.fundingDate)
  const linkedinProfile1 = useSelector((state) => state.project.linkedinProfile)
  const twitterProfile1 = useSelector((state) => state.project.twitterProfile)
  const facebookProfile1 = useSelector((state) => state.project.facebookProfile)
  const instagramProfile1 = useSelector(
    (state) => state.project.instagramProfile
  )
  const websiteURL1 = useSelector((state) => state.project.websiteURL)
  const thanksNote1 = useSelector((state) => state.project.thanksNote)

  const { step, isFirstStep, isLastStep, back, next } = useMultistepForm([
    <UserForm />,
    <AddressForm />,
    <AccountForm />,
  ])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!isLastStep) return next()
    CreateProject({
      variables: {
        City: City1,
        Country: Country1,
        State: State1,
        dob: dob1,
        mobileNumber: mobileNumber1,
        occupation: occupation1,
        name: name1,
        email: email1,
        director: directorData1,
        yourProjectType: yourProjectType1,
        youAre: youAre1,
        typeOfPartnership: typeOfPartnership1,
        fundingType: fundingType1,
        receivingMode: receivingMode1,
        goal: goal1,
        targetFor: targetFor1,
        perPersonAmount: perPersonAmount1,
        yourProjectTitle: yourProjectTitle1,
        brief: brief1,
        marketProblem: marketProblem1,
        solution: solution1,
        yourProduct: yourProduct1,
        businessModel: businessModel1,
        sizeOfMarket: sizeOfMarket1,
        currentTransaction: currentTransaction1,
        competitiveLandscape: competitiveLandscape1,
        financialProjection: financialProjection1,
        fundNeed: fundNeed1,
        equityStructure: equityStructure1,
        exitOption: exitOption1,
        selectFundingType: selectFundingType1,
        fundingStage: fundingStage1,
        selectFundingTypeAgain: selectFundingTypeAgain1,
        fundingAmount: fundingAmount1,
        fundingDate: fundingDate1,
        linkedinProfile: linkedinProfile1,
        twitterProfile: twitterProfile1,
        facebookProfile: facebookProfile1,
        instagramProfile: instagramProfile1,
        websiteURL: websiteURL1,
        thanksNote: thanksNote1,
      },
    })

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
    }, "3200")
  }

  return (
    <div
      style={{
        position: "relative",
        background: "white",
        padding: "2rem",
        margin: "1rem",
        borderRadius: ".5rem",
        maxWidth: "max-content",
        color: "black",
      }}
    >
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
        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            gap: ".5rem",
            justifyContent: "flex-end",
          }}
        >
          {!isFirstStep && (
            <div style={{ background: "none", border: "none" }} onClick={back}>
              <Button
                nav
                width="140px"
                height="2.75rem"
                Text="Back"
                inheight="2.5rem"
              />
            </div>
          )}
          <button style={{ background: "none", border: "none" }} type="submit">
            <Button
              nav
              width="140px"
              height="2.75rem"
              Text={isLastStep ? "Finish" : "Next"}
              inheight="2.5rem"
            />
          </button>
        </div>
      </form>
    </div>
  )
}

export default Ideas
