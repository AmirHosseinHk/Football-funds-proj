import React from 'react'
import './site.css'
import { Container } from 'react-bootstrap'
import Sidebar from '../sidebar/Sidebar'
import Sitebody from '../Sitebody/Sitebody'
export default function Site() {
  return (
    <div className='aaa'>
        <div className='siteComponent'>
            <Sidebar  />
            <Sitebody />
        </div>
    </div>
  )
}
