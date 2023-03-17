import Link from "next/link";
import styled from "styled-components";
import Text from "../../../../../components/Text/Text";

const Div = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  //width: 10vw;
  //margin: 50px 50px;
  width: 60%;
  margin: 15px 0px;
  position: relative;
  left: -50px;
  @media only screen and (max-width: 1000px) {
    margin: 0 0 0 0;
    margin-bottom: 20px;
    left: unset;
    width: auto;
  }
`;
const Image = styled.img`
  /* height: 150px;
  width: 165px; */
  width: 80%;
`;
const Logo = () => {
  return (
    <Link href="/">
      <Div>
        <Image src="/logo/logo.png" alt="logo" />
        <Text
          Text="Ramaera Industries"
          lg="linear-gradient(90deg, #E65C00 0%, #F9D423 100%)"
          font
          size="25px"
          align="center"
        />
      </Div>
    </Link>
  );
};

export default Logo;
