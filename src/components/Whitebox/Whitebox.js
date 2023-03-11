import React from 'react'
import './Whitebox.css'
import LatestMatchTable from '../latest-match-table/LatestMatchTable';
import StandingsTable from '../Standingstable/StandingsTable';
import Followclub from '../Followclub/Followclub';
import Kitshop from '../Kitshop/Kitshop';
import Platformbox from '../PlatformIntroduce/Platformbox';
import News from '../News&Transfer/News';




export default function Whitebox() {
  return (
    <div className='Whitebox'>
        <div className="footballmatch-txt">⚽ Football Match</div>
        <div className="tablesHeaders">
            <div className="latest-match">Latest Match</div>
            <div className="deactive-matche">Coming Match</div>
            <div className="deactive-matche">Pre-season</div>
            <div className="deactive-matche">Live Games</div>
            <div className="deactive-matche">Fun Football</div>
        </div>
        <div className="table-select-border">
            <div className="table-select-sub-border"></div>
        </div>
        <LatestMatchTable />
        <div className="seprateborder"></div>
        <StandingsTable />
        <div className="seprateborder"></div>
        <Followclub />
        <div className="seprateborder"></div>
        <Kitshop />
        <Platformbox />
        <News />
    </div>
  )
}
