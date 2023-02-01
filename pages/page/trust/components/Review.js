import styled from "styled-components"
import Text from "../../../../components/Text/Text"
import Tabs from "./Tabs"

const ReviewData = [
  [
    "What our customer are saying",
    "/content/avatar.png",
    "Edward Newgate",
    "Founder Circle",
    "“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls or administrative hassle) and securely",
  ],
  [
    "What our customer are saying",
    "/content/avatar.png",
    "Edward Newgate",
    "Founder Circle",
    "“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls or administrative hassle) and securely",
  ],
  [
    "What our customer are saying",
    "/content/avatar.png",
    "Edward Newgate",
    "Founder Circle",
    "“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls or administrative hassle) and securely",
  ],
]

const Hero = styled.div`
  position: absolute;
  left: 20%;
  top: 48vh;
  width: 60vw;
  height: 40vh;
  background: linear-gradient(90deg, #000000 0%, #434343 100%);
  border: 3px solid #ffffff;
  border-radius: 24px;
`
const Profile = styled.div`
  margin-left: 100px;
  width: 50%;
  width: 50vw;
  display: flex;
`
const TopHalf = styled.div`
  margin-top: 40px;
`
const BottomHalf = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Avatar = styled.div`
  border: solid 2px white;
  width: 110px;
  height: 110px;
  border-radius: 999px;
  overflow: hidden;
  margin-right: 20px;
`
const UnderLine = styled.div`
  position: absolute;
  left: 23%;
  background: #ffffff;
  height: 5px;
  width: 200px;
  border-radius: 5px;
`
const ReviewText = styled.div`
  width: 80%;
  margin-right: 100px;
  overflow-wrap: wrap;
`
const Review = ({ what, avatar, profileName, profileTitle, profileReview }) => {
  return (
    <>
      <Hero>
        <TopHalf>
          <Text
            Text={what}
            size="28px"
            lh="60px"
            color="#FFF"
            align="center"
            fw="800"
          />
          <UnderLine />
        </TopHalf>
        <BottomHalf>
          <Profile>
            <Avatar>
              <img src={avatar} height={110} width={110} />
            </Avatar>
            <div>
              <Text
                Text={profileName}
                color="#fff"
                size="18px"
                m="1rem 0 0 0"
                fw="700"
                align="left"
                lh="31px"
              />
              <Text
                Text={profileTitle}
                color="#fff"
                size="14px"
                m="0.2rem 0 0 0"
                fw="200"
                align="left"
                lh="31px"
              />
            </div>
          </Profile>
          <ReviewText>
            <Text
              Text={profileReview}
              color="#fff"
              size="14px"
              fw="200"
              align="left"
              lh="31px"
            />
          </ReviewText>
        </BottomHalf>
      </Hero>
      <Tabs />
    </>
  )
}

export default Review
