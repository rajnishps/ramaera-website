import { useState, useRef } from "react"
import PageWidth from "../../../components/Width/PageWidth"
import PageLayout from "../../../components/PageLayout/PageLayout"
import { bg, Responsive } from "./components/Style"
import styled, { css } from "styled-components"
import CustomBg from "./components/CustomBg"

const Container = styled.main`
  position: absolute;
  display: flex;
`

const Section = styled.section`
  position: relative;
`

const InnerSection = styled.div`
  position: relative;
  max-width: 44vw;
  margin: 6rem 0 0 4rem;
`

const AccordionContainer = styled.div`
  display: flex;
`

const AccordionInner = styled.div`
  position: relative;
  width: 100%;
`

const AccordionItem = styled.div`
  &:not(:last-child) {
    border-bottom: 1px solid rgba(256, 256, 256, 0.3);
    padding-bottom: 0px;
  }
`

const AccordionTitle = styled.p`
  font-size: 18px;
  margin: 0;
  padding: 1rem;
  cursor: pointer;
  &:hover {
    color: rgba(255, 212, 87, 1);
  }
  ${({ active }) =>
    active &&
    css`
      color: rgba(255, 212, 87, 1);
    `}
`

const AccordionBody = styled.div`
  color: rgba(255, 212, 87, 1);
  font-size: 12px;
  display: block;
  position: relative;
  padding: 0;
  margin: 0;
  height: 0;
  overflow: hidden;
  transition: height 0.3s;

  ${({ active, bodyHeight }) =>
    active &&
    css`
      height: ${bodyHeight}px;
    `}
`

const AccordionContent = styled.p`
  margin: 0;
  padding: 0 1rem 1rem;
  height: auto;
`

const sampleAccordionData = [
  {
    title: "What is Webflow and why is it the best website builder?",

    content:
      "Vitae congue eu consequat ac felis placerat vestibulum lectus maurisultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.",
  },
  {
    title: "What is your favorite template from BRIX Templates?",
    content:
      "Vitae congue eu consequat ac felis placerat vestibulum lectus maurisultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.",
  },
  {
    title: "How do you clone a template from the Showcase?",
    content:
      "Vitae congue eu consequat ac felis placerat vestibulum lectus maurisultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.",
  },
  {
    title: "Why is BRIX Templates the best Webflow agency?",
    content:
      "Vitae congue eu consequat ac felis placerat vestibulum lectus maurisultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.",
  },
  {
    title: "When was Webflow officially launched?",
    content:
      "Vitae congue eu consequat ac felis placerat vestibulum lectus maurisultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.",
  },
  {
    title: "How do you integrate Jetboost with Webflow?",
    content:
      "Vitae congue eu consequat ac felis placerat vestibulum lectus maurisultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.",
  },
]

const AccordionItems = ({
  accordionContent,
  refs,
  currentAccordion,
  setCurrentAccordion,
  setBodyHeight,
  bodyHeight,
}) =>
  accordionContent.map(({ title, content }, i) => (
    <AccordionItem key={`accordion-item-${i}`}>
      <AccordionTitle
        onClick={() => {
          setCurrentAccordion(i)
          setBodyHeight(refs[i].current.clientHeight)
          console.log(refs[i].current.clientHeight)
        }}
      >
        {title}
      </AccordionTitle>
      <AccordionBody active={currentAccordion === i} bodyHeight={bodyHeight}>
        <AccordionContent ref={refs[i]}>{content}</AccordionContent>
      </AccordionBody>
    </AccordionItem>
  ))

function index() {
  const [currentAccordion, setCurrentAccordion] = useState(0)
  const [bodyHeight, setBodyHeight] = useState(0)

  const item0 = useRef(null)
  const item1 = useRef(null)
  const item2 = useRef(null)
  const item3 = useRef(null)
  const item4 = useRef(null)
  const item5 = useRef(null)

  const refs = [item0, item1, item2, item3, item4, item5]

  return (
    <>
      <PageLayout height="150vh" bgColor="#f5f5f5" bg={bg}>
        <PageWidth width="1500px" margin="0 0 0 0 ">
          <Responsive>
            <CustomBg />
            <Container>
              <Section>
                <InnerSection>
                  <AccordionContainer>
                    <AccordionInner>
                      <AccordionItems
                        accordionContent={sampleAccordionData}
                        refs={refs}
                        currentAccordion={currentAccordion}
                        setCurrentAccordion={setCurrentAccordion}
                        setBodyHeight={setBodyHeight}
                        bodyHeight={bodyHeight}
                      />
                    </AccordionInner>
                  </AccordionContainer>
                </InnerSection>
              </Section>
            </Container>
          </Responsive>
        </PageWidth>
      </PageLayout>
    </>
  )
}

export default index
