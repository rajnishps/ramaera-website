import React, { useState, useEffect, useRef } from "react"
//import './Navbar.css';
import styled from "styled-components"
import { Burger, Menu } from "./components"
import FocusLock from "react-focus-lock"
import Link from "next/link"

const Link2 = styled.div`
  display: flex;
  margin: 0;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  font-weight: 500;
  position: relative;
  height: 3.5rem !important;
  color: #fff;

  @media (max-width: 1400px) {
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 33px;
    /* identical to box height */

    text-transform: uppercase;
  }
`

const logo = "/logo/logo.png"
const Navbar = ({ selectedTab }) => {
  console.log(selectedTab)
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
          <img loading="lazy" src={logo} alt="Logo" className="Logo" />
        </Link>
      </div>
      <div className="RightContainer">
        <div className="PC LeftNav">
          <ul className="list">
            <Link2>
              <Link href="/">
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
              <Link href="/industries">
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
              <Link href="/companies">
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
          <Link2>
            <Link
              href="/career"
              style={{
                display: "block",
                fontSize: "0.9rem",
              }}
            >
              Career
            </Link>
          </Link2>

          <Link2>
            <Link
              href="/contact"
              style={{
                display: "block",
                fontSize: "0.9rem",
              }}
            >
              Contact
            </Link>
          </Link2>
          <Link href="/">
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
          </Link>
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
