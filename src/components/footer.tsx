import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='iconsDiv'>
<FaFacebookSquare/>
<FaInstagram/>
<FaTwitter/>
<FaLinkedin/>
      </div>
      <p className='copyright'>
      Copyright ©2020 All rights reserved.
      </p>
    </div>
  )
}

export default Footer