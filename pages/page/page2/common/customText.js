import styled from "styled-components"

export const CustomText = styled.p`
  width: 100vw;
  font-size: 1.7rem;
  color: #fff;
  text-align: justify;
  padding: 0 3vw;
  line-height: 2.6rem;
  font-weight: 300;
  @media (max-width: 1200px) {
    width: 100vw;
    font-size: 2rem;
    line-height: 42px;
    overflow-wrap: break-word;
  }
  @media (max-width: 768px) {
    width: 100vw;
    font-size: 1.2rem;
    line-height: 32px;
    padding: 0 5vw;
  }
`

export const ParaWrapper = styled.div`
  margin: ${(props) => (props.margin ? props.margin : "2rem 0")};
`
const StyleImage = () => {
  return <div>StyleImage</div>
}

export default StyleImage
