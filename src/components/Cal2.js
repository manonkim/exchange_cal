import React, { useEffect, useState } from "react";
import axios from "axios";
import TabMenu from "./TabMenu";
import "./Car2.scss";

function Cal1() {
  const [data, setData] = useState();
  const [time, setTime] = useState();
  const [num, setNum] = useState("");
  const [selected, setSelected] = useState("");

  useEffect(() => {
    axios
      .get(
        "http://api.currencylayer.com/Live?access_key=f5fcbf60c6a41cfdcbef3163bb8ed053&currencies=USD,CAD,KRW,HKD,JPY,CNY&format=1&date=YYYY-MM-DD"
      )
      .then((res) => {
        setData(res.data.quotes);
        setTime(res.data.timestamp);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //기준일
  const myDate = new Date(time * 1000);
  const month = myDate.toLocaleDateString("en-us", { month: "short" });
  const calDate = myDate.getFullYear() + "-" + month + "-" + myDate.getDate();

  //input comma
  const inputPriceFormat = (str) => {
    const comma = (str) => {
      str = String(str);
      return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
    };
    const uncomma = (str) => {
      str = String(str);
      return str.replace(/[^\d]+/g, "");
    };
    return comma(uncomma(str));
  };

  //select
  const selectList = ["USD", "CAD", "KRW", "HKD", "JPY", "CNY"];
  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  //환율
  // const select = "USD" + [selected];
  // const exchangeRate = data[`${select}`];

  return (
    <div className="container">
      <input
        type="text"
        value={num}
        placeholder="금액을 입력하세요."
        onChange={(e) => {
          setNum(inputPriceFormat(e.target.value));
        }}
      />
      <select onChange={handleSelect} value={selected}>
        {selectList.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
      {/* <h2>
        {selected} {exchangeRate}
      </h2> */}
      {/* <div>기준일 : {calDate}</div> */}
      <TabMenu select={selectList}></TabMenu>
    </div>
  );
}

export default Cal1;
