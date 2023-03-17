import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin-top: -25vh;
`

export const FormBox = styled.form`
  background-color: whitesmoke;
  width: 35vw;
  min-width: 400px;
  height: 65vh;
  min-height: 450px;
  box-sizing: border-box;
  overflow: hidden;
  border-radius: 2%;
  box-shadow: 0 0 10px rgb(0 0 0 / 27%);
  padding: 2rem;
`

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70%;
  gap: 30px;
  transition: all 0.5s;
`

export const LoginTitle = styled.div``

const StyleImage = () => {
  return <div>StyleImage</div>
}

export default StyleImage
