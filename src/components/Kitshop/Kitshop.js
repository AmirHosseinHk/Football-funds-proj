import React from "react";
import { BiLeftArrowAlt } from "react-icons/bi";
import { BiRightArrowAlt } from "react-icons/bi";
import "./Kitshop.css";
import { useState } from "react";

export default function Kitshop() {
  const [kits, setKits] = useState([
    { id: 1, src: "Man City", txt: "Man City Away", price: "$150.45" },
    { id: 1, src: "Chelsea", txt: "Chelsea Home", price: "$150.10" },
    { id: 1, src: "Arsenal", txt: "Arsenal Away", price: "$150.45" },
    { id: 1, src: "Westham", txt: "West Ham Home", price: "$120.00" },
    { id: 1, src: "Liverpool", txt: "Liverpool Home", price: "$148.25" }
  ]);

  return (
    <div className="Kitshop">
      <div className="kitshop-txt">
        👕 Shopping{" "}
        <div>
          <BiLeftArrowAlt />
          <BiRightArrowAlt />
        </div>
      </div>
      <div className="clubkits">
        {kits.map((kit) => (
          <div className="clubkit-box">
            <div className="clubkit-imgbox">
              <img src={`./img/kit/${kit.src}.png`} alt="" />
            </div>
            <div className="clubkit-infobox">
              <div className="clubkit-infobox-txt">{kit.txt} Kit 21 / 22</div>
              <div className="clubkit-infobox-price">{kit.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
