import React from "react";
import styled from "styled-components";
import Flex from "../../../../../components/Styling/Flex";
import Text from "../../../../../components/Text/Text";
import Link from "next/link";
import TransparentButton from "../../../../../components/TransparentButton/TransparentButton";

const StyleTextContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  // background: red;
  width: 50rem;
  margin: 2rem 0 -8rem 0;
  @media only screen and (max-width: 768px) {
    position: absolute;
    margin: 0;
    width: 100vw;
    top: 0vh;
    overflow: hidden;
  }
`;
const TextContainer = () => {
  return (
    <StyleTextContainer>
      <Flex mcolumn>
        <img
          loading="lazy"
          src="/content/y.png"
          alt="line"
          style={{
            height: "6.75rem",
            width: "7rem",
            borderRadius: "50%",
          }}
        />
        <div>
          <Text
            Text="Making"
            size="3.2rem"
            lg="linear-gradient(90deg, #FFE259 0%, #FFA751 100%);"
            lh="0px"
            mlh="30px"
            xssize="3vw"
            msize="2rem"
            mta="center"
          />
          <Text
            Text="accommodations easier"
            size="2.6rem"
            lg="linear-gradient(90deg, #FFE259 0%, #FFA751 100%);"
            lh="10px"
            mlh="30px"
            xssize="3vw"
            msize="1.6rem"
            mta="center"
          />
        </div>
      </Flex>
      <Text
        Text="Introducing capsule hotels in places of extreme need such as examination centres and hospitals to provide comfortable and convenient accommodation at pocket friendly prices ."
        fw="500"
        size="23px"
        lh="45px"
        width="40rem"
        m="1rem 0 0 0"
        xssize="18px"
        mlh="30px"
        msize="18px"
        mwidth="100vw"
        mta="center"
        padding="0 0 0 5vw "
      />
      <div style={{ padding: " 2vh 17.5vw 0 0" }}>
        <Link href="/industries#hotel">
          <TransparentButton
            Text="Read more"
            border="solid #FFE259 2px"
            height="60px"
            m="2rem 0 0 0"
            br="1.5rem"
            fw="300"
            fontSize="1.2rem"
          />
        </Link>
      </div>
    </StyleTextContainer>
  );
};

export default TextContainer;
