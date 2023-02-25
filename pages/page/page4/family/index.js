import styled from "styled-components"
import PageLayout from "../../../../components/PageLayout/PageLayout"
import Text from "../../../../components/Text/Text"
import PageWidth from "../../../../components/Width/PageWidth"

const Container = styled.div`
  display: flex;
`
const Wrapper = styled.div`
  @media only screen and (max-width: 768px) {
    transform: scale(0.8);
  }
`
const FamilyPhoto = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  img:nth-child(3) {
    border-radius: 999px;
    border: 2px solid #e99b27;
  }
`
const TextContainer = styled.div`
  padding: 0 10%;
`
const FamilyText = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    margin-top: 10px;
    font-size: 0.8rem;
  }
`
const index = () => {
  return (
    <PageLayout padding={0}>
      <PageWidth width="1500px">
        <Wrapper>
          <div
            style={{
              margin: "5vh 20vw",
              padding: "2rem",
              height: "fit-content",
              borderRadius: "30px",
              border: "1px solid",
            }}
            data-aos="slide-left"
            data-aos-duration="200"
            data-aos-anchor-placement="top-bottom"
          >
            <Text
              Text="Our happy family"
              lg="linear-gradient(90deg, #FFE259 0%, #FFA751 100%)"
              font
              size="2rem"
              fw="400"
              align="center"
              padding="10vh 0 0 0"
              xmsize="2rem"
              xssize="5vw"
              msize="1.4rem"
            />
            <Container>
              <div>
                <div>
                  <TextContainer>
                    <img
                      style={{ marginRight: "100%" }}
                      src={"/content/quoteOne.png"}
                      alt="open quote"
                      srcset=""
                    />{" "}
                    <br />
                    <Text
                      Text="Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the when an unknown printer
                    took a galley of type and scrambled it to make a type specimen
                    book."
                      size="1rem"
                      fw="400"
                      align="center"
                      padding="0 "
                      mpadding="0"
                      xmsize="2rem"
                      xssize="5vw"
                      msize="1.2rem"
                      mwidth="100%"
                    />
                    <br />
                    <img
                      style={{ marginLeft: "100%" }}
                      src={"/content/quoteTwo.png"}
                      alt="close quote"
                      srcset=""
                    />{" "}
                  </TextContainer>
                </div>
              </div>
            </Container>
            <FamilyPhoto>
              <img loading="lazy" src={"/content/family1.png"} />
              <img loading="lazy" src={"/content/family2.png"} />
              <img loading="lazy" src={"/content/family3.png"} />
              <img loading="lazy" src={"/content/family4.png"} />
              <img loading="lazy" src={"/content/family5.png"} />
            </FamilyPhoto>
            <FamilyText>
              <p>Ricky Aprilia</p>
              <p>UI/UX DESIGNER</p>
            </FamilyText>
          </div>
        </Wrapper>
      </PageWidth>
    </PageLayout>
  )
}

export default index
