import PageWidth from "../../../../components/Width/PageWidth"
import PageLayout from "../../../../components/PageLayout/PageLayout"
import styled from "styled-components"
import CustomBg from "./components/CustomBg"

const ADiv = styled.div`
  @media only screen and (max-width: 768px) {
    position: absolute;
    bottom: 11vh;
    margin-left: 5%;
  }
`

const AContainer = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
  @media only screen and (max-width: 768px) {
    margin: 0;
    gap: 0;
    padding: 0;
    flex-direction: column;
  }
`
const sampleData = [
  {
    id: "1",
    title: "What is Webflow and why is it the best website builder?",

    content:
      "Vitae congue eu consequat ac felis placerat vestibulum lectus maurisultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.",
  },
  {
    id: "2",
    title: "What is your favorite template from BRIX Templates?",
    content:
      "Vitae congue eu consequat ac felis placerat vestibulum lectus maurisultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.",
  },
  {
    id: "3",
    title: "How do you clone a template from the Showcase?",
    content:
      "Vitae congue eu consequat ac felis placerat vestibulum lectus maurisultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.",
  },
  {
    id: "4",
    title: "Why is BRIX Templates the best Webflow agency?",
    content:
      "Vitae congue eu consequat ac felis placerat vestibulum lectus maurisultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.",
  },
  {
    id: "5",
    title: "When was Webflow officially launched?",
    content:
      "Vitae congue eu consequat ac felis placerat vestibulum lectus maurisultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.",
  },
  {
    id: "6",
    title: "How do you integrate Jetboost with Webflow?",
    content:
      "Vitae congue eu consequat ac felis placerat vestibulum lectus maurisultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.",
  },
]
const sampleData2 = [
  {
    id: "7",
    title: "What is Webflow andis it the best website builder?",

    content:
      "Vitae congue eu consequat ac felis placerat vestibulum lectus maurisultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.",
  },
  {
    id: "8",
    title: "What is your favorite from BRIX Templates?",
    content:
      "Vitae congue eu consequat ac felis placerat vestibulum lectus maurisultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.",
  },
  {
    id: "9",
    title: "How do you clone a templatem the Showcase?",
    content:
      "Vitae congue eu consequat ac felis placerat vestibulum lectus maurisultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.",
  },
  {
    id: "10",
    title: "Why is BRIX Templates the bt Webflow agency?",
    content:
      "Vitae congue eu consequat ac felis placerat vestibulum lectus maurisultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.",
  },
  {
    id: "11",
    title: "When was Webflow officia launched?",
    content:
      "Vitae congue eu consequat ac felis placerat vestibulum lectus maurisultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.",
  },
  {
    id: "12",
    title: "How do you integrate Jetst with Webflow?",
    content:
      "Vitae congue eu consequat ac felis placerat vestibulum lectus maurisultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.",
  },
]
const accordian = sampleData.map((data) => {
  return (
    <div>
      <input type="radio" name="acc" id={data.id} checked />
      <label for={data.id}>{data.title}</label>
      <div className="acc-body">{data.content}</div>
    </div>
  )
})
const accordian2 = sampleData2.map((data) => {
  return (
    <div>
      <input type="radio" name="acc" id={data.id} checked />
      <label for={data.id}>{data.title}</label>
      <div className="acc-body">{data.content}</div>
    </div>
  )
})

function index() {
  return (
    <PageLayout height="100%" bgColor="#f5f5f5">
      <PageWidth width="1500px" margin="0 0 0 0 ">
        <CustomBg />

        <AContainer>
          <div className="acc-kontainer">{accordian}</div>
          <ADiv className="acc-kontainer">{accordian2}</ADiv>
        </AContainer>
      </PageWidth>
    </PageLayout>
  )
}

export default index
