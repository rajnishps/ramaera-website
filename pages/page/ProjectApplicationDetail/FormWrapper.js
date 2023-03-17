import Text from "../../../components/Text/Text"
export function FormWrapper({ title, children }) {
  return (
    <>
      <Text
        Text="Ramaera Industries LIMITED"
        lg="linear-gradient(to right, #ffa73d, gold)"
        font
        size="clamp(3rem, 1.5vw, 2rem)"
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
        Text={"Project Application Details"}
        lg="linear-gradient(to right, #000, #000)"
        font
        size="clamp(1.4rem, 1.5vw, 2rem)"
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
      <div
        style={{
          display: "grid",
          gap: "1rem 0",
          justifyContent: "flex-start",
          gridTemplateColumns: "auto minmax(auto, 400px)",
        }}
      >
        {children}
      </div>
    </>
  )
}
const StyleImage = () => {
  return <div>StyleImage</div>
}

export default StyleImage
