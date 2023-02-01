import styled from "styled-components"
import Text from "../../../../components/Text/Text"

const Div = styled.div`
  display: flex;
  margin-bottom: 300px;
  align-items: center;
  flex-direction: column;
  width: 10vw;
`
const Image = styled.img`
  height: 100px;
  width: 100px;
`
const Logo = () => {
  return (
    <Div>
      <Image src="/logo/logo.png" />
      <Text
        Text="Ramaera Industries"
        lg="linear-gradient(90deg, #E65C00 0%, #F9D423 100%)"
        font
        size="16px"
        align="center"
      />
    </Div>
  )
}

export default Logo
