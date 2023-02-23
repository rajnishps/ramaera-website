import PageLayout from "../../../../components/PageLayout/PageLayout";
import Text from "../../../../components/Text/Text";
import PageWidth from "../../../../components/Width/PageWidth";
export const explore = "./content/explore.png";

const index = () => (
  <PageLayout start mheight="30vh" bgColor="#f5f5f5" bg={explore}>
    <PageWidth width="1500px" margin="8rem 0 0 0">
      <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <Text
          Text="EXPLORE BE EMPOWERED BUILD "
          lg="linear-gradient(90deg, #FFE259 0%, #FFA751 100%)"
          font
          size="5rem"
          fw="400"
          align="center"
          lh="105px"
          mlh="50px"
          xmsize="5rem"
          xssize="10vw"
          msize="2.4rem"
          mmargin="0 0 10vh 0"
          m="5rem"
        />
      </div>
    </PageWidth>
  </PageLayout>
);

export default index;
