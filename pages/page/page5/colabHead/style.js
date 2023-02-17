import styled from "styled-components";

export const Container = styled.div`
padding: 3rem 0 5rem 0;
display:flex;
background:black;
`

export const Heading = styled.div`
justify-content: center;
width:40%;
margin:auto;
padding-left:1rem;
@media (max-width: 1000px){
    width:50%;
}

h1{
    font-size:4rem;
    font-family: personal;
    background: #FFB76B;
    background: linear-gradient(to right, #FFA73D,gold);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @media (max-width: 1280px){
        font-size:3rem;
    }
    @media (max-width: 768px){
        font-size:2.5rem;
    }
    @media (max-width: 540px){
        font-size:1.8rem;
    }
    @media (max-width: 420px){
        font-size:1rem;
    }
}
h3{
font-size:1rem;
color:white;
line-height: 2;
@media (max-width: 420px){
    font-size:0.5rem;
    line-height: 2;
  }
}
`

export const MapBox = styled.div`
width:600px;
height: 400px;
@media (max-width: 600px){
width:200px;
height: 130px;
}
`
export const MapIcon = styled.div`
width:60%;
@media (max-width: 1000px){
    width:50%;
}


`

export const ImagePoint = styled.div`
background-image: url("/content/map.png");
height: 100%;
width: 100%;
background-size: contain;
    
h3{
    display: none;
    position: relative;
    left: 374px;
    top: 184px;
    height: 50px;
    font-family: personal;
    background: #FFB76B;
    background: linear-gradient(to right, #FFA73D,gold);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    }

    #ramaera:hover~h3{
        display: block;
    }

   
`

export const ImgPoint1 = styled.img`
 @media (max-width: 600px){
        display: none;
       }
`

export const ImgPoint2 = styled.img`
 @media (max-width: 600px){
    display: none;

       }
`

export const ImgPoint3 = styled.img`
 @media (max-width: 600px){
    display: none;

       }
`

export const ImgPointMain = styled.a`

img{
position: relative;
left: 240px;
top: 210px;
height: 50px;
width: 50px;
 @media (max-width: 600px){
       height: 25px;
       width: 25px;
        top: 65px;
        left: 122px;
       }
}

`

