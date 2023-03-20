import Text from "../../../components/Text/Text"
import Button from "../../../components/Button/SubmitButton"
import EmailIcon from "@mui/icons-material/Email"
import LockIcon from "@mui/icons-material/Lock"
import { LogIn } from "../../../apollo/queries/index"
import { useMutation } from "@apollo/client"
import { useSelector, useDispatch } from "react-redux"
import { useRouter } from "next/router"
import { setAccessToken } from "../../../state/slice/accessTokenSlice"
import { Container, FormBox, LoginContainer, LoginTitle } from "./style"
import { getEmail, getPassword } from "../../../state/slice/userSlice"

const LoginForm = () => {
  const router = useRouter()

  const [loginUser] = useMutation(LogIn)
  const password1 = useSelector((state) => state.logInUser.password)
  const email1 = useSelector((state) => state.logInUser.email)
  const dispatch = useDispatch()

  const handleSubmit = async (e) => {
    e.preventDefault()
    // console.log(data.login)
    try {
      //console.log(window.localStorage.getItem("access_token"))
      const data1 = await loginUser({
        variables: {
          email: email1,
          password: password1,
        },
      })
      window.localStorage.setItem("accessToken", data1.data.login.accessToken)
      //todo add accesstoken guards to protected links
      dispatch(setAccessToken(data1.data.login.accessToken))

      // setTimeout(myStopFunction, 2000)

      router.push("/DistributionChannelResponses")
    } catch (err) {
      if (err) {
        //console.log(err)
      }
    }
  }

  /* function myStopFunction() {
    router.push("DistributionChannelResponses")
  } */
  return (
    <Container>
      <FormBox onSubmit={(e) => handleSubmit(e)}>
        <Text
          Text="EMPLOYEE"
          lg="linear-gradient(to right, #ffa73d, gold)"
          font
          size="clamp(2.2rem, 1.2vw, 1.5rem)"
          fw="400"
          align="center"
          lh="50px"
          m="0 0 1rem 0"
          xmsize="clamp(2.4rem, 1.5vw, 2rem)"
          xssize="clamp(2.4rem, 1.5vw, 2rem)"
          msize="2rem"
          mwidth="100%"
          padding="0"
          mpadding="0"
          mta="center"
          mlh="unset"
        />
        <Text
          Text="LOGIN"
          lg="linear-gradient(to right, #ffa73d, gold)"
          font
          size="clamp(2.2rem, 1.2vw, 1.5rem)"
          fw="400"
          align="center"
          lh="50px"
          m="0 0 1rem 0"
          xmsize="clamp(2.4rem, 1.5vw, 2rem)"
          xssize="clamp(2.4rem, 1.5vw, 2rem)"
          msize="2rem"
          mwidth="100%"
          padding="0"
          mpadding="0"
          mta="center"
          mlh="unset"
        />

        <LoginContainer>
          <LoginTitle>
            <EmailIcon
              style={{
                position: "absolute",
                transform: "translateX(1vmax)",
                fontSize: "30px",
                color: "#ff8800",
                marginTop: "7px",
              }}
            />
            <input
              type="email"
              placeholder="Email Id"
              required
              onChange={(e) => dispatch(getEmail(e.target.value))}
              style={{
                width: "380px",
                height: "45px",
                paddingLeft: "60px",
                marginTop: "0",
              }}
            />
          </LoginTitle>
          <LoginTitle>
            <LockIcon
              style={{
                position: "absolute",
                transform: "translateX(1vmax)",
                fontSize: "30px",
                color: "#ff8800",
                marginTop: "6px",
              }}
            />
            <input
              type="password"
              placeholder="Password"
              required
              onChange={(e) => dispatch(getPassword(e.target.value))}
              style={{
                width: "380px",
                height: "45px",
                paddingLeft: "60px",
                marginTop: "0",
              }}
              className="loginInput"
            />
          </LoginTitle>
          <button type="submit" style={{ background: "none", border: "none" }}>
            <Button
              width="150px"
              padding="0.85rem 1rem"
              height="2.75rem"
              Text="Login"
              inheight="2rem"
              sh="none"
              m="50px 0 0 0"
            />
          </button>
        </LoginContainer>
      </FormBox>
    </Container>
  )
}

export default LoginForm
