import React from 'react'
import './SidebarSide.css'
import MenuIcon from '@mui/icons-material/Menu';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import ExploreIcon from '@mui/icons-material/Explore';
import {AiFillMessage} from 'react-icons/ai'
import {IoIosFootball} from 'react-icons/io'
import {FaBasketballBall} from 'react-icons/fa'
import {RiBilliardsFill} from 'react-icons/ri'
import {RiPingPongFill} from 'react-icons/ri'
import {BiCycling} from 'react-icons/bi'
import {RiErrorWarningFill} from 'react-icons/ri'
import {BiSupport} from 'react-icons/bi'





export default function SidebarSide() {
  return (
    <div className='Sidebarside'>
        <MenuIcon className='MenuIcon' />
        <LocalFireDepartmentIcon className='LocalFireDepartmentIcon'/>
        <ExploreIcon className='ExploreIcon'/>
        <AiFillMessage className='AiFillMessage'/>
        <p className='border-bottom'></p>
        <IoIosFootball className='IoIosFootball'/>
        <FaBasketballBall className='FaBasketballBall'/>
        <RiBilliardsFill className='RiBilliardsFill'/>
        <RiPingPongFill className='RiPingPongFill' />
        <BiCycling className='BiCycling' />
        <RiErrorWarningFill className='RiErrorWarningFill' />
        <BiSupport className='BiSupport' />
    </div>
  )
}
