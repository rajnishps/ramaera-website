import styled from "styled-components"

export const bg = "/background/blank.png"

export const CustomText = styled.h1`
  font-size: 25px;
  line-height: 39px;
  color: #fff;
  line-height: 42px;
  font-weight: 400;
  margin: 3rem 0;
`
export const Responsive = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 4rem 0 0 0;

  @media only screen and (max-width: 1200px) {
  }
  @media only screen and (max-width: 1000px) {
    flex-direction: column;
  }

  @media only screen and (max-width: 768px) {
  }
`
const Style = () => {
  return <div>StyleImage</div>
}

export default Style
