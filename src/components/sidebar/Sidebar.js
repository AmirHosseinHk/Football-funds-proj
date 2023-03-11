import React from 'react'
import './Sidebar.css'
import SidebarSide from '../SidebarSide/SidebarSide'
import MainSidebar from './MainSidebar/MainSidebar'
export default function Sidebar() {
  return (
    <div className='Sidebar'>
        <SidebarSide />
        <MainSidebar />
    </div>
  )
}
