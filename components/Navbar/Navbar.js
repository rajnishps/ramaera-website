import React, { useState, useEffect, useRef } from "react"
//import './Navbar.css';
import styled from "styled-components"
import { Burger, Menu } from "./components"
import FocusLock from "react-focus-lock"
import Link from "next/link"
import Button from "../Button/Button"

const ImageHolder = styled.img`
  transform: scale(0.9);
  @media (max-width: 1000px) {
    transform: scale(0.85);
  }
  @media (max-width: 768px) {
    transform: scale(0.8);
  }
  @media (max-width: 600px) {
    transform: scale(0.7);
  }

  @media (max-width: 500px) {
    transform: scale(0.6);
  }
  @media (max-width: 400px) {
    transform: scale(0.5);
  }
`
const Link2 = styled.div`
  display: flex;
  margin: 0 10px;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  font-weight: 500;
  position: relative;
  height: 3.5rem !important;

  @media (max-width: 1400px) {
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 33px;
    /* identical to box height */

    text-transform: uppercase;
  }
`
const LinkTo = styled.div`
  font-weight: 300;
  line-height: 20px;
  //width: 50px;
  @media (min-width: 1200px) {
    width: 11vw;
  }
`

const logo = "/logo/logo.png"
const Navbar = ({ selectedTab }) => {
  const [open, setOpen] = useState(false)
  const node = useRef()
  const menuId = "main-menu"

  const [navbar, setNavbar] = useState(false)
  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    changeBackground()
    window.addEventListener("scroll", changeBackground)
  })

  return (
    <nav className="nav">
      <div>
        <Link href="/" spy={true} smooth={true}>
          <ImageHolder loading="lazy" src={logo} alt="Logo" className="Logo" />
        </Link>
      </div>
      <div className="RightContainer">
        <div className="PC LeftNav">
          <ul className="list">
            <Link2>
              <Link
                href="/"
                className="left-nav-font"
                style={{ color: "white" }}
              >
                HOME
                <div
                  className="Line"
                  style={{
                    display: selectedTab === "home" ? "block" : "none",
                  }}
                />
              </Link>
            </Link2>

            <Link2>
              <Link
                href="/Industries"
                className="left-nav-font"
                style={{ color: "white" }}
              >
                OUR INDUSTRIES
                <div
                  className="Line"
                  style={{
                    display: selectedTab === "industries" ? "block" : "none",
                  }}
                />
              </Link>
            </Link2>

            <Link2>
              <Link
                href="/Companies"
                className="left-nav-font"
                style={{ color: "white" }}
              >
                OUR COMPANIES
                <div
                  className="Line"
                  style={{
                    display: selectedTab === "companies" ? "block" : "none",
                  }}
                />
              </Link>
            </Link2>
          </ul>
        </div>

        <div className="PC RightNav">
          <Link href="/SubmitProject">
            <Link2>
              <LinkTo className="right-nav-font " style={{ color: "white" }}>
                Submit Your Ideas
                <div />
              </LinkTo>
            </Link2>
          </Link>
          <Link2>
            <Link
              href="/Career"
              className="right-nav-font"
              style={{ fontWeight: "300", color: "white" }}
            >
              Career
            </Link>
          </Link2>

          <Link2>
            <Link
              href="/ContactUs"
              className="right-nav-font"
              style={{ fontWeight: "300", color: "white",minWidth:"90px" }}
            >
              Contact Us
            </Link>
          </Link2>

          <Link href="/">
            {/* <Link2>
              <svg
                width="18"
                height="18"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.4373 19.2498C7.12957 19.2498 3.62494 15.7451 3.62494 11.4374C3.62494 7.12963 7.12957 3.625 11.4373 3.625C15.7451 3.625 19.2497 7.12963 19.2497 11.4374C19.2497 15.7451 15.7451 19.2498 11.4373 19.2498ZM25.0418 22.8325L20.1794 18.0013C20.1763 17.9982 20.1731 17.9982 20.17 17.995C21.5481 16.1638 22.3747 13.8982 22.3747 11.4373C22.3747 5.40774 17.4669 0.5 11.4373 0.5C5.40617 0.5 0.5 5.40774 0.5 11.4373C0.5 17.4669 5.40617 22.3747 11.4373 22.3747C13.8982 22.3747 16.1638 21.5481 17.9935 20.1716C17.9966 20.1747 17.9966 20.1778 17.9997 20.1809L22.8325 25.0418C23.1371 25.3465 23.5371 25.4996 23.9371 25.4996C24.3371 25.4996 24.7371 25.3465 25.0418 25.0418C25.6527 24.4309 25.6527 23.4434 25.0418 22.8325Z"
                  fill="white"
                />
              </svg>
            </Link2> */}
          </Link>
          <Link2>
            <Link target="_blank" href="https://kyc.ramaera.com/Kyc-login.aspx">
              <Button
                padding="2px"
                noLineHeight="12px"
                fontSize="12px"
                width="20px"
                height="3.5rem"
                Text="Ramaera Subscriber Login"
                inheight="0.2rem"
                bborder="1.5px solid white"
              />
            </Link>
          </Link2>
        </div>

        <div className="Mobile" ref={node}>
          <FocusLock disabled={!open}>
            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
            <Menu open={open} setOpen={setOpen} id={menuId} />
          </FocusLock>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
