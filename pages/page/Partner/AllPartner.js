import { useState } from "react"
import { useMultistepForm } from "./useMultistepForm"
import { UserForm } from "./UserForm"
import Button from "../../../components/Button/SubmitButton"
import { CreateApplications } from "../../../apollo/queries/index"
import { useMutation } from "@apollo/client"
const INITIAL_DATA = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  password: "",
}
const Ideas = () => {
  const [data, setData] = useState(INITIAL_DATA)
  const [createApp] = useMutation(CreateApplications)
  function updateFields(fields) {
    setData((prev) => {
      return { ...prev, ...fields }
    })
  }
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([<UserForm updateFields={updateFields} />])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(data)
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
      <form onSubmit={handleSubmit}>
        <div
          style={{
            position: "absolute",
            top: ".5rem",
            right: ".5rem",
            fontSize: ".8rem",
          }}
        >
          {/*{currentStepIndex + 1} / {steps.length}*/}
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
          <button style={{ background: "none", border: "none" }} type="submit">
            <Button
              nav
              width="140px"
              height="2.75rem"
              Text="Submit"
              inheight="2.5rem"
            />
          </button>
        </div>
      </form>
    </div>
  )
}

export default Ideas
