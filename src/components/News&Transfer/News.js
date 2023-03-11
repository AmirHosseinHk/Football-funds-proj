import React from "react";
import "./news.css";
import { useState } from "react";


export default function News() {
    const [news,setNews]=useState([
        {id:1,src:'Arsenal',Headtxt:'Signs of Arsenal getting stronger in the Premier League',txtInfo:'The victory over Wolves provided a comfortable distance for Arsenal at the top of the Premier League standings'},
        {id:1,src:'Man City',Headtxt:'Erling Haaland Leads Premier League Top Scorers 2022',txtInfo:'Until the competition break in facing the 2022 World Cup in Qatar, Haaland is still the top scorer or top scorer for the 2022/2023 Premier League temporarily.'},
        {id:1,src:'Chelsea',Headtxt:'Chelsea were humiliated 1-4 at Brighton headquarters',txtInfo:'Chelsea were humiliated by losing with a big score of 1-4 when they visited Brighton headquarters in Matchday 14 of the English Premier League at the Amex Stadium on Saturday night'},
        {id:1,src:'Manchester United',Headtxt:'Garnacho led Manchester United to beat Fulham',txtInfo:'Midfielder Christian Eriksen not only put United ahead in the 14th minute but also scored his first goal for United since joining the Red Devils last summer.'}
    ])
  return (
    <div>
      <div>
        <div className="newsHeader">📰 All News and Transfer Today</div>
        <div className="newsMenu">
            <div className="News-part active-news">All News</div>
            <div className="News-part">Hot News</div>
            <div className="News-part">Transfer</div>
        </div>
        <div className="news-tabselect">
            <div className="news-tabselect-allnews"></div>
        </div>
      </div>
      <div className="newsBox">
        {news.map(item=>(
            <div className="newsBoxItem">
            <img src={`./img/news/${item.src}.png`} alt="" />
            <div className="newsboxLig">PREMIER LEAGUE</div>
            <div className="newsbox-txt">
                <div className="newsbox-txt-head">{item.Headtxt}</div>
                <div className="newbox-txt-info">{item.txtInfo}</div>
            </div>
        </div>
        ))}
        
      </div>
    </div>
  );
}
