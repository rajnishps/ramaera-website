import React, { useState } from "react"
import Button from "../../../../components/Button/Button"

import {
  Section,
  Item,
  Icon,
  Title,
  Text,
  Vector,
  ZoomIn,
  ZoomDetails,
  Modal,
  ModalContent,
  ZoomName,
  ZoomTitle,
  ZoomAbout,
  CloseImg,
} from "./style.js"

import { data } from "./../Collection/data"

const Card = () => {
  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }

  return (
    <>
      
       <div className="container privacy-container">
        <div className="basis-12/12 privacy-alignment">
          <div className="basis-8/12 privacy-8">


          <h1 className="privacy-heading">Privacy Policy</h1> 
            <p className="privacy-text">Welcome to Ramaera Industries Limited website. The information that we collect and store during normal use of the site is used to monitor use of the site and to help its further development. Our goal is to protect your privacy and the information that you submit to us through the Internet.</p><br/>
            <p className="privacy-text">The Privacy Policy is a document informing the users about the use, process, and disclosure of their personal information collected through a website or Mobile Application. This document can be used for any type of industries including healthcare, finance, e-commerce, transportation, etc.</p><br/>
            <p className="privacy-text">Although there is no exclusive data protection law in India, the privacy and data protection is mandated under<mark>Section 43A of Information Technology Act, 2000 read with Information Technology (reasonable security practices and procedures and sensitive personal data or information) Rules, 2011.</mark></p><br/>
            <p className="privacy-text">It is mandatory under the <mark>Information Technology Act 2000</mark> to notify and get the consent of users before collecting and processing their information. Thus, the Privacy Policy has to be visible and understandable to the users.</p><br/>
            <p className="privacy-text">The Sensitive Personal Data in India constitutes the following categories of the data: passwords, financial data, health data, official identifier, sex life, sexual orientation, biometric data, genetic data, transgender status, intersex status, caste or tribe, religious belief, political affiliation, or any other category of data specified by the concerned authority.</p><br/>
            <p className="privacy-text">This document is drafted as per the Indian laws and rules. It should be noted that this document only includes a Privacy Policy. Other related documents like Website Terms and Conditions and Cookies Policy need to be drafted separately. Terms and Conditions and Privacy Policy are separate documents.</p><br/>
            <p className="privacy-text">A number of pages in this website give you the option to submit personal information to the Company. All such communications are not confidential. Any application, request or enquiry you make, may be passed or made available to Group affiliates. Any personal data provided to or collected by Ramaera Industries Limited is controlled by Ramaera Industries Limited.</p><br/>
            <p className="privacy-text">By accessing this web site, you indicate your acceptance of this Privacy Policy.</p><br/>

            <h3>We collect, process and disclose your personal data for the following purposes:</h3>

            <ul id="privacy-list">
              <li>To process your payments, if you purchase our products/services, to provide you with your order status, deal with your enquiries and requests, and assess and handle any complaints</li>
              <li>To process and answer your inquiries or to contact you to answer your questions and/or requests</li>
              <li>To develop and improve our products, services, communication methods and the functionality of our websites;</li>
              <li>For the purposes of competitions or promotions that you have entered</li>
              <li>To communicate information to you and to manage your registration and/or subscription to our newsletter or other communications</li>
              <li>To manage our everyday business needs regarding your participation in our contests, sweepstakes or promotional activities or request</li>
              <li>To authenticate the identity of individuals contacting us by telephone, electronic means or otherwise</li>
              <li>For internal training and quality assurance purposes</li>
              <li>To understand and assess the interests, wants, and changing needs of consumers, to improve our website, our current products and services, and/or developing new products and services; and</li>
              <li>To provide personalized products, communications and targeted advertising as well as product recommendations to you </li>
            </ul>



            <h3>We may transfer and disclose your personal data to third-parties:</h3>

  <ul id="privacy-list">
  <li>To comply with a legal obligation</li>
  <li>When we believe in good faith that an applicable law requires it</li>
  <li>At the request of governmental authorities conducting an investigation</li>
  <li>For the purposes of competitions or promotions that you have entered</li>
  <li>To verify or enforce our “Terms of Use” or other applicable policies;</li>
  <li>To detect and protect against fraud, or any technical or security vulnerabilities</li>
  <li>To respond to an emergency or otherwise</li>
</ul>



          </div>
        </div>

       </div>
     
      <div style={{height:"100px"}}></div>
    </>
  )
}

export default Card
