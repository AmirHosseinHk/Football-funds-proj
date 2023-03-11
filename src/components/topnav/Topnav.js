import React from "react";
import "./Topnav.css";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { RiShoppingBasket2Line } from "react-icons/ri";
import { VscBellDot } from "react-icons/vsc";
import { MdOutlineLightMode } from "react-icons/md";




export default function Topnav() {
  const [inputValue, setInputValue] = useState("");
  const [searchicon, setSearchicon] = useState(true);
  const [icons, setIcons] = useState([
    { id: 1, tagname: RiShoppingBasket2Line },
    { id: 2, tagname: VscBellDot },
    { id: 3, tagname: MdOutlineLightMode },
  ]);
  function resolveAfter2Seconds(e) {
    setInputValue(e.target.value);
  }
  function search() {
    if (inputValue !== "") {
      setSearchicon(false);
    }
  }

  function searchiconHndler(e) {
    setInputValue(e.target.value);

    search();
  }

  return (
    <div className="topnav">
      <div>
        <input
          type="text"
          value={inputValue}
          placeholder="Type to search..."
          className="inpgroup"
          onChange={(e) => searchiconHndler(e)}
        />
        {searchicon && <SearchIcon fontSize="small" className="SearchIcon" />}
      </div>
      <button className="Premium">Go Premium</button>
      <div className="iconsbox">
        {icons.map((item) => (
          <item.tagname key={item.id} className="icons" />
        ))}
      </div>
      <img src="./img/profile/pro.jfif" alt="" className="profile" />
    </div>
  );
}
