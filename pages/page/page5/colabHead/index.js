import React from "react";
import styled from "styled-components";
import { Container,Heading, MapIcon,ImagePoint,MapBox} from "./style";

const index=()=>{

    return (
        <>
        <Container >
            <Heading>
                <h1>
                Lets <br/>Collaborate
                </h1>
                <h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                </h3>
            </Heading>
            
        <MapIcon >
            <MapBox>
            <ImagePoint>
                <img style={{position:"relative",left:"80px",top:"150px", height:"50px", width:"50px"}} src="/content/pointGrey.png" />
                <img style={{position:"relative",left:"106px",top:"285px", height:"50px", width:"50px"}} src="/content/pointGrey.png" />
                <img style={{position:"relative",left:"330px",top:"100px", height:"50px", width:"50px"}} src="/content/pointGrey.png" />
               <a href="#" id="ramaera"><img  style={{position:"relative",left:"240px",top:"210px", height:"50px", width:"50px"}} src="/content/point.png" />
               </a>
                <h3>Ramaera Industries</h3>
                </ImagePoint> 
            </MapBox>

        </MapIcon>

        </Container>

        </>
    )
} 

export default index;