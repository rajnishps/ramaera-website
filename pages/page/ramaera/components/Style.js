import styled from "styled-components"

export const CustomText = styled.p`
  font-size: 32px;
  line-height: 62px;
  color: #fff;
  width: 60rem;
  text-align: center;
  font-weight: 500;
`

const bg1 = "./background/1.jpg"
const bg2 = "./background/2.jpg"
const bg3 = "./background/3.jpg"

const txt1 = (
  <CustomText>
    An <span style={{ color: "#E65C00" }}>Incredible</span> multi-industrial
    approach oriented towards financial independence, customer focus and serving
    the best quality to the people.
  </CustomText>
)

const txt2 = (
  <CustomText>
    An <span style={{ color: "#E65C00" }}>Integrated</span> multi-industrial
    approach oriented towards financial independence, customer focus and serving
    the best quality to the people.
  </CustomText>
)

const txt3 = (
  <CustomText>
    An <span style={{ color: "#E65C00" }}>Qualitative</span> multi-industrial
    approach oriented towards financial independence, customer focus and serving
    the best quality to the people.
  </CustomText>
)

export const images = [bg1, bg2, bg3]
export const text = [txt1, txt2, txt3]

import React from "react"

const Style = () => {
  return <div>StyleImage</div>
}

export default Style
