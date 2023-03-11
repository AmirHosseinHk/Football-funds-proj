import React from "react";
import "./Livebox.css";
export default function Livebox() {
  return (
    <div className="Livebox">
      <div className="livematch">Live Match</div>
      <div className="playtime">62 : 24</div>
      <div className="flags">
        <img src="./img/card/Morocco.png" className="Morocco" alt="" />
        <div className="matchresalt">1-0</div>
        <img src="./img/card/Portugal.png" className="Morocco" alt="" />
      </div>
      <div className="stats">
        <div className="stats-txt">Shoot on Target</div>
        <div className="stats-num">
          <div className="stats-num-left">7</div>
          <div className="stats-num-right">3</div>
        </div>
        <div className="stats-avg-dad">
          <div className="stats-avg-shot-left">
            <div className="border-left">
              <div className="sub-border-stats-avg-shot-left"></div>
            </div>
          </div>
          <div className="stats-avg-shot-right">
            <div className="border-right">
              <div className="sub-border-stats-avg-shot-right"></div>
            </div>
          </div>
        </div>
        {/* section */}
        <div className="stats-txt">Shoot</div>
        <div className="stats-num">
          <div className="stats-num-left">12</div>
          <div className="stats-num-right">7</div>
        </div>
        <div className="stats-avg-dad">
          <div className="stats-avg-shot-left">
            <div className="border-left">
              <div className="sub-border-stats-avg-shoot-left"></div>
            </div>
          </div>
          <div className="stats-avg-shot-right">
            <div className="border-right">
              <div className="sub-border-stats-avg-shoot-right"></div>
            </div>
          </div>
        </div>
        {/* section */}
        <div className="stats-txt">Fouls</div>
        <div className="stats-num">
          <div className="stats-num-left">7</div>
          <div className="stats-num-right">3</div>
        </div>
        <div className="stats-avg-dad">
          <div className="stats-avg-shot-left">
            <div className="border-left">
              <div className="sub-border-stats-avg-shot-left"></div>
            </div>
          </div>
          <div className="stats-avg-shot-right">
            <div className="border-right">
              <div className="sub-border-stats-avg-shot-right"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
