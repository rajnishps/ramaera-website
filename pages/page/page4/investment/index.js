import PageWidth from "../../../../components/Width/PageWidth"
import Text from "../../../../components/Text/Text"

const index = () => {
  return (
    <>
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
            msize="3.2rem"
            mwidth="100vw"
            mpadding="0"
            mmargin=" 4rem 0 2rem 0"
          />
          <Text
            Text="We are focused on developing comprehensively with our team as a whole. Mentoring and equipping with unmatched industrial exposure and exceptional skills is one of our goals. Ramaera Industries has a team of dedicated professionals pioneering in their respective domains."
            color="#FFF"
            size="20px"
            lh="32px"
            fw="700"
            m="2rem 0 0 0"
            align="center"
            padding=" 0 20vw"
            xmsize="2.2rem"
            xssize="2rem"
            msize="1.2rem"
            mta="center"
            mwidth="100vw"
            mpadding="0"
            mmargin=" 0 0 2rem 2rem"
          />
        </div>
      </PageWidth>
    </>
  )
}

export default index
