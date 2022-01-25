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
  const number = num.replace(",", "");
  const cal = (exchangeRateTab / exchageRate) * number;
  //comma
  // const exchageCal = (parseFloat(cal.replace(/,/g, "")) * exchageRate).toFixed(
  //   2
  // );
  const exchangeCalComma = Number(cal).toLocaleString("en");

  return (
    <ul className="tabMenu">
      {selectTab.map((ele, index) => {
        return (
          <li
            key={index}
            value={ele}
            className={ele === selectedTab ? "submenu focused" : "submenu"}
            onClick={(e) => handleTab(e)}
          >
            {ele === selected ? "USD" : ele}
          </li>
        );
      })}
      <div className="wrap">
        <h2>
          {selectedTab}&nbsp;&nbsp;
          {exchangeCalComma === "NaN" ? 0 : exchangeCalComma}
        </h2>
        <div className="date">기준일 : {calDate}</div>
      </div>
    </ul>
  );
};

export default TabMenu;
