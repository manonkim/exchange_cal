import React, { useState } from "react";
import "./TabMenu.scss";

const TabMenu = ({ select }) => {
  console.log(select);
  const [currentTab, setCurrentTab] = useState(0);
  const selectMenuHandler = (index) => {
    setCurrentTab(index);
  };
  return (
    <ul className="tabMenu">
      {select.map((ele, index) => {
        return (
          <li
            key={index}
            className={currentTab === index ? "submenu focused" : "submenu"}
            onClick={() => {
              selectMenuHandler(index);
            }}
          >
            {ele}
          </li>
        );
      })}
    </ul>
  );
};

export default TabMenu;
