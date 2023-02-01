import styled from "styled-components"
import Text from "../../../../components/Text/Text"
import Button from "../../../../components/Button/Button"

const Texts = styled.div`
  position: absolute;
  top: 35vh;
  left: 45vw;
  width: 35vw;
`
const PromtContainer1 = () => {
  return (
    <Texts>
      <Text
        Text="Empowering young talent and promoting entrepreneurships"
        color="#fff"
        size="32px"
        lh="32px"
        align="left"
        fw="700"
        m="0 0 2rem 0"
      />
      <Text
        Text="India is the hub of entrepreneurial talent and we plan to provide these young talents the right resources. Ramaera Industries aims to give wings to the dreams of the CEOs of tomorrow"
        color="#fff"
        size="16px"
        lh="18px"
        align="left"
        fw="200"
        m="0 4rem 2rem 0"
      />
      <Button Text="Read More" m="0" lightBorder fontSize="12px" bg="none" />
    </Texts>
  )
}

export default PromtContainer1
