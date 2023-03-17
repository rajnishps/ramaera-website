import PageWidth from "../../../../components/Width/PageWidth";
import Text from "../../../../components/Text/Text";
import CustomBg from "./components/CustomBg";
import Texts from "./components/Texts";

const index = () => {
  return (
    <div id="1">
      <PageWidth Left={"left"} width="1500px">
        <div
          data-aos="slide-up"
          data-aos-mirror="true"
          data-aos-easing="slide-down"
          data-aos-duration="200"
        >
          <Text
            Text="Ramaera Industries "
            lg="linear-gradient(90deg, #FFE259 0%, #FFA751 100%)"
            font
            size="3.5rem"
            fw="400"
            align="left"
            lh="70px"
            xmsize="4rem"
            xssize="4rem"
            msize="2.8rem"
            mwidth="100%"
            mpadding="0"
            padding="5vh 0 0 5vw"
            mmargin=" 2rem 0 2rem 0"
            mmwidth="100%"
          />
          <Text
            Text="has begun with the primary motive of nation orientation and strengthening the vision of a sustainable and prosperous nation. With the idea of encompassing and emboldening our presence in industrial sectors such as FMCG, Hotels, Packaging, Agriculture & IT Businesses. We are consistent in serving you the best with due honesty and world class standards."
            color="#FFF"
            size="1.9rem"
            lh="42px"
            fw="350"
            m="1.2rem 0 0 0"
            align="left"
            width="85vw"
            xmsize="2.2rem"
            xssize="2rem"
            msize="1.2rem"
            mta="center"
            padding=" 0 10.5vw 0 5vw"
            mwidth="60%"
            mpadding="5vw"
            mmargin=" 2rem"
            mmwidth="100%"
            mm="unset"
          />
        </div>

        <CustomBg />

        <div
          style={{
            position: "absolute",
            right: "0",
            top: "30vh",
            zIndex: "-2",
          }}
          data-aos="slide-left"
          data-aos-duration="500"
          data-aos-anchor-placement="top-bottom"
        ></div>
      </PageWidth>
      <Texts />
    </div>
  );
};

export default index;
