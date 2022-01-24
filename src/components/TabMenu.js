import React from "react";
import "./TabMenu.scss";

const TabMenu = ({ time, selected, exchangeCalComma }) => {
  // const [currentTab, setCurrentTab] = useState(0);
  // const selectMenuHandler = (index) => {
  //   setCurrentTab(index);
  // };

  //기준일
  const myDate = new Date(time * 1000);
  const month = myDate.toLocaleDateString("en-us", { month: "short" });
  const calDate = myDate.getFullYear() + "-" + month + "-" + myDate.getDate();

  const selectTab = ["CAD", "KRW", "HKD", "JPY", "CNY"];
  // const exchageRateFix = exchageRate.toFixed(2);

  return (
    <ul className="tabMenu">
      {selectTab.map((ele, index) => {
        return (
          <li
            key={index}
            className={ele === selected ? "submenu focused" : "submenu"}
            // onClick={() => {
            //   selectMenuHandler(index);
            // }}
          >
            {ele === selected ? "USD" : ele}
          </li>
        );
      })}
      <div className="wrap">
        <h2>
          {selected}&nbsp;&nbsp;
          {exchangeCalComma}
        </h2>
        <div className="date">기준일 : {calDate}</div>
      </div>
    </ul>
  );
};

export default TabMenu;
