import { useState } from "react"
import Text from "../../../../components/Text/Text"
import Button from "../../../../components/Button/SubmitButton"
import { CreateContactResponse } from "../../../../apollo/queries/index"
import { useMutation } from "@apollo/client"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import {
  Box,
  BackgroundImg,
  Input,
  Container,
  HeaderIcon,
  HeaderIcon1,
  HeaderIcon2,
  Form,
  Fline1,
  Fline2,
  ButtonHolder,
  Fline3,
  TextArea,
} from "./style"

const index = () => {
  const [createContactUsResponse, { data, loading, error }] = useMutation(
    CreateContactResponse
  )
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")
  const [Subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    const darara = createContactUsResponse({
      variables: {
        name: name,
        email: email,
        company: company,
        Subject: Subject,
        message: message,
      },
    })
    clearForm()
  }
  const clearForm = () => {
    toast.success("Message Submitted!", {
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
    <>
      <Box>
        <BackgroundImg src="/content/Background.png" />
        <Container>
          <Text
            Text="GET IN TOUCH TODAY"
            font
            size="3rem"
            fw="100"
            lh="70px"
            xmsize="4rem"
            xssize="3rem"
            msize="1.5rem"
            padding="0"
            mpadding="0"
          />
          <HeaderIcon>
            <HeaderIcon1>
              <div>
                <img src="/content/mailIcon.png" alt="mail Icon" />
                <b>Mail us</b>
              </div>
              <p>support@ramaera.com</p>
            </HeaderIcon1>
            <HeaderIcon2>
              <div>
                <img src="/content/phoneIcon.png" alt="phone Icon" />
                <b>Contact us</b>
              </div>
              <p>0120-4152818</p>
            </HeaderIcon2>
          </HeaderIcon>
          <Form>
            <form
              onSubmit={(e) => {
                handleSubmit(e)
              }}
            >
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

              <Fline1>
                <div>
                  <label>Full Name</label>
                  <br />
                  <Input
                    type="text"
                    onChange={(e) => {
                      setName(e.target.value)
                    }}
                    placeholder="Enter Your Name"
                    required
                  />
                </div>

                <div>
                  <label>Your Email</label>
                  <br />
                  <Input
                    type="email"
                    onChange={(e) => {
                      setEmail(e.target.value)
                    }}
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </Fline1>

              <Fline2>
                <div>
                  <label>Company</label>
                  <br />
                  <Input
                    type="text"
                    placeholder="Enter Your Company Name"
                    required
                    onChange={(e) => {
                      setCompany(e.target.value)
                    }}
                  />
                </div>

                <div>
                  <label>Subject </label>
                  <br />
                  <Input
                    type="text"
                    onChange={(e) => {
                      setSubject(e.target.value)
                    }}
                    placeholder="How can I help you"
                    required
                  />
                </div>
              </Fline2>

              <Fline3>
                <label>Message</label>
                <br />
                <TextArea
                  type="textarea"
                  rows={10}
                  cols={35}
                  onChange={(e) => {
                    setMessage(e.target.value)
                  }}
                  placeholder="Hello there ,I would like to talk about..."
                  required
                />
              </Fline3>
              <ButtonHolder>
                <button
                  type="submit"
                  style={{ background: "none", border: "none" }}
                >
                  <Button
                    br="999px"
                    bg="linear-gradient(to left,#ffd456,#ff9765)"
                    width="200px"
                    height="50px"
                    noLineHeight
                    Text="Send Message "
                    fontSize="1rem"
                    padding="10px 30px"
                    fw="500"
                    sh
                  />
                </button>
              </ButtonHolder>
            </form>
          </Form>
        </Container>
      </Box>
    </>
  )
}

export default index
