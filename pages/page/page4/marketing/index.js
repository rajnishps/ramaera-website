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
          src={"/content/left-c1.png"}
          alt="left c1"
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
            Text="Marketing"
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
          role={"Senior Copywriter"}
          place={"Noida,IN"}
          work={"Full Time"}
          description={
            "We are seeking a creative and enthusiastic Copywriter to join our awesome Marketing team  If you are creative  innovative and energetic, and if you love attracting people with your writing we want you in our team"
          }
        />
        <Position
          role={"Junior Copywriter"}
          place={"Noida,IN"}
          work={"Full Time"}
          description={
            "We are looking for a Copywriter intern who is a professional who writes clear, concise copy for ads and marketing materials. They work closely alongside web and graphic designers to ensure their message is clear, whether in an email inbox or a website landing page."
          }
        />
      </div>
    </>
  )
}

export default index
