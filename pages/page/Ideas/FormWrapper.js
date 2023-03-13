import Text from "../../../components/Text/Text";
import StepperSteps from "./Stepper";
export function FormWrapper({ number, title, children }) {
  return (
    <>
      <Text
        Text="Ramaera Industries"
        lg="linear-gradient(to right, #ffa73d, gold)"
        font
        size="clamp(3.6rem, 1.5vw, 2rem)"
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
        mta="left"
        mlh="unset"
      />

      <Text
        Text="We assist in the development,expansion, and support of"
        lg="linear-gradient(to right, #000, #000)"
        size="clamp(1.2rem, 1vw, 1.1rem)"
        fw="400"
        align="center"
        lh="30px"
        xmsize="clamp(2.4rem, 1.5vw, 2rem)"
        xssize="clamp(2.4rem, 1.5vw, 2rem)"
        msize="2rem"
        mwidth="100%"
        padding="0"
        mpadding="0"
        mta="left"
        mlh="unset"
      />

      <Text
        Text=" companies of all shapes and sizes."
        lg="linear-gradient(to right, #000, #000)"
        size="clamp(1.2rem, 1vw, 1.1rem)"
        fw="400"
        align="center"
        lh="30px"
        m="0 0 1rem 0"
        xmsize="clamp(2.4rem, 1.5vw, 2rem)"
        xssize="clamp(2.4rem, 1.5vw, 2rem)"
        msize="2rem"
        mwidth="100%"
        padding="0"
        mpadding="0"
        mta="left"
        mlh="unset"
      />

      <Text
        Text={title}
        lg="linear-gradient(to right, #000, #000)"
        font
        size="clamp(2.4rem, 1.5vw, 2rem)"
        fw="200"
        align="center"
        lh="50px"
        m="0 0 2rem 0"
        xmsize="clamp(2.4rem, 1.5vw, 2rem)"
        xssize="clamp(2.4rem, 1.5vw, 2rem)"
        msize="2rem"
        mwidth="100%"
        padding="0"
        mpadding="0"
        mta="left"
        mlh="unset"
      />
      <StepperSteps activeStep={number} />
      <div
        style={{
          display: "grid",
          gap: "1rem .5rem",
          justifyContent: "flex-start",
          gridTemplateColumns: "auto minmax(auto, 400px)",
        }}
      >
        {children}
      </div>
    </>
  );
}
