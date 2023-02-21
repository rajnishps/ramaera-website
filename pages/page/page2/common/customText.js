import styled from "styled-components"

export const CustomText = styled.p`
  width: 100vw;
  font-size: 1.8rem;
  color: #fff;
  text-align: left;
  padding: 0 2rem;
  font-weight: 200;
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
