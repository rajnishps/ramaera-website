import Text from "../../../../components/Text/Text"
import styled from "styled-components"
export const ValueContainer = styled.div`
  width: 100%;
  margin: 20% auto 0 auto;
  @media (max-width: 768px) {
    height: auto;
  }
`
export const ImageTag = styled.img`
  transform: scale(90%);
  width: 100%;
  object-fit: cover;
  object-position: 0 0;
  border-radius: 20px;
  border: solid salmon 1px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  @media (max-width: 768px) {
    object-fit: contain;
    height: auto;
  }
`
const Plantsera = () => {
  return (
    <ValueContainer>
      <div data-aos="fade-right">
        <Text
          Text="Plantsera"
          lg="linear-gradient(90deg, #ffe259 0%, #ffa751 100%)"
          font
          size="50px"
          lh="110%"
          width="100%"
          mwidth="100vw"
          fw="500"
          mlh="50px"
          align="center"
          xmsize="2rem"
          xssize="4vw"
          msize="2rem"
          mpadding="0"
          mmargin=" 0 0 0rem 0"
        />
      </div>
      <div data-aos="fade-up">
        <a href="https://www.ramaera.com" target="_blank">
          <ImageTag src="/content/plantsera.webp" alt="plantsera" />
        </a>
      </div>
    </ValueContainer>
  )
}

export default Plantsera
