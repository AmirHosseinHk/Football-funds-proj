import React from 'react'
import './Footer.css'
import { useState } from 'react'


export default function Footer() {
    const [footerState,setFooterState]=useState([
        {id:1,txt:'Terms Of Service'},
        {id:2,txt:'Report Abuse'},
        {id:3,txt:'Privacy & Data Policy'}
    ])
  return (
    <div className='Footer'>
        <div className="footer-items">{footerState.map(item=>(
            <div className='footer-items-left'>{item.txt}</div>
        ))}</div>
        <div className="footer-items">2022 All Rights Reserved © Onesport</div>
    </div>
  )
}
