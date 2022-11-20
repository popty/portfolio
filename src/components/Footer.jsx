import { Email, LinkedIn, Twitter } from '@material-ui/icons';
import "../styles/Footer.css"

import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            {" "}
            <a href="https://twitter.com/Akshayio"><Twitter/></a>
            <a href="https://www.linkedin.com/in/akshayth"><LinkedIn/></a>
            <a href="mailto:akshay@aksact.dev"><Email/></a>
        </div>
        <p> &copy; 2022 aksact.dev</p>
    </div>
  )
}

export default Footer