import styled from "styled-components"
import Text from "../../../../components/Text/Text"

const Wrapper = styled.div`
  color: white;
  height: 100%;
  padding: 0 5vw;
  scroll-snap-align: center;

  @media only screen and (max-width: 500px) {
    padding: 0;
    transform: scale(0.75);
  }
`
const Container = styled.div`
  color: white;

  display: flex;
  @media only screen and (max-width: 500px) {
    flex-direction: column;
  }
`
const Image = styled.img`
  height: 60vh;
`
const LeftDiv = styled.div`
  color: white;

  display: flex;
`
const Content = styled.p`
  color: white;

  font-size: 1rem;
  margin-top: 20px;
`
const LeftContent = styled.p`
  color: white;

  font-size: 1.6rem;
`
const NumDiv = styled.div`
  color: white;

  margin-right: auto;
  font-size: 5rem;
  opacity: 60%;
  font-weight: 500;
`
const Link = styled.a`
  color: white;

  cursor: pointer;
`
const RightDiv = styled.div`
  color: white;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    text-align: left;
  }
`
const candidate = ({ href, id, sub1, txt1, gif, sub2, txt2, txt3, number }) => {
  return (
    <Wrapper>
      <Link id={id} href={href}>
        <Text
          Text="RECOGNIZING TRUE TALENT WITH DESERVED CANDIDATURE"
          lg="linear-gradient(90deg, #FFE259 0%, #FFA751 100%)"
          font
          lh="50px"
          size="2rem"
          fw="400"
          align="center"
          padding="5vh 0 0 0"
          mpadding="0"
          msize="1.4rem"
          mta="center"
          mwidth="100vw"
          mmwidth="100%"
        />
        <Container>
          <LeftDiv>
            <div>
              <Text
                Text={sub1}
                lg="linear-gradient(90deg, #FFE259 0%, #FFA751 100%)"
                font
                size="1.2rem"
                fw="400"
                align="left"
                padding="10vh 0 0 0"
                xmsize="1.2rem"
                xssize="5vw"
                msize="1rem"
                mmwidth="100%"
              />
              <LeftContent>{txt1}</LeftContent>
              <Image loading="lazy" alt="gifs" src={gif} />
            </div>
          </LeftDiv>
          <RightDiv>
            <NumDiv>{number}</NumDiv>
            <Text
              Text={sub2}
              lg="linear-gradient(90deg, #FFE259 0%, #FFA751 100%)"
              font
              size="1.2rem"
              fw="400"
              align="left"
              padding="0 0 0 0"
              m=" 0 auto 0 0"
              xmsize="1.2rem"
              xssize="5vw"
              msize="1rem"
            />
            <Content>{txt2}</Content>
            <Content>{txt3}</Content>
          </RightDiv>
        </Container>
      </Link>
    </Wrapper>
  )
}

export default candidate
