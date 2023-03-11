import React from "react";
import "./StandingsTable.css";
import { FaPlus } from "react-icons/fa";
import { RiArrowDownSLine } from "react-icons/ri";
import { RiArrowDropRightLine } from "react-icons/ri";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DoDisturbOnIcon from "@mui/icons-material/DoDisturbOn";
import CancelIcon from "@mui/icons-material/Cancel";
import { useState } from "react";
import {GoPrimitiveDot} from 'react-icons/go'



export default function StandingsTable() {
  const [rowItems, setRowItems] = useState([
    {
      id: 1,
      back: "champion",
      src: "Arsenal",
      wins: 15,
      draws: 2,
      losts: 1,
      points: 47,
      lastmatch: [
        { tagname: CheckCircleIcon, klassName: "CheckCircleIcon" },
        { tagname: DoDisturbOnIcon, klassName: "DoDisturbOnIcon" },
        { tagname: CheckCircleIcon, klassName: "CheckCircleIcon" },
        { tagname: CheckCircleIcon, klassName: "CheckCircleIcon" },
        { tagname: CheckCircleIcon, klassName: "CheckCircleIcon" },
      ],
    },
    {
      id: 2,
      back: "champion",
      src: "Man City",
      wins: 12,
      draws: 3,
      losts: 3,
      points: 39,
      lastmatch: [
        { tagname: CancelIcon, klassName: "CancelIcon" },
        { tagname: CheckCircleIcon, klassName: "CheckCircleIcon" },
        { tagname: DoDisturbOnIcon, klassName: "DoDisturbOnIcon" },
        { tagname: CheckCircleIcon, klassName: "CheckCircleIcon" },
        { tagname: CancelIcon, klassName: "CancelIcon" },
      ],
    },
    {
      id: 3,
      back: "champion",
      src: "Man United",
      wins: 12,
      draws: 3,
      losts: 4,
      points: 39,
      lastmatch: [
        { tagname: DoDisturbOnIcon, klassName: "DoDisturbOnIcon" },
        { tagname: CheckCircleIcon, klassName: "CheckCircleIcon" },
        { tagname: CheckCircleIcon, klassName: "CheckCircleIcon" },
        { tagname: CheckCircleIcon, klassName: "CheckCircleIcon" },
        { tagname: CheckCircleIcon, klassName: "CheckCircleIcon" },
      ],
    },
    {
      id: 4,
      back: "champion",
      src: "Newcastle",
      wins: 10,
      draws: 8,
      losts: 1,
      points: 38,
      lastmatch: [
        { tagname: CheckCircleIcon, klassName: "CheckCircleIcon" },
        { tagname: DoDisturbOnIcon, klassName: "DoDisturbOnIcon" },
        { tagname: DoDisturbOnIcon, klassName: "DoDisturbOnIcon" },
        { tagname: CheckCircleIcon, klassName: "CheckCircleIcon" },
        { tagname: CheckCircleIcon, klassName: "CheckCircleIcon" },
      ],
    },
    {
      id: 5,
      back: "europa",
      src: "Tottenham",
      wins: 10,
      draws: 3,
      losts: 6,
      points: 33,
      lastmatch: [
        { tagname: CancelIcon, klassName: "CancelIcon" },
        { tagname: CheckCircleIcon, klassName: "CheckCircleIcon" },
        { tagname: CancelIcon, klassName: "CancelIcon" },
        { tagname: DoDisturbOnIcon, klassName: "DoDisturbOnIcon" },
        { tagname: CheckCircleIcon, klassName: "CheckCircleIcon" },
      ],
    },
    {
      id: 6,
      back: "europa",
      src: "Fulham",
      wins: 9,
      draws: 4,
      losts: 7,
      points: 31,
      lastmatch: [
        { tagname: CancelIcon, klassName: "CancelIcon" },
        { tagname: CheckCircleIcon, klassName: "CheckCircleIcon" },
        { tagname: CheckCircleIcon, klassName: "CheckCircleIcon" },
        { tagname: CheckCircleIcon, klassName: "CheckCircleIcon" },
        { tagname: CheckCircleIcon, klassName: "CheckCircleIcon" },
      ],
    }
  ]);
  return (
    <div>
      <div className="standingtxt">🏆 Standings</div>
      <div className="standingsSelect">
        <FaPlus className="FaPlus" />
        <img src="./img/football-lig/p.png" className="img" alt="" />
        <div className="ligName">Premier League</div>
        <RiArrowDownSLine />
        <div className="viewAll">View All</div>
        <RiArrowDropRightLine className="RiArrowDropRightLine" />
      </div>
      <div className="englandStanding">
        <div className="firstrow">
          <div className="clubtxt">Club</div>
          <div className="gamesres">W</div>
          <div className="gamesres">D</div>
          <div className="gamesres">L</div>
          <div className="gamesres">Point</div>
          <div className="Lastmatch">Last Match</div>
        </div>

        {rowItems.map((team) => (
          <div className={`standing-rows ${team.back}`}>
            <div className="id">{team.id}</div>
            <img
              src={`./img/englandStandings/${team.src}.png`}
              className="clubstyles"
              alt=""
            />
            <div className="clubName">{team.src}</div>
            <div className="wins">{team.wins}</div>
            <div className="draws">{team.draws}</div>
            <div className="losts">{team.losts}</div>
            <div className="pts">{team.points}</div>
            <div className="lastMatchs">
              {team.lastmatch.map((match) => (
                <>
                  <match.tagname className={`${match.klassName}`} />
                </>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="standing-guide">
        <div className="championslig"><GoPrimitiveDot className="champion-icon" /> <div className="championslig-txt">Champions League</div></div>
        <div className="europelig"><GoPrimitiveDot className="europe-icon" /><div className="europelig">Europa League</div></div>
      </div>
    </div>
  );
}
