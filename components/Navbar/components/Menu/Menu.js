import React, { useState } from "react"
import { bool } from "prop-types"
import { StyledMenu } from "./Menu.styled"
import styled from "styled-components"
import Link from "next/link"
import Button from "../../../Button/Button"

const MenuItems = styled.div`
  display: grid;
  place-items: center;
  margin-top: 5rem;
`

const Link1 = styled.div`
  display: flex;
  margin: 0 2rem;
  align-items: center;
  text-decoration: none;
  color: #fff;
  position: absolute;
  left: 2rem;
  top: 1rem;
  width: 3rem;
`

const Right = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 2rem 0;
  align-items: center;
`

const T = styled.p`
  color: #fff;
  font-weight: 500;
  font-size: 16px;
  margin-top: 1rem;
  @media only screen and (max-width: 768px) {
    font-weight: 510;
    font-size: 1rem;
  }
`

const H = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  color: #000;
`

const Menu = ({ open, setOpen, ...props }) => {
  const isHidden = open ? true : false
  const tabIndex = isHidden ? 0 : -1
  if (typeof window !== "undefined") {
    if (open) {
      document.body.classList.add("fixed-position")
    } else if (!open) {
      document.body.classList.remove("fixed-position")
    }
  }
  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <Link1 spy={true} smooth={true}></Link1>

      <MenuItems>
        <H>
          <Link href="/" onClick={() => setOpen(false)}>
            HOME
          </Link>
        </H>
        <H>
          <Link href="/industries" onClick={() => setOpen(false)}>
            OUR INDUSTRIES
          </Link>
        </H>
        <H>
          <Link href="/companies" onClick={() => setOpen(false)}>
            OUR COMPANIES
          </Link>
        </H>
        <H>
          <Link href="/idea"> Submit Your Ideas</Link>
        </H>
        <H>
          <Link href="/career" onClick={() => setOpen(false)}>
            Career
          </Link>
        </H>
        <H>
          <Link href="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
        </H>
        <Link target="_blank" href="https://kyc.ramaera.com/Kyc-login.aspx">
          <Button
            nav
            width="20px"
            height="2.75rem"
            Text="KYC"
            inheight="2.5rem"
          />
        </Link>
      </MenuItems>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu
