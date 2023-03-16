import { AddressForm } from "./AddressForm"
import { AccountForm } from "./AccountForm"
import { useMultistepForm } from "./useMultistepForm"
import { UserForm } from "./UserForm"
import Button from "../../../components/Button/SubmitButton"
import { CreateProjectApplications } from "../../../apollo/queries/idea"
import { CreateProjectField } from "../../../apollo/queries/idea"
import { useMutation } from "@apollo/client"
import { useSelector, useDispatch } from "react-redux"
import { changeProjectId } from "../../../state/slice/projectSlice"

const Ideas = () => {
  const dispatch = useDispatch()

  const [CreateProject, { data, loading, error }] = useMutation(
    CreateProjectApplications
  )
  const [CreateProjectDataField] = useMutation(CreateProjectField)
  const ProjectId = useSelector((state) => state.projectField.ProjectId)
  const fieldName1 = "11122"
  const FieldValue1 = "12"

  const City1 = useSelector((state) => state.project.City)
  const Country1 = useSelector((state) => state.project.Country)
  const State1 = useSelector((state) => state.project.State)
  const dob1 = useSelector((state) => state.project.dob)
  const mobileNumber1 = useSelector((state) => state.project.mobileNumber)
  const occupation1 = useSelector((state) => state.project.occupation)
  const name1 = useSelector((state) => state.project.name)
  const email1 = useSelector((state) => state.project.email)
  const directorData1 = useSelector((state) => state.project.directorData)
  if (data) {
    dispatch(changeProjectId(data.CreateProject.id))
  }

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
      },
    })
    const dataaaa = CreateProjectDataField({
      variables: {
        fieldName: fieldName1,
        fieldValue: FieldValue1,
        projectId: ProjectId,
      },
    })
    console.log("iddddddddd====d=d=d==d=d=d=d=d====", data.CreateProject)
    clearForm()
  }
  const clearForm = () => {
    alert("Your Applicaion is Submitted, Thank You!")
    // location.reload()
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
