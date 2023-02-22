import styled from "styled-components"

export const Box = styled.div`
  padding-bottom: 18%;
`

export const Main = styled.div`
  z-index: 1;
  position: absolute;
  img {
    object-fit: contain;
    width: 100vw;
  }
`

export const Container = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    font-weight: 100;
    padding-top: 30px;
    font-size: 3rem;
    font-family: personal;
    color: white;
    @media (max-width: 420px) {
      font-size: 1.8rem;
    }
  }
`
/**** 
 * width:100vw;
height:100vh; 
background-image: url("/content/Background.png");
*/

export const HeaderIcon = styled.div`
  display: flex;
  padding: 5px 0 15px 0;

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
  p {
    margin-left: 10px;
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
  //margin-top:20px;
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
  background: white;
`

export const Button = styled.div`
  button {
    display: flex;
    flex-direction: row;
    background: linear-gradient(to left, #fdc830, #f37335);
    text-align: center;
    padding: 15px 30px;
    border-radius: 50px;
    margin: 3rem auto;
    cursor: pointer;
    color: white;
    border: none;
  }
`

const StyleImage = () => {
  return <div>StyleImage</div>
}

export default StyleImage
