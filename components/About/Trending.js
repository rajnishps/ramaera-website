import React from "react";
import styled from "styled-components";
import Articles from "./Articles";
import News from "./News/News";
import { IconImg, IconInfo, TopIcons, TrendingContainer, TrendingHead, TrendingLeft, TrendingRight, TrendingTop } from "./style";
// import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

const Trending = () => {
  return (
    <TrendingContainer>
      <TrendingLeft className="scrollbar">
        <TrendingHead>Trending</TrendingHead>
        <TrendingTop>
          <div style={{ width: "30%" }}>
            <p style={{ color: "white", marginLeft: "30px", fontSize: "25px" }}>
              Today
            </p>
          </div>
          <div
            style={{
              width: "70%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <TopIcons>
              <IconImg src={"/background/Vector.png"} alt="" />
              <IconInfo>Read Later</IconInfo>
            </TopIcons>
            <TopIcons>
              <IconImg src={"/background/eye on.png"} alt="" />
              <IconInfo>Hide</IconInfo>
            </TopIcons>
            <TopIcons>
              <IconImg src={"/background/book open.png"} alt="" />
              <IconInfo>Mark as read</IconInfo>
            </TopIcons>
            <TopIcons>
              <IconImg src={"/background/empty.png"} alt="" />
              <IconInfo>Mark All</IconInfo>
            </TopIcons>
          </div>
        </TrendingTop>
          <News/>
          <News/>
          <News/>
          <News/>
          <News/>
          <News/>
          <News/>
          <News/>
      </TrendingLeft>
      <TrendingRight>
        <Articles/>
      </TrendingRight>
    </TrendingContainer>
  );
};

export default Trending;
