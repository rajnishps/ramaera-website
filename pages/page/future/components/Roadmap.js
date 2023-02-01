import React from "react"
import styled from "styled-components"
import Flex from "../../../../components/Styling/Flex"
import Text from "../../../../components/Text/Text"

const StyledRoadmap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem 0 0 0;
`
const Roadmap = () => {
  return (
    <StyledRoadmap>
      <div style={{ width: "100%" }}>
        <img
          src="/content/r.png"
          alt=""
          styled={{ width: "100%", height: "3rem" }}
        />
        <Flex jc="space-between">
          <div style={{ margin: "0 0 0 4rem" }}>
            <Text
              Text="End of 2025"
              color="#fff"
              size="16px"
              lh="18px"
              align="center"
            />
            <Text
              Text="10000 Industry"
              color="#fff"
              size="13px"
              lh="16.8px"
              fw="400"
              m="0.75rem 0 0 0"
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
            />
            <Text
              Text="Manufacturing"
              color="#fff"
              size="13px"
              lh="16.8px"
              fw="400"
              m="0.75rem 0 0 0"
            />
          </div>
          <div style={{ margin: "0 2rem 0 0" }}>
            <Text
              Text="20000"
              color="#fff"
              size="16px"
              lh="18px"
              align="center"
            />
            <Text
              Text="FMCG Upcoming Mother Brands"
              color="#fff"
              size="13px"
              lh="16.8px"
              fw="400"
              m="0.75rem 0 0 0"
            />
          </div>
        </Flex>
      </div>
      <div style={{ width: "100%", margin: "2rem 0 0 0" }}>
        <img
          src="/content/r.png"
          alt=""
          styled={{ width: "100%", height: "3rem" }}
        />
        <Flex jc="space-between">
          <div style={{ margin: "0 0 0 3.5rem" }}>
            <Text
              Text="End of 2023"
              color="#fff"
              size="16px"
              lh="18px"
              align="center"
            />
            <Text
              Text="1000 aiming, in FMCG Sector"
              color="#fff"
              size="13px"
              lh="16.8px"
              fw="400"
              m="0.75rem 0 0 0"
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
              lh="18px"
              align="center"
            />
            <Text
              Text="Sustainable Livelihoods"
              color="#fff"
              size="13px"
              lh="16.8px"
              fw="400"
              m="0.75rem 0 0 0"
            />
          </div>
          <div style={{ margin: "0 3.75rem 0 0" }}>
            <Text
              Text="10000+"
              color="#fff"
              size="16px"
              lh="18px"
              align="center"
            />
            <Text
              Text="Hotels across pan India"
              color="#fff"
              size="13px"
              lh="16.8px"
              fw="400"
              m="0.75rem 0 0 0"
            />
          </div>
        </Flex>
      </div>
    </StyledRoadmap>
  )
}

export default Roadmap
