import React from "react"
import Text from "../../../../components/Text/Text"
import Button from "../../../../components/Button/Button"

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
            <Fline1>
              <div>
                <label>Full Name</label>
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
                <label>Company</label>
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
              <label>Message</label>
              <br />
              <TextArea
                type="textarea"
                rows={10}
                cols={35}
                placeholder="Hello there ,I would like to talk about..."
                required
              />
            </Fline3>
            <ButtonHolder>
              <Button
                br="999px"
                bg="linear-gradient(to left,#ffd456,#ff9765)"
                width="20px"
                height="50px"
                Text="Send Message "
                fontSize="1rem"
                padding="10px 30px"
                fw="500"
                sh
              />
            </ButtonHolder>
          </Form>
        </Container>
      </Box>
    </>
  )
}

export default index
