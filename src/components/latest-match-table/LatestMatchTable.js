import React from 'react'
import './LatestMatchTable.css'
import {RiErrorWarningLine} from 'react-icons/ri'
import {BiLineChart} from 'react-icons/bi'
import { useState } from 'react'


export default function LatestMatchTable() {

    const [tableinfo,setTableinfo]=useState([
        {id:1,class:'odd',firstTeam:'Qatar',resalt:'0-2',secondTeam:'Ecuador',date:'20 November 2022'},
        {id:2,class:' ',firstTeam:'England',resalt:'6-2',secondTeam:'Iran',date:'21 November 2022'},
        {id:3,class:'odd',firstTeam:'France',resalt:'4-1',secondTeam:'Australia',date:'22 November 2022'},
        {id:4,class:' ',firstTeam:'Argentina',resalt:'1-2',secondTeam:'Saudi Arabia',date:'22 November 2022'},
        {id:5,class:'odd',firstTeam:'Germany',resalt:'1-2',secondTeam:'Japan',date:'23 November 2022'},
    ])



  return (
    <>
        {
            tableinfo.map(item=>(
                <div key={item.id} className='LatestMatchTable'>

                <div className={`rows ${item.class}`}>
            <img src={`./img/latest-match/${item.firstTeam}.png`} className='imagesstyle' alt="" />
            <div className="firstTeam">{item.firstTeam}</div>
            <div className="resaltBox">{item.resalt}</div>
            <div className="secondTeam">{item.secondTeam}</div>
            <img src={`./img/latest-match/${item.secondTeam}.png`} className='imagesstyle' alt="" />
            <div className="fulltimeBox">Full - Time</div>
            <div className="date">{item.date}</div>
            <div className="infoicon">
            <RiErrorWarningLine className='RiErrorWarningLine'/>

            </div>
            <div className="charticon">
                <BiLineChart className='BiLineChart' />
            </div>

        </div>
        </div>

            ))
        }
        </>
  )
}
