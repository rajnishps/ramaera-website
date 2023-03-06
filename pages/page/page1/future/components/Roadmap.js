import React from "react"
import styled from "styled-components"
import Flex from "../../../../../components/Styling/Flex"
import Text from "../../../../../components/Text/Text"

const StyledRoadmap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 0 0 0;
  @media only screen and (max-width: 768px) {
    margin: 1rem 0 0 0;
    transform: scale(0.6);
  }
  @media only screen and (max-width: 450px) {
    transform: scale(0.42);
  }
`
const Roadmap = () => {
  return (
    <StyledRoadmap>
      <div style={{ width: "100%", margin: "2rem 0 0 0" }}>
        <img
          loading="lazy"
          src="/content/r.png"
          alt="line"
          styled={{ width: "100%", height: "3rem" }}
        />
        <Flex jc="space-between">
          <div style={{ margin: "0 0 0 1rem" }}>
            <Text
              Text="End of 2023"
              color="#fff"
              width="20vw"
              size="16px"
              align="center"
              lh="18px"
              xssize="3vw"
              msize="1.8rem"
            />
            <Text
              Text="1000 aiming, in FMCG Sector"
              color="#fff"
              size="13px"
              align="center"
              lh="16.8px"
              width="20vw"
              fw="400"
              m="0.75rem 0 0 0"
              xssize="2.4vw"
              msize="1rem"
            />
          </div>
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Text
              Text="5 Million"
              color="#fff"
              size="16px"
              width="20vw"
              align="center"
              lh="18px"
              xssize="3vw"
              msize="1.8rem"
            />
            <Text
              Text="Sustainable Livelihoods"
              color="#fff"
              size="13px"
              lh="16.8px"
              fw="400"
              m="0.75rem 0 0 0"
              width="20vw"
              xssize="2.4vw"
              align="center"
              msize="1rem"
            />
          </div>
          <div style={{ margin: "0 0rem 0 0" }}>
            <Text
              Text="10000+"
              color="#fff"
              size="16px"
              width="20vw"
              lh="18px"
              align="center"
              xssize="3vw"
              msize="1.8rem"
            />
            <Text
              Text="Hotels across pan India"
              color="#fff"
              size="13px"
              width="20vw"
              lh="16.8px"
              fw="400"
              m="0.75rem 0 0 0"
              xssize="2.4vw"
              align="center"
              msize="1rem"
            />
          </div>
        </Flex>
      </div>
      <div style={{ width: "100%", margin: "2rem 0 0 0" }}>
        <img
          loading="lazy"
          src="/content/r.png"
          alt="line"
          styled={{ width: "100%", height: "3rem" }}
        />
        <Flex jc="space-between">
          <div style={{ margin: "0 0 0 1rem" }}>
            <Text
              Text="End of 2025"
              color="#fff"
              size="16px"
              width="20vw"
              lh="18px"
              align="center"
              xssize="3vw"
              msize="1.8rem"
            />
            <Text
              Text="10000 Industry "
              color="#fff"
              size="13px"
              lh="16.8px"
              width="20vw"
              fw="400"
              m="0.75rem 0 0 0"
              align="center"
              xssize="2.4vw"
              msize="1rem"
            />
          </div>
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Text
              Text="10000+"
              color="#fff"
              width="20vw"
              size="16px"
              lh="18px"
              align="center"
              xssize="3vw"
              msize="1.8rem"
            />
            <Text
              Text="Manufacturing"
              color="#fff"
              size="13px"
              lh="16.8px"
              width="20vw"
              align="center"
              fw="400"
              m="0.75rem 0 0 0"
              xssize="2.4vw"
              msize="1rem"
            />
          </div>
          <div style={{ margin: "0 0rem 0 0" }}>
            <Text
              Text="20000"
              color="#fff"
              size="16px"
              lh="18px"
              align="center"
              width="20vw"
              xssize="3vw"
              msize="1.8rem"
            />
            <Text
              Text="FMCG Upcoming Mother Brands"
              color="#fff"
              size="13px"
              width="20vw"
              lh="16.8px"
              align="center"
              fw="400"
              m="0.75rem 0 0 0"
              xssize="2.4vw"
              msize="1rem"
            />
          </div>
        </Flex>
      </div>
      {/*  <div style={{ width: "100%" }}>
        <img
          loading="lazy"
          src="/content/r.png"
          alt="line"
          styled={{ width: "100%", height: "3rem" }}
        />
        <Flex jc="space-between">
          <div style={{ margin: "0 0 0 0" }}>
            <Text
              Text="End of 2025"
              color="#fff"
              size="16px"
              lh="18px"
              align="center"
              xssize="3vw"
              msize="1.8rem"
            />
            <Text
              Text="10000 Industry"
              color="#fff"
              size="13px"
              lh="16.8px"
              fw="400"
              m="0.75rem 0 0 0"
              xssize="2.4vw"
              msize="1rem"
            />
          </div>
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Text
              Text="10000+"
              color="#fff"
              size="16px"
              lh="18px"
              align="center"
              xssize="3vw"
              msize="1.8rem"
            />
            <Text
              Text="Manufacturing"
              color="#fff"
              size="13px"
              lh="16.8px"
              fw="400"
              m="0.75rem 0 0 0"
              xssize="2.4vw"
              msize="1rem"
            />
          </div>
          <div style={{ margin: "0 2rem 0 0" }}>
            <Text
              Text="20000"
              color="#fff"
              size="16px"
              lh="18px"
              align="center"
              xssize="3vw"
              msize="1.8rem"
              // mmargin="0 0 0 5rem"
            />
            <Text
              Text="FMCG Upcoming Mother Brands"
              color="#fff"
              size="13px"
              lh="16.8px"
              fw="400"
              m="0.75rem 0 0 0"
              xssize="2.4vw"
              msize="1rem"
              // mmargin= "0 0 0 2rem"
            />
          </div>
        </Flex>
      </div> */}
    </StyledRoadmap>
  )
}

export default Roadmap
