import { Email, LinkedIn, Twitter } from '@material-ui/icons';
import "../styles/Footer.css"

import React from 'react'

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            {" "}
            <Twitter/>
            <LinkedIn/>
            <Email/>
        </div>
        <p> &copy; 2022 aksact.dev</p>
    </div>
  )
}

export default Footer