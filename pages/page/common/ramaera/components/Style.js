import styled from "styled-components"

export const CustomText = styled.p`
  font-size: 32px;
  line-height: 62px;
  color: #fff;
  width: 60rem;
  text-align: center;
  font-weight: 500;
  @media (max-width: 1200px) {
    width: 100vw;
    font-size: 2rem;
    line-height: 42px;
    padding: 0 14vw;
    overflow-wrap: break-word;
  }
  @media (max-width: 768px) {
    width: 100vw;
    font-size: 7vmin;
    padding: 0 0vw;
    margin: 0 0 2rem 0;
  }
`

const bg1 = "/background/1.jpg"
const bg2 = "/background/2.jpg"
const bg3 = "/background/3.jpg"
const bg4 = "/background/4.jpg"
const bg5 = "/background/5.jpg"
const bg6 = "/background/6.jpg"
const bg7 = "/background/7.jpg"
const bg8 = "/background/8.jpg"
const bg9 = "/background/9.jpg"
const bg10 = "/background/10.jpg"
const bg11 = "/background/11.jpg"
const bg12 = "/background/12.jpg"

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
const txt4 = (
  <CustomText>
    An <span style={{ color: "#E65C00" }}>incredible</span> multi-industrial
    approach oriented towards financial independence, customer focus and serving
    the best quality to the people.
  </CustomText>
)

const txt5 = (
  <CustomText>
    An <span style={{ color: "#E65C00" }}>incredible</span> multi-industrial
    approach oriented towards financial independence, customer focus and serving
    the best quality to the people.
  </CustomText>
)
const txt6 = (
  <CustomText>
    An <span style={{ color: "#E65C00" }}>incredible</span> multi-industrial
    approach oriented towards financial independence, customer focus and serving
    the best quality to the people.
  </CustomText>
)

const txt7 = (
  <CustomText>
    Being a <span style={{ color: "#E65C00" }}>Devoted</span> to the nation by
    promoting education, business modelling and financial stability, is our
    motto. We are focused on nation orientation, ethical corporate values and
    benefiting the people.
  </CustomText>
)
const txt8 = (
  <CustomText>
    Being a <span style={{ color: "#E65C00" }}>Devoted</span> to the nation by
    promoting education, business modelling and financial stability, is our
    motto. We are focused on nation orientation, ethical corporate values and
    benefiting the people.
  </CustomText>
)
const txt9 = (
  <CustomText>
    Being a <span style={{ color: "#E65C00" }}>Devoted</span> to the nation by
    promoting education, business modelling and financial stability, is our
    motto. We are focused on nation orientation, ethical corporate values and
    benefiting the people.
  </CustomText>
)
const txt10 = (
  <CustomText>
    Ramaera Industries believes in{" "}
    <span style={{ color: "#E65C00" }}>performance</span> in assessing realtime
    instance and hence, ready to take on any challenge and succeed over it.
  </CustomText>
)
const txt11 = (
  <CustomText>
    Ramaera Industries believes in{" "}
    <span style={{ color: "#E65C00" }}>consistency</span> in assessing realtime
    instance and hence, ready to take on any challenge and succeed over it.
  </CustomText>
)
const txt12 = (
  <CustomText>
    Ramaera Industries believes in{" "}
    <span style={{ color: "#E65C00" }}>efficiency</span> in assessing realtime
    instance and hence, ready to take on any challenge and succeed over it.
  </CustomText>
)

export const images = [bg1, bg2, bg3]
export const text = [txt1, txt2, txt3]
export const images2 = [bg4, bg5, bg6]
export const text2 = [txt4, txt5, txt6]
export const images3 = [bg7, bg8, bg9]
export const text3 = [txt7, txt8, txt9]
export const images4 = [bg10, bg11, bg12]
export const text4 = [txt10, txt11, txt12]

import React from "react"

const Style = () => {
  return <div>StyleImage</div>
}

export default Style
