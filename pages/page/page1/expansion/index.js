import PageWidth from "../../../../components/Width/PageWidth";
import Text from "../../../../components/Text/Text";
import styled from "styled-components";

const PolyBg = styled.div`
  position: absolute;
  left: 0;
  z-index: -1;
  margin-top: -10vh;
  @media only screen and (max-width: 1000px) {
    opacity: 50%;
  }
`;
const Image = styled.img`
  height: 100%;
  width: 75%;
  @media only screen and (max-width: 1000px) {
    height: 80vw;
  }
`;
const PageLayout = styled.div`
  height: 60vh;
  width: 100%;
  padding: 35vh 5vw;
  @media only screen and (max-width: 768px) {
    padding: 25vh 5vw;
    margin: 0 0 20vh 0;
  }
  @media only screen and (max-width: 400px) {
    margin: 0 0 50vh 0;
  }
`;

const Buy = () => {
  return (
    <div id="0">
      <PageLayout>
        <PageWidth height="100%" scale={"100%"} full>
          <div
            data-aos="fade-up"
            data-aos-easing="fade-down"
            data-aos-duration="100"
          >
            <Text
              Text="The Ramaera Expansion"
              lg="linear-gradient(90deg, #FFE259 0%, #FFA751 100%)"
              font
              size="3.5rem"
              fw="400"
              align="center"
              lh="60px"
              xmsize="4rem"
              xssize="4rem"
              msize="3.2rem"
              padding="0"
            />
            <Text
              Text="We are aiming to be a part of the major industrialisation drive in India and embarking our presence in every significant industrial domain, including IT."
              padding="0 10vw "
              color="#FFF"
              size="2rem"
              lh="50px"
              fw="400"
              m="1rem 0 3rem 0"
              align="center"
              xmsize="2.2rem"
              xssize="2rem"
              msize="1.3rem"
              mta="center"
              mwidth="100vw"
              mlh="40px"
            />
          </div>
        </PageWidth>
        <PolyBg>
          <Image
            src={"/background/rightPoly.png"}
            alt="right polygon background"
          />
        </PolyBg>
      </PageLayout>
    </div>
  );
};

export default Buy;
