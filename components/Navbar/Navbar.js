import React,{useState, useEffect, useRef } from 'react'
//import './Navbar.css';
import styled from 'styled-components';
import { Burger, Menu } from './components';
import FocusLock from 'react-focus-lock';

const Link2 = styled.div`
  display: flex;
  margin: 0;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  font-weight: 500;
  position: relative;
  height: 3.5rem !important;
  color: #FFF;

  @media(max-width: 1400px){
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 33px;
    /* identical to box height */

    text-transform: uppercase;
  }
`;

const logo = '/logo/logo.png'

const Navbar = () => {

  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  const navItem = {
    home : false,
    marketPlace : false,
    aboutUs : false,
    blog : false,
    event : false,
    metaverse : false,
    default : true,
  }
  const [navbar, setNavbar] = useState(false)
  const [active, isActive] = useState(navItem);

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
      <nav className="nav" >
        <div>
          <div to="/" spy={true} smooth={true} 
            onClick={()=> isActive({...navItem})}
          ><img src={logo} alt="Logo" className="Logo" /></div>
        </div>
        <div className='RightContainer'>
          <div className='PC LeftNav'>
            <ul className="list">

              <Link2 to="/" 
                onClick={()=> isActive({...navItem, home: true})}
              >
                HOME
                <div className='Line' style={{
                 display: active.home || active.default ? 'block' : 'none'
               }} />
              </Link2>

              <Link2 to="/" 
                onClick={()=> isActive({...navItem, marketPlace: true, default: false})}
                
              >
                OUR INDUSTRIES
                <div className='Line' style={{
                display: active.marketPlace ? 'block' : 'none'
              }} />
              </Link2>  

              <Link2 to="/"
                onClick={()=> isActive({...navItem, aboutUs: true, default: false})}
                
              >
                OUR COMPANIES
                <div className='Line' style={{
                display: active.aboutUs ? 'block' : 'none'
               }} />
              </Link2> 
            </ul> 
          </div>

          <div className='PC RightNav'>
            <Link2 to="/" 
                onClick={()=> isActive({...navItem, event: true, default: false})}
                style={{
                color: active.event ? 'orange' : '#FFF',
                  fontSize:'0.9rem'
              }}
              >
                Career
              </Link2> 

              <Link2 to="/" 
                onClick={()=> isActive({...navItem, metaverse: true, default: false})}
                style={{
                color: active.metaverse ? 'orange' : '#FFF',
                fontSize:'0.9rem'
              }}
              >
                Contact
              </Link2> 
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4373 19.2498C7.12957 19.2498 3.62494 15.7451 3.62494 11.4374C3.62494 7.12963 7.12957 3.625 11.4373 3.625C15.7451 3.625 19.2497 7.12963 19.2497 11.4374C19.2497 15.7451 15.7451 19.2498 11.4373 19.2498ZM25.0418 22.8325L20.1794 18.0013C20.1763 17.9982 20.1731 17.9982 20.17 17.995C21.5481 16.1638 22.3747 13.8982 22.3747 11.4373C22.3747 5.40774 17.4669 0.5 11.4373 0.5C5.40617 0.5 0.5 5.40774 0.5 11.4373C0.5 17.4669 5.40617 22.3747 11.4373 22.3747C13.8982 22.3747 16.1638 21.5481 17.9935 20.1716C17.9966 20.1747 17.9966 20.1778 17.9997 20.1809L22.8325 25.0418C23.1371 25.3465 23.5371 25.4996 23.9371 25.4996C24.3371 25.4996 24.7371 25.3465 25.0418 25.0418C25.6527 24.4309 25.6527 23.4434 25.0418 22.8325Z" fill="white"/>
              </svg>

          </div>
            
          <div className='Mobile' ref={node}>
            <FocusLock disabled={!open}>
              <Burger  open={open} setOpen={setOpen} aria-controls={menuId} />
              <Menu open={open} setOpen={setOpen} id={menuId} />
            </FocusLock>
          </div>
        </div>
      </nav>   
    )
}

export default Navbar
