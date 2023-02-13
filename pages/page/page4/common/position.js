import styled from "styled-components"
import Button from "../../../../components/Button/Button"
import Text from "../../../../components/Text/Text"

const Div1 = styled.div`
  display: flex;
  @media (max-width: 768px) {
  }
`
const Div3 = styled.div`
  display: flex;
  @media (max-width: 768px) {
  }
`
const CustomText = styled.div`
  margin: 0 10vw;
  @media (max-width: 768px) {
  }
`
const Head = styled.h3`
  @media (max-width: 768px) {
  }
`
const Location = styled.p`
  margin-right: 1rem;
  @media (max-width: 768px) {
  }
`
const Work = styled.p`
  padding-left: 1rem;
  border-left: 1px solid;

  @media (max-width: 768px) {
  }
`
const Breif = styled.p`
  @media (max-width: 768px) {
  }
`

const position = ({ role, place, work, description }) => {
  return (
    <CustomText>
      <Head>
        <Text
          Text={role}
          color="#FFF"
          size="20px"
          lh="32px"
          fw="700"
          m="2rem 0 0 0"
          align="left"
          xmsize="2.2rem"
          xssize="2rem"
          padding="0"
          msize="1.2rem"
          mta="left"
          mwidth="100vw"
          mpadding="0"
          mmargin=" 0 0 2rem 2rem"
        />
      </Head>
      <Div1>
        <div>
          <Div3>
            <Location>{place}</Location>
            <Work>{work}</Work>
          </Div3>
          <Breif>{description}</Breif>
        </div>
        <Button>Apply Now</Button>
      </Div1>
    </CustomText>
  )
}

export default position
