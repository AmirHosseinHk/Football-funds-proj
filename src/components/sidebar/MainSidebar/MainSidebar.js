import React from 'react'
import './MainSidebar.css'
import OndemandVideoRoundedIcon from '@mui/icons-material/OndemandVideoRounded';
import {MdOutlineDashboard} from 'react-icons/md'
import {BiVideo} from 'react-icons/bi'
import {GoListOrdered} from 'react-icons/go'
import {SiAirplayvideo} from 'react-icons/si'
import { useState } from 'react';
import {AiOutlineShop} from 'react-icons/ai'
import {HiOutlineNewspaper} from 'react-icons/hi'
import {IoIosArrowDown} from 'react-icons/io'
import StarIcon from '@mui/icons-material/Star';




export default function MainSidebar() {
    const [tagArray,setTagArray]=useState([
        {id:1,Tagname:BiVideo,txt:'Live Football'},
        {id:2,Tagname:GoListOrdered,txt:'Standings'},
        {id:3,Tagname:SiAirplayvideo,txt:'Highlights'},
        {id:4,Tagname:AiOutlineShop,txt:'Shop'},
        {id:5,Tagname:HiOutlineNewspaper,txt:'News'},
    ])
    const [FootballLeague,setFootballLeague]=useState([
        {id:1,src:'./img/football-lig/qatar.jfif',txt:'Worldcup Qatar 2022'},
        {id:2,src:'./img/football-lig/d2.png',txt:'Champions League'},
        {id:3,src:'./img/football-lig/p.png',txt:'Premier League'},
        {id:4,src:'./img/football-lig/la1.png',txt:'La Liga'},
        {id:5,src:'./img/football-lig/france.png',txt:'Ligue 1'}
    ])
    const [favoriteClubs,setFavoriteClub]=useState([
        {id:1,src:'./img/star-club/download.png',txt:'Chelsea FC'},
        {id:2,src:'./img/star-club/download (1).png',txt:'Manchester City'},
        {id:3,src:'./img/star-club/download (2).png',txt:'Bayern Munchen'}
    ])
  return (
    <div className='MainSidebar'>
        <div className="flexitems">
            <OndemandVideoRoundedIcon className='OndemandVideoRoundedIcon'/>
            <p className='Onesport'>Onesport</p>
        </div>
        <p className='Menu'>Menu</p>
        <div className="flexitems">
            <MdOutlineDashboard className='MdOutlineDashboard'/>
            <p className='Dashboard'>Dashboard</p>
        </div>
        {/* <div className="flexitems">
            <BiVideo  className='subDashboard-icons'/>
            <p className='subDasboard-txt'>Live Football</p>
        </div>
        <div className="flexitems">
            <GoListOrdered className='subDashboard-icons'/>
            <p className='subDasboard-txt'>Standings</p>
        </div> */}
        {tagArray.map(item=>(
            <div key={item.id} className='flexitems'>
                <item.Tagname className='subDashboard-icons' />
                <p className='subDasboard-txt'>{item.txt}</p>
            </div>
        ))}
        <div className="Football-League-flex">
            <p className='Football League'>Football League</p>
            <IoIosArrowDown className='IoIosArrowDown'/>
        </div>
        
        {FootballLeague.map(item=>(
            <div key={item.id} className="flexitems">
                <img src={item.src}  className='img' alt="" />

                <p className="football-league-items">{item.txt}</p>
            </div>
        ))}

        <div className="Favorite-club">
        Favorite Club
        </div>
        
        {favoriteClubs.map(item=>(
            <div className="flexStarclubs">
                <div key={item.id} className="flexitems">
            <img src={item.src} alt="" className='img' />
            <p className="favorite-items">{item.txt}</p>
            
        </div>
        <StarIcon fontSize='small'  className='StarIcon'/>
            </div>
        ))}
        

    </div>
  )
}
