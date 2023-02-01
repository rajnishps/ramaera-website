import styled from "styled-components"
import Text from "../../../../components/Text/Text"
import Button from "../../../../components/Button/Button"

const Texts = styled.div`
  position: absolute;
  top: 86vh;
  left: 25vw;
  width: 35vw;
`
const PromtContainer2 = () => {
  return (
    <Texts>
      <Text
        Text="Strengthened by the people, for the benefit of the people"
        color="#fff"
        size="32px"
        lh="32px"
        align="left"
        fw="700"
        m="0 0 2rem 0"
      />
      <Text
        Text="The trust of Ramaera family has been the pillar of our phenomenal growth. This has enabled us to sustain millions of livelihoods and employ lakhs of people, turning our vision of finanicial independence of every Indian into reality."
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

export default PromtContainer2
