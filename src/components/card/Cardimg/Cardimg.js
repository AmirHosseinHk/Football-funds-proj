import React from "react";
import "./Cardimg.css";
import { useState } from "react";
export default function Cardimg() {
  return (
    <div className="Cardimg">
      <div className="cardimgbox">
        <img src="./img/card/england.png" className="england" alt="" />
        <div className="qatar">
          <img src="./img/card/qatar.png" alt="" />
        </div>
        <img src="./img/card/germany.png" className="germany" alt="" />
        <div className="matchgermany-england">
          <div className="matchgermany-england-header">England vs Germany</div>
          <div className="matchgermany-england-subheader">
            Sunday, 21 January 2022
          </div>
          <div className="corno">
            <div className="day">
              <div className="daynumber">03</div>
              <div className="daytxt">Day</div>
            </div>
            <div className="dots">:</div>
            <div className="hour">
              <div className="daynumber">12</div>
              <div className="daytxt">Hours</div>
            </div>
            <div className="dots">:</div>

            <div className="minute">
            <div className="daynumber">43</div>
              <div className="daytxt">Minutes</div>
            </div>
            <div className="dots">:</div>

            <div className="second">
              <div className="daynumber">36</div>
              <div className="daytxt">Seconds</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
