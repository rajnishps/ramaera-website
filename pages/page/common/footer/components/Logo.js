import Link from "next/link";
import styled from "styled-components";
import Text from "../../../../../components/Text/Text";

const Div = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 10vw;
  margin: 50px 50px;
  @media only screen and (max-width: 1000px) {
    margin: 0 0 0 0;
    margin-bottom: 20px;
  }
`;
const Image = styled.img`
  height: 100px;
  width: 115px;
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
          size="16px"
          align="center"
        />
      </Div>
    </Link>
  );
};

export default Logo;
