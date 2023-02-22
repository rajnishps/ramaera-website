import React from "react"
import {
  Box,
  Input,
  Container,
  HeaderIcon,
  HeaderIcon1,
  HeaderIcon2,
  Form,
  Fline1,
  Fline2,
  Button,
  Fline3,
  Main,
  TextArea,
} from "./style"

const index = () => {
  return (
    <>
      <Box>
        <Main>
          <img src="/content/Background.png" />
        </Main>
        <Container>
          <h2>GET IN TOUCH TODAYS</h2>
          <HeaderIcon>
            <HeaderIcon1>
              {" "}
              <div>
                {" "}
                <img src="/content/mailIcon.png" />
                <b>Mail us</b>{" "}
              </div>
              <p>suport@gmail.com</p>
            </HeaderIcon1>
            <HeaderIcon2>
              <div>
                <img src="/content/phoneIcon.png" /> <b>Contact us</b>
              </div>
              <p>01199936737</p>
            </HeaderIcon2>
          </HeaderIcon>

          <Form>
            <Fline1>
              <div>
                <label>Full Name*</label>
                <br />
                <Input type="text" placeholder="Enter Your Name" required />
              </div>

              <div>
                <label>Your Email</label>
                <br />
                <Input type="email" placeholder="Enter your email" required />
              </div>
            </Fline1>

            <Fline2>
              <div>
                <label>Company *</label>
                <br />
                <Input
                  type="text"
                  placeholder="Enter Your Company Name"
                  required
                />
              </div>

              <div>
                <label>Subject </label>
                <br />
                <Input type="text" placeholder="How can I help you" required />
              </div>
            </Fline2>

            <Fline3>
              <label>Message*</label>
              <br />
              <TextArea
                type="textarea"
                rows={10}
                cols={35}
                placeholder="hellow there!!!!!!"
                required
              />
            </Fline3>

            <Button>
              <button>Message Send</button>
            </Button>
          </Form>
        </Container>
      </Box>
    </>
  )
}

export default index
