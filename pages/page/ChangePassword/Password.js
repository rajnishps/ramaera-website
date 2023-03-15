import Text from "../../../components/Text/Text";
import Button from "../../../components/Button/SubmitButton";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import LockIcon from "@mui/icons-material/Lock";
import LockResetIcon from "@mui/icons-material/LockReset";

import { Container, FormBox, LoginContainer, LoginTitle } from "./style";

function onSubmit(e) {
  e.preventDefault();
  if (password !== confirmPassword) alert("Password does not match");
}

const Password = () => {
  return (
    <Container>
      <FormBox onSubmit={onSubmit}>
        <Text
          Text="UPDATE PASSWORD"
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
            <LockOpenIcon
              style={{
                position: "absolute",
                transform: "translateX(1vmax)",
                fontSize: "30px",
                color: "#ff8800",
                marginTop: "7px",
              }}
            />
            <input
              type="password"
              placeholder="Old Password"
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
              placeholder="New Password"
              required
              id="password"
              style={{
                width: "380px",
                height: "45px",
                paddingLeft: "60px",
                marginTop: "0",
              }}
            />
          </LoginTitle>
          <LoginTitle>
            <LockResetIcon
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
              placeholder="Confirm Password"
              required
              id="confirmPassword"
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
              Text="Update"
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

export default Password;
