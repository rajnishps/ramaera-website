import styled from "styled-components"
import Candidate from "../common/candidate"

const TalentWrapper = styled.div`
  transform: scale(0.95);
  margin: 0 10vw;
  height: 100vh;
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
  transition: transform 10s linear;

  &:hover {
    transform: translateY(calc(-300%));
    transition: transform 20s linear;
  }
`
const TallentContainer = styled.div`
  overflow-y: hidden;
`
const index = () => {
  return (
    <TallentContainer>
      <TalentWrapper>
        <Candidate
          id="div0"
          href="#div1"
          sub1={"Ethical Priciples"}
          txt1={
            "With extremely competent resources and consistent efforts of improvisation, we thrive for excellence"
          }
          gif={"/content/creative.gif"}
          sub2={"Redefining technology with innovation"}
          txt2={
            "The Ramaera Family believes in the dynamics of excellence in the Industry."
          }
          txt3={
            " We have a flexible approach to any outward opportunity as we emphasize the prospect of creation with innovation."
          }
          number={"01"}
        />
        <Candidate
          id="div1"
          href="#div2"
          sub1={"Ethical Priciples"}
          txt1={
            "Accomplishing goals and scaling high with the support and teamwork"
          }
          gif={"/content/dedication.gif"}
          sub2={"Cooperation and Teamwork"}
          txt2={
            "Ramaera Family is bound by the love and spirit of teamwork that helps us to tackle"
          }
          txt3={"every obstacle in the path with resilience and effort."}
          number={"02"}
        />
        <Candidate
          id="div2"
          href="#div3"
          sub1={"Ethical Priciples"}
          txt1={
            "Known for being trustworthy and working in favour of the nation"
          }
          gif={"/content/determation.gif"}
          sub2={"Notable and admired"}
          txt2={
            "Ramaera Industries is one of the most trustworthy and reputed enterprises all over India"
          }
          txt3={
            "Our years of hard work and efforts reflect majestically in the love of our consumers."
          }
          number={"03"}
        />
        <Candidate
          id="div3"
          sub1={"Ethical Priciples"}
          txt1={"Efficient Research to ensure perfection"}
          gif={"/content/enthusiam.gif"}
          sub2={"Research and organization"}
          txt2={
            "We believe in analyzing every aspect and all the factors before implementing any policy."
          }
          txt3={
            "Comprehensive research and appropriate study is the foundational act of the organization."
          }
          number={"04"}
        />
      </TalentWrapper>
    </TallentContainer>
  )
}

export default index
