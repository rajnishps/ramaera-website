import styled from "styled-components"

export const Box = styled.div`
  padding-bottom: 18%;
  color: black;
`

export const BackgroundImg = styled.img`
  z-index: 1;
  position: absolute;
  object-fit: contain;
  width: 100vw;
  @media (max-width: 768px) {
    height: 100vh;
    object-fit: cover;
  }
`

export const Container = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const HeaderIcon = styled.div`
  display: flex;
  padding: 5px 0 30px 0;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const HeaderIcon1 = styled.div`
  display: flex;
  padding: 20px;
  background: white;
  color: black;
  border-radius: 20px;
  align-items: center;
  margin: 20px;
  width: 32vw;
  justify-content: space-between;
  @media (max-width: 768px) {
    width: 100%;
    margin: 10px auto;
  }
  b {
    margin-right: 15px;
  }
  p {
    margin-left: 10px;
    color: grey;
    @media (max-width: 768px) {
      margin-left: 0px;
    }
  }
  div {
    align-items: center;
    display: flex;
  }
  img {
    width: 55px;
    height: 45px;
    padding-right: 10px;
  }
`

export const HeaderIcon2 = styled.div`
  display: flex;
  padding: 20px;
  background: white;
  color: black;
  border-radius: 20px;
  align-items: center;
  margin: 20px;
  width: 28vw;
  justify-content: space-between;
  @media (max-width: 768px) {
    width: 100%;
    margin: 10px auto;
  }
  p {
    margin-left: 10px;
    color: grey;
    @media (max-width: 768px) {
      margin-left: 0px;
    }
  }
  div {
    align-items: center;
    display: flex;
  }
  img {
    width: 55px;
    height: 45px;
    padding-right: 10px;
  }
`

export const Form = styled.div`
  background: white;
  padding: 2.5rem;
  border-radius: 35px;
  align-items: center;
  width: 70%;
  @media (max-width: 540px) {
    width: 90%;
    padding: 1rem;
  }
`

export const Fline1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: 20px 0;
  @media (max-width: 540px) {
    flex-direction: column;
  }
`

export const Input = styled.input`
  background: white;
  color: black;

  ::placeholder,
  ::-webkit-input-placeholder {
    text-align: left;
  }
  width: 31vw;
  padding: 13px;
  border-radius: 10px;
  border: 1px solid lightgrey;
  margin-top: 10px;
  @media (max-width: 540px) {
    width: 80vw;
    margin: 10px 0;
  }
`

export const Fline2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: 20px 0;
  @media (max-width: 540px) {
    flex-direction: column;
  }
`

export const Fline3 = styled.div`
  background: white;
  padding: 20px 0;
  textarea {
    background: white;
    width: 100%;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid lightgrey;
    margin-top: 10px;
  }
`
export const TextArea = styled.textarea`
  color: black;

  background: white;
  max-width: 100%;
  min-height: 220px;
`

export const ButtonHolder = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 3rem auto;
`

const StyleImage = () => {
  return <div>StyleImage</div>
}

export default StyleImage
