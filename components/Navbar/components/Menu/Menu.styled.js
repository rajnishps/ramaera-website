import styled from "styled-components"

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: none; //  ${({ theme }) => theme.primaryLight};
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  min-height: 100vh;
  width: 100%;
  text-align: center;
  align-items: center;
  padding: 2rem;
  position: absolute;
  top: -40px;
  line-height: 50px;
  left: 0;
  transition: transform 0.3s ease-in-out;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(2rem);
  margin: 0;
  a {
    font-family: "Montserrat", sans-serif;
    font-size: 1.5rem;
    font-weight: bold;
    color: #fff;
    text-decoration: none;
    transition: color 0.3s linear;
    margin: 1rem 0;
  }
`
