import PageWidth from "../../../../components/Width/PageWidth"
import Text from "../../../../components/Text/Text"

const index = () => {
  return (
    <div id="3">
      <PageWidth full>
        <div
          data-aos="slide-up"
          data-aos-mirror="true"
          data-aos-easing="slide-down"
          data-aos-duration="200"
        >
          <Text
            Text="BUILD BIG AND BE A PART OF THE NEW TECHNOLOGICAL INVESTMENT AT RAMAERA INDUSTRIES"
            lg="linear-gradient(90deg, #FFE259 0%, #FFA751 100%)"
            font
            size="32px"
            fw="400"
            align="center"
            padding=" 10vh 10vw 0 10vw "
            lh="48px"
            msize="1.8rem"
            mwidth="100vw"
            mpadding="10vw"
            mmargin="10vh 0 0 0 "
          />
          <Text
            Text="We are focused on developing comprehensively with our team as a whole. Mentoring and equipping with unmatched industrial exposure and exceptional skills is one of our goals. Ramaera Industries has a team of dedicated professionals pioneering in their respective domains."
            color="#FFF"
            size="20px"
            lh="32px"
            fw="500"
            m="2rem 0 0 0"
            align="center"
            padding=" 0 20vw"
            msize="1.4rem"
            mta="center"
            mwidth="100vw"
            mpadding="10vw"
          />
        </div>
      </PageWidth>
    </div>
  )
}

export default index
