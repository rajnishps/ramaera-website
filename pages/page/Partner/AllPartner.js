import { UserForm } from "./UserForm"
import Button from "../../../components/Button/SubmitButton"
import { CreateApplications } from "../../../apollo/queries/index"
import { useMutation } from "@apollo/client"
import { useSelector } from "react-redux"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const Ideas = () => {
  const [createApplication, { data, loading, error }] =
    useMutation(CreateApplications)
  const name1 = useSelector((state) => state.application.name)
  const applicantType1 = useSelector((state) => state.application.applicantType)
  const applicantAddress1 = useSelector(
    (state) => state.application.applicantAddress
  )
  const email1 = useSelector((state) => state.application.email)
  const firmName1 = useSelector((state) => state.application.firmName)
  const mobileNumber1 = useSelector((state) => state.application.mobileNumber)
  const District1 = useSelector((state) => state.application.District)
  const State1 = useSelector((state) => state.application.State)

  const handleSubmit = (e) => {
    e.preventDefault()
    createApplication({
      variables: {
        name: name1,
        applicantType: applicantType1,
        applicantAddress: applicantAddress1,
        email: email1,
        firmName: firmName1,
        mobileNumber: mobileNumber1,
        District: District1,
        State: State1,
      },
    })
    clearForm()
  }
  const clearForm = () => {
    toast.success("Application Submitted!", {
      position: "bottom-center",
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
        ></div>
        <UserForm />
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
