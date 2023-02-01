import styled from "styled-components"
import Text from "../../../../components/Text/Text"

/*const Questions = () => {
  const QuesAns1 = [
    [
      "What is Webflow and why is it the best website builder?",
      "Vitae congue eu consequat ac felis placerat vestibulum lectus maurisultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.",
    ],
    ["What is your favorite template from BRIX Templates?", ""],
    ["How do you clone a template from the Showcase?", ""],
    ["Why is BRIX Templates the best Webflow agency?", ""],
    ["When was Webflow officially launched?", ""],
    ["How do you integrate Jetboost with Webflow?", ""],
  ]
  const QuesAns2 = [
    ["What is your favorite template from BRIX Templates?", ""],
    ["How do you clone a template from the Showcase?", ""],
    [
      "What is Webflow and why is it the best website builder?",
      "Vitae congue eu consequat ac felis placerat vestibulum lectus maurisultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.",
    ],
    ["Why is BRIX Templates the best Webflow agency?", ""],
    ["When was Webflow officially launched?", ""],
    ["How do you integrate Jetboost with Webflow?", ""],
  ]

  const QuestionsContainer = styled.div`
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    gap: 50px;
    text-align: center;
    margin-top: 50px;
    top: 300px;
    color: white;
    display: flex;
    justify-content: center;
  `
  const QuestionDiv = styled.div`
    display: flex;
    flex-direction: column;
  `
  const Question = styled.summary`
    display: flex;
    flex-direction: column;
  `
  const Answer = styled.details`
    width: 35vw;
  `
  const Qcontainer1 = QuesAns1.map((line) => {
    console.log(line)
    return (
      <Answer>
        <Question>{line[0]}</Question>
        {line[1]}
      </Answer>
    )
  })
  const Qcontainer2 = QuesAns2.map((line) => {
    console.log(line)
    return (
      <Answer>
        <Question>{line[0]}</Question>
        {line[1]}
      </Answer>
    )
  })
  return (
    <QuestionsContainer>
      <QuestionDiv>{Qcontainer1}</QuestionDiv>
      <QuestionDiv>{Qcontainer2}</QuestionDiv>
    </QuestionsContainer>
  )
}
*/

const QuestionsContainer = styled.div`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  gap: 50px;
  text-align: center;
  margin-top: 100px;
  top: 300px;
  color: white;
  display: flex;
  justify-content: center;
`
const QuestionDiv = styled.div`
  display: flex;
  flex-direction: column;
`
const Question = styled.p`
  font-size: 18px;
  margin-top: 30px;
  text-align: left;
  display: flex;
  flex-direction: column;
`
const Hr = styled.div`
  margin-top: 20px;
  border-top: 0.5px solid rgba(255, 255, 255, 0.5);
`
const Answer = styled.p`
  line-height: 20px;
  padding-right: 100px;
  font-weight: 200;
  font-size: 12px;
  text-align: left;
  max-width: 40vw;
`
const Questions = () => {
  return (
    <QuestionsContainer>
      <QuestionDiv>
        <Question style={{ color: "rgba(255, 212, 87, 1)" }}>
          What is Webflow and why is it the best website builder?
        </Question>
        <Answer>
          Vitae congue eu consequat ac felis placerat vestibulum lectus mauris
          ultrices. Cursus sit amet dictum sit amet justo donec enim diam
          porttitor lacus luctus accumsan tortor posuere.
        </Answer>
        <Hr />
        <Question>What is your favorite template from BRIX Templates?</Question>
        <Hr />
        <Question>How do you clone a template from the Showcase?</Question>
        <Hr />
        <Question>Why is BRIX Templates the best Webflow agency?</Question>
        <Hr />
        <Question>When was Webflow officially launched?</Question>
        <Hr />
        <Question>How do you integrate Jetboost with Webflow?</Question>
      </QuestionDiv>
      <QuestionDiv>
        <Question>What is your favorite template from BRIX Templates?</Question>
        <Hr />
        <Question>How do you clone a template from the Showcase?</Question>
        <Hr />
        <Question style={{ color: "rgba(255, 212, 87, 1)" }}>
          What is Webflow and why is it the best website builder?
        </Question>
        <Answer>
          Vitae congue eu consequat ac felis placerat vestibulum lectus mauris
          ultrices. Cursus sit amet dictum sit amet justo donec enim diam
          porttitor lacus luctus accumsan tortor posuere.
        </Answer>
        <Hr />
        <Question>Why is BRIX Templates the best Webflow agency?</Question>
        <Hr />
        <Question>When was Webflow officially launched?</Question>
        <Hr />
        <Question>How do you integrate Jetboost with Webflow?</Question>
      </QuestionDiv>
    </QuestionsContainer>
  )
}

export default Questions
