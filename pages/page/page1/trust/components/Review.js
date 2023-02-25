import styled from "styled-components"
import Text from "../../../../../components/Text/Text"

const Hero = styled.div`
  position: absolute;
  top: 22vh;
  left: 17.5%;
  width: 60vw;
  height: 40vh;
  background: linear-gradient(90deg, #000000 0%, #434343 100%);
  border: 2px solid #ffffff;
  border-radius: 24px;
  overflow: hidden;

  @media only screen and (max-width: 768px) {
    top: 10vh;
    left: 20%;
    height: 55vh;
  }
`
const Profile = styled.div`
  margin-left: 100px;
  width: 50vw;
  display: flex;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`
const Designation = styled.div`
  position: absolute;
  bottom: 25px;
`

const Image = styled.img`
  position: absolute;
  left: 100px;
  border-radius: 999px;
  border: solid 2px white;
`
const TopHalf = styled.div`
  margin-top: 40px;
  @media only screen and (max-width: 768px) {
    transform: scale(0.75);
    margin-right: auto;
    margin-left: auto;
  }
`
const BottomHalf = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`
const NameDiv = styled.div`
  @media only screen and (max-width: 768px) {
    position: absolute;
    right: -20vw;
    top: 50%;
  }
`
const Avatar = styled.div`
  width: 110px;
  height: 110px;
  margin-right: 20px;
  overflow: hidden;
  @media only screen and (max-width: 768px) {
    margin-right: auto;
    margin-left: auto;
  }
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
  @media only screen and (max-width: 768px) {
    position: relative;
    margin-right: auto;
    margin-left: auto;
    bottom: -12vh;
  }
`
const Review = ({ avatar, profileName, profileTitle, profileReview }) => {
  return (
    <Hero>
      <TopHalf>
        <Text
          Text="What our customer are saying"
          size="28px"
          lh="20px"
          color="#FFF"
          align="center"
          fw="800"
          mta="left"
        />
        <UnderLine />
      </TopHalf>
      <BottomHalf>
        <Profile>
          <Avatar>
            <Image src={avatar} alt="profile photo" height={110} width={110} />
          </Avatar>
          <NameDiv>
            <Text
              Text={profileName}
              color="#fff"
              size="18px"
              m="0 0 0 0"
              fw="700"
              align="left"
              lh="20px"
            />
            <Designation>
              <Text
                Text={profileTitle}
                color="#fff"
                size="14px"
                m="0 0 0 0"
                fw="200"
                align="left"
                lh="10px"
              />
            </Designation>
          </NameDiv>
        </Profile>
        <ReviewText>
          <Text
            Text={profileReview}
            color="#fff"
            size="14px"
            fw="200"
            align="left"
            lh="20px"
            msize="14px"
            mwidth="100%"
            mpadding="10px"
          />
        </ReviewText>
      </BottomHalf>
    </Hero>
  )
}

export default Review
