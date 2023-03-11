import React from "react";
import "./Followclub.css";
import { BiRightArrowAlt } from "react-icons/bi";
import { BiLeftArrowAlt } from "react-icons/bi";
import { useState } from "react";

export default function Followclub() {
    const [club,setClub]=useState([
        {id:1,followBorder:'follow-border',src:'Man City',classname:'Mancity-follow'},
        {id:2,followBorder:' ',src:'Man United',classname:'notFollowborder'},
        {id:3,followBorder:' ',src:'Brighton',classname:'notFollowborder'},
        {id:4,followBorder:' ',src:'Brentford',classname:'notFollowborder'},
        {id:5,followBorder:' ',src:'Lester',classname:'notFollowborder'},
        {id:6,followBorder:' ',src:'Tottenham',classname:'notFollowborder'},
        {id:7,followBorder:' ',src:'Notts forest',classname:'notFollowborder'},
        {id:8,followBorder:' ',src:'Chelsea',classname:'notFollowborder'}
    ])
  return (
    <div>
      <div className="followClub-txt">
        🎮 Follow Club
        <div>
          <BiLeftArrowAlt />
          <BiRightArrowAlt />
        </div>
      </div>
      <div className="followBox">
      {club.map(item=>(
            <div className="followclub-teams">
            <div className={`team-box ${item.followBorder}`}>
                <img src={`./img/follow/${item.src}.png`} className={`${item.classname} `} alt="" />
            </div>
          </div>
      ))}
      </div>
    </div>
  );
}
