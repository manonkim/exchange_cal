import React, { useState } from "react";
import "./TabMenu.scss";

const TabMenu = ({ time, selected, exchageRate, num, data }) => {
  const [selectedTab, setSelectedTab] = useState("USD");
  const [exchangeRateTab, setExchangeRateTab] = useState(1);

  //기준일
  const myDate = new Date(time * 1000);
  const month = myDate.toLocaleDateString("en-us", { month: "short" });
  const calDate = myDate.getFullYear() + "-" + month + "-" + myDate.getDate();

  //tab
  const selectTab = ["CAD", "KRW", "HKD", "JPY", "CNY"];
  const handleTab = (e) => {
    setSelectedTab(e.target.innerHTML);
    setExchangeRateTab(data["USD" + e.target.innerHTML]);
  };

  const number = num.replaceAll(",", "");
  const cal = (exchangeRateTab / exchageRate) * number;
  const currency = cal.toFixed(2);
  const exchangeCalComma = Number(currency).toLocaleString("en");

  return (
    <ul className="tabMenu">
      {selectTab.map((ele, index) => {
        return (
          <li
            key={index}
            value={ele}
            className={
              ele === selectedTab && "USD" ? "submenu focused" : "submenu"
            }
            onClick={(e) => handleTab(e)}
          >
            {ele === selected ? "USD" : ele}
          </li>
        );
      })}
      <div className="wrap">
        <h3>
          {selectedTab}&nbsp;&nbsp;
          {exchangeCalComma === "NaN" ? 0 : exchangeCalComma}
        </h3>
        <h5>기준일 : {calDate}</h5>
      </div>
    </ul>
  );
};

export default TabMenu;
