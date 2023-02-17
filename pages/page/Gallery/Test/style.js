import styled from "styled-components";

export const ContainerTop = styled.div`
height: 110vh;
width: 100vw;
background-image: url("/content/image 49.png");
display: flex;
`

export const Tags = styled.div`
    width: 50%;
    text-align: center;
	display: flex;
    justify-content: space-around;
    align-items: end; 
    margin: 50px auto;
`
export const Button = styled.button`
    padding: 15px;
`


export const Display = styled.div`
    text-align: center;
	padding: 20px 0px;
	background-color: green;
    height: 100%;
	min-height: 100vh;
    width: 100vw;
`

export const Container = styled.div`
    width: 90%;
	margin: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`

// .active {
// 	font-weight: bold;
// 	border-bottom: 1px solid #eee;
// }