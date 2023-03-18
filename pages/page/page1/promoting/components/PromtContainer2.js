import styled from "styled-components";
import Text from "../../../../../components/Text/Text";
import Button from "../../../../../components/Button/Button";

const Texts = styled.div`
  width: 36vw;
  @media only screen and (max-width: 768px) {
    position: absolute;
    left: -20vw;
    top: 30vh;
  }
  @media only screen and (max-width: 450px) {
    top: 15vh;
  }
  @media only screen and (max-width: 450px) {
    top: 0vh;
  }
`;
const ButtonContainer = styled.div`
  margin-right: 50vw;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const PromtContainer2 = () => {
  return (
    <Texts>
      <Text
        Text="Strengthened by the people, for the benefit of the people"
        color="#fff"
        size="26px"
        lh="32px"
        align="left"
        fw="600"
        m="0"
        mta="center"
        padding="1.5vw 2vw 1.5vw 5vw"
        mpadding="0 "
        mwidth="85vw"
        mmwidth="85vw"
      />
      <Text
        Text="The trust of Ramaera family has been the pillar of our phenomenal growth. This has enabled us to sustain millions of livelihoods and employ lakhs of people, turning our vision of finanicial independence of every Indian into reality."
        color="#fff"
        size="14px"
        lh="23px"
        align="left"
        fw="200"
        m="0 1.5rem 0 0"
        msize="12px"
        mta="center"
        padding="1vw 2vw 2vw 5vw"
        mpadding="0"
        mwidth="85vw"
        mmwidth="85vw"
      />
      {/* <ButtonContainer>
        <Button Text="Read More" m="0" lightborder fontSize="12px" bg="none" />
      </ButtonContainer> */}
    </Texts>
  );
};

export default PromtContainer2;
