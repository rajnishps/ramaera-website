import styled from "styled-components";

const PageLayout = ({
  children,
  start,
  padding,
  height,
  adjustBg,
  bgColor,
  Zindex,
  Y,
  resTr,
  mheight,
  mmheight,
  mtpadding,
  hideO,
  paddingBottom,
  paddingTop,
  bg,
}) => {
  const StyledPageLayout = styled.section`
    padding-top: ${paddingTop ? paddingTop : 0};
    padding-bottom: ${paddingBottom ? paddingBottom : ""};
    @media (max-width: 768px) {
      padding-bottom: 0;
      min-height: ${height ? height : "100vh"};
      display: flex;
      align-items: center;
      justify-content: ${start ? "flex-start" : "center"};
      flex-direction: column;
      /*     padding-top: ${padding ? padding : "calc(1rem + 1rem)"};
      */
      padding-top: ${padding ? padding : "0"};
      background: linear-gradient(
        90deg,
        rgb(var(--background-start-rgb)) 0%,
        rgb(var(--background-end-rgb)) 100%
      );
      background-image: url(${bg ? bg : ""});
      background-size: ${adjustBg ? "100% auto" : "100% 100%"};
      background-repeat: no-repeat;
      position: relative;
      background-position: center center;
      overflow-x: hidden;
      overflow: ${hideO ? hideO : ""};
      overflow-y: ${Y ? Y : ""};
      z-index: ${Zindex ? Zindex : "1"};

      min-height: 100vh;
      overflow-y: hidden;
      background-size: ${adjustBg ? "100% auto" : "auto 100%"};
      background-position: ${adjustBg ? "center center" : "center top"};

      min-height: 100vh;
      min-height: ${mheight ? mheight : ""};
      padding-top: ${mtpadding ? mtpadding : "calc(1rem + 1rem)"};
      overflow: visible;
    }
    @media (max-width: 400px) {
      height: ${mmheight ? mmheight : "100vh"};
    }
  `;

  return <StyledPageLayout>{children}</StyledPageLayout>;
};

export default PageLayout;
