import React from 'react';

const Footer = () => {
  return (
    <div className='footer'>
    <div className='details'> 
    <div className='mail'>
        <h5>Email</h5>
        <a data-cursorpointer={true} href="mailto: sohamdhal6@gmail.com">sohamdhal6@gmail.com</a>
    </div>
    <div className='phone'>
        <h5>Phone</h5>
        <a data-cursorpointer={true} href="tel: +918260959866">+91-8260959866</a>
    </div>
    </div>
        <p>©Copyright 2023 Soham Dhal. Made by</p>  
    </div>      
  )
}

export default Footer;