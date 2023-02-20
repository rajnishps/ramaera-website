import styled from "styled-components";

export const CardContainer = styled.div`
  /* height: 50vh;
   */
`;

export const CardImg = styled.div`
  background-color: #1d1d1d;
  color: #efefef;
  background: #1d1d1d;
  display: inline-block;
  margin: 1rem;
  width: 20vw;
  height: 38vh;
  min-width: 230px;
  min-height: 230px;
  overflow: hidden;
  position: relative;
  text-align: center;

  img {
    width: 100%;
    height: 100%;
    vertical-align: top;
  }
`;

export const CardDetails = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: -webkit-linear-gradient(
    bottom,
    rgba(0, 0, 0, 0.8) 0%,
    transparent 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-align: left;
  padding: 0 0px 10px 15px;
`;

export const Name = styled.div`
  color: #a58e7c;
  font-weight: 400;
  line-height: 1;
  letter-spacing: 1px;
  margin: 3px 0;
  font-size: 25px;
`;

export const Title = styled.div`
  font-weight: 300;
  font-size: 20px;
`;
