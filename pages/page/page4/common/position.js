import styled from "styled-components"
import Text from "../../../../components/Text/Text"

const Div1 = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
  }
`
const Div2 = styled.div`
  width: 70%;
  @media (max-width: 768px) {
    width: 100%;
  }
`
const Div3 = styled.div`
  margin: 1rem 0;
  display: flex;
  @media (max-width: 768px) {
    margin: 0 0;
  }
`
const CustomText = styled.div`
  margin: 0 10vw;
  padding: 4rem 0;
  border-bottom: 1px solid;
  @media (max-width: 768px) {
    width: 80vw;
    padding: 0 0;
    margin: 0 0;
  }
`
const Head = styled.h3`
  padding: 1rem 0;

  @media (max-width: 768px) {
    padding: 0 0;
  }
`
const Button = styled.button`
  border-radius: 999px;
  border: 1px solid;
  width: 200px;
  height: 50px;
  cursor: pointer;
  background: none;
  &:active,
  :hover {
    background: linear-gradient(90deg, #ffe259 0%, #ffa751 100%);
    color: black;
  }
  @media (max-width: 768px) {
  }
`
const Location = styled.div`
  margin-right: 1rem;
  @media (max-width: 768px) {
    margin-right: 0;
  }
`
const Work = styled.div`
  padding-left: 1rem;
  border-left: 1px solid;

  @media (max-width: 768px) {
    padding-left: 0;
  }
`
const Breif = styled.div`
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
          ttransform="uppercase"
          size="1.6"
          lh="32px"
          fw="700"
          m="2rem 0 0 0"
          align="left"
          xmsize="2.2rem"
          xssize="2rem"
          padding="0"
          mpadding="0"
          msize="0.8rem"
          mta="left"
          mwidth="100vw"
        />
      </Head>
      <Div1>
        <Div2>
          <Div3>
            <Location>
              <Text
                Text={place}
                color="#FFF"
                size="1rem"
                lh="32px"
                align="left"
                xmsize="2.2rem"
                xssize="2rem"
                padding="0"
                msize="1.2rem"
                mta="left"
                mwidth="100%"
                mpadding="0"
              />
            </Location>
            <Work>
              <Text
                Text={work}
                color="#FFF"
                size="1rem"
                lh="32px"
                lg="linear-gradient(90deg, #FFE259 0%, #FFA751 100%)"
                align="left"
                xmsize="2.2rem"
                xssize="2rem"
                padding="0"
                msize="1.2rem"
                mta="left"
                mwidth="100vw"
                mpadding="0"
              />
            </Work>
          </Div3>
          <Breif>{description}</Breif>
        </Div2>

        <Button>Apply Now</Button>
      </Div1>
    </CustomText>
  )
}

export default position
