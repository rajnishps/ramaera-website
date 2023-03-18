import styled from "styled-components";
import Text from "../../../../../components/Text/Text";
import Button from "../../../../../components/Button/Button";

const Texts = styled.div`
  width: 38vw;
  @media only screen and (max-width: 768px) {
    position: absolute;
    right: 35vw;
    top: 20vh;
  }
  @media only screen and (max-width: 450px) {
    padding: 30px 10px 0 10px;
    right: 26vw;
  }
`;
const ButtonContainer = styled.div`
  margin-left: 50vw;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const PromtContainer1 = () => {
  return (
    <Texts>
      <Text
        Text="Empowering young talent and promoting entrepreneurship"
        color="#fff"
        size="26px"
        lh="32px"
        align="left"
        fw="600"
        m="0 0 0 0"
        mta="center"
        padding="1.5vw 0"
        mpadding="0"
        mwidth="90vw"
        mmwidth="85vw"
        mm="20px 0 0 0"
      />
      <Text
        Text="India is the hub of entrepreneurial talent and we plan to provide these young talents the right resources. Ramaera Industries aims to give wings to the dreams of the CEOs of tomorrow."
        color="#fff"
        size="14px"
        lh="23px"
        align="left"
        fw="200"
        m="0 4rem 0 0"
        msize="12px"
        mta="center"
        padding="1vw 8vw  1vw 0"
        mpadding="0"
        mwidth="90vw"
        mmwidth="85vw"
      />
      {/* <ButtonContainer>
        <Button Text="Read More" m="0" lightborder fontSize="12px" bg="none" />
      </ButtonContainer> */}
    </Texts>
  );
};

export default PromtContainer1;
