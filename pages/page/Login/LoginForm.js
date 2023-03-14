import Text from "../../../components/Text/Text";
import Button from "../../../components/Button/SubmitButton";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import {
  Container,
  FormBox,
  HeaderForm,
  Social,
  LoginContainer,
  LoginTitle,
} from "./style";
import { margin } from "@mui/system";

function onSubmit(e) {
  e.preventDefault();
}

const LoginForm = () => {
  return (
    <Container>
      <FormBox onSubmit={onSubmit}>
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
              style={{
                width: "380px",
                height: "45px",
                paddingLeft: "60px",
                marginTop: "0",
              }}
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
  );
};

export default LoginForm;
