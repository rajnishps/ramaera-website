import Image from "next/image"
import styled from "styled-components"

/* const LoaderWrapper = styled.div`
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
` */

const Comp = styled.div`
  background: linear-gradient(
    109.6deg,
    rgba(0, 0, 0, 0.93) 11.2%,
    rgb(63, 61, 61) 78.9%
  );
  background-size: 400% 400%;
  overflow: hidden;
  animation: gradient 8çs ease infinite;
  height: 100vh;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`
const LoaderWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: outerbeat 1s infinite linear forwards;
  @keyframes outerbeat {
    0% {
      transform: scale(1.05);
    }
    10% {
      transform: scale(1.15);
    }
    35% {
      transform: scale(1.2);
    }
    60% {
      transform: scale(1.15);
    }
    75% {
      transform: scale(1.2);
    }
  }
`

const Loader = () => {
  return (
    <Comp>
      <LoaderWrapper>
        <Image
          src={"/content/loader.png"}
          alt="loader"
          width={70}
          height={70}
        />
      </LoaderWrapper>
    </Comp>
  )
}

export default Loader
