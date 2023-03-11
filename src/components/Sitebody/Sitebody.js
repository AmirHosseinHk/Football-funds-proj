import React from 'react'
import './Sitebody.css'
import Topnav from '../topnav/Topnav'
import Card from "../card/Card";
import Whitebox from '../Whitebox/Whitebox';
import Footer from '../footer/Footer';





export default function Sitebody() {
  return (
    <div className='Sitebody'>
      <Topnav />
      <Card />
      <Whitebox />
      <Footer />
    </div>
  )
}
