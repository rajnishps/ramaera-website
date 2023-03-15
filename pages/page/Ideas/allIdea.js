import { useState } from "react"
import { AddressForm } from "./AddressForm"
import { AccountForm } from "./AccountForm"
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
  function updateFields(fields) {
    setData((prev) => {
      return { ...prev, ...fields }
    })
  }
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <UserForm {...data} updateFields={updateFields} />,
      <AddressForm {...data} updateFields={updateFields} />,
      <AccountForm {...data} updateFields={updateFields} />,
    ])

  const handleSubmit = async () => {
    const isValid = validateForm()
    //setLoading(true);
    if (isValid) {
      try {
        const resp = await login({
          variables: {
            pw_id: username,
            password: password,
          },
        })
        const data = resp.data.login
        for (let key of Object.keys(data)) {
          localStorage.setItem(key, data[key])
        }
        router.reload()
      } catch (err) {
        toast.error(err.message)
      }
    }
  }
  function onSubmit(e) {
    e.preventDefault()
    if (!isLastStep) return next()
    alert("Successfully Submitted")
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
      <form onSubmit={onSubmit}>
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
