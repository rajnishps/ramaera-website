import styled from "styled-components"

const LoaderWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-animation: rotate-center 1.6s linear infinite both;
  animation: rotate-center 1.6s linear infinite both;
  @keyframes rotate-center {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
const Loader = () => {
  return (
    <LoaderWrapper>
      <img src={"/content/loader.png"} width={120} height={120} />
    </LoaderWrapper>
  )
}

export default Loader
