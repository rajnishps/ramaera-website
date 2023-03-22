import Image from "next/image"
import styled from "styled-components"
import Text from "../../../../components/Text/Text"
import Position from "../common/position"

const Heading = styled.h2``

const index = () => {
  return (
    <>
      <div
        style={{
          position: "absolute",
          left: "0",
          marginTop: "30vh",
          height: "100%",
          width: "15%",
          zIndex: "-2",
        }}
        data-aos="slide-right"
        data-aos-duration="200"
        data-aos-anchor-placement="top-bottom"
      >
        <Image
          src={"/content/left-c2.png"}
          alt="left c2"
          layout="fill"
          objectFit="contain"
          objectPosition="center"
        />
      </div>
      <div
        style={{
          padding: "5vw",
        }}
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-anchor-placement="top-bottom"
      >
        <Heading>
          <Text
            Text="Product"
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
            mmwidth="100%"
          />
        </Heading>
        <Position
          role={"PRODUCT MANAGER"}
          place={"Noida,IN"}
          work={"Full Time"}
          description={
            "We are looking for multi-skilled candidates with excellent interpersonal skills for the position of Product Manager. Product Managers improve customer experiences, generate new product ideas, and outline detailed product strategies, among other duties."
          }
        />
        <Position
          role={"UX Designer "}
          place={"Noida,IN"}
          work={"Full Time"}
          description={
            "We are looking for a dynamic UI/UX designer who will be responsible for the user experience (UX) and user interface (UI) design of our various digital assets. You will ensure that all elements of the online user experience are optimised for improved usability, usefulness, and exceptional visual design."
          }
        />
      </div>
    </>
  )
}

export default index
