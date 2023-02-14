import Image from "next/image"
import styled from "styled-components"
import Text from "../../../../components/Text/Text"
import Position from "../common/position"

const Heading = styled.h2``
const index = () => {
  return (
    <>
      {/* <div
        style={{
          position: "absolute",
          height: "100%",
          width: "15%",
          zIndex: "-2",
          right: "0",
          marginTop: "50vh",
        }}
        data-aos="slide-left"
        data-aos-duration="200"
        data-aos-anchor-placement="top-bottom"
      >
        <Image
          src={"/content/right-c1.png"}
          layout="fill"
          objectFit="contain"
          objectPosition="center"
        />
      </div> */}
      <div
        style={{
          padding: "5vh",
        }}
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-anchor-placement="center-bottom"
      >
        <Heading>
          <Text
            Text="Development"
            lg="linear-gradient(90deg, #FFE259 0%, #FFA751 100%)"
            font
            size="2rem"
            fw="400"
            align="left"
            padding="10vh 0 0 0"
            xmsize="2rem"
            xssize="5vw"
            msize="1.4rem"
            mta="center"
            mwidth="100%"
          />
        </Heading>
        <Position
          role={"BACKEND DEVELOPER (NODE.JS) "}
          place={"Noida,IN"}
          work={"Full Time"}
          description={
            "We are looking for an analytical, results-driven back-end developer who will work with team members to troubleshoot and improve current back-end applications and processes."
          }
        />
        <Position
          role={"FRONTEND DEVELOPER (REACT.JS)"}
          place={"Remote"}
          work={"Full Time"}
          description={
            "We are looking for a skilled react.js developer to join our front-end development team. In this role, you will be responsible for developing and implementing user interface components using React.js concepts and workflows such as Redux and Webpack."
          }
        />
        <Position
          role={"DEVOPS ENGINEER"}
          place={"Noida,IN"}
          work={"Full Time"}
          description={
            "Looking for a DevOps Engineers who can support developers with their code while also understanding engineering best practices like operating system design or database management systems software installation processes."
          }
        />
      </div>
    </>
  )
}

export default index
