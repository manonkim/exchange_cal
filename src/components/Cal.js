import React, { useEffect, useState } from "react";
import axios from "axios";
import TabMenu from "./TabMenu";
import "./Car.scss";

function Cal1() {
  const [data, setData] = useState();
  const [time, setTime] = useState();
  const [num, setNum] = useState("");
  const [selected, setSelected] = useState("USD");
  const [exchageRate, setExchageRate] = useState(1);

  const API_KEY = "f5fcbf60c6a41cfdcbef3163bb8ed053";
  const Currencies = "USD,CAD,KRW,HKD,JPY,CNY";
  useEffect(() => {
    axios
      .get(
        `http://api.currencylayer.com/Live?access_key=${API_KEY}&currencies=${Currencies}&format=1`
      )
      .then((res) => {
        setData(res.data.quotes);
        setTime(res.data.timestamp);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
    setExchageRate(data["USD" + e.target.value]);
  };

  return (
    <div className="container">
      <input
        type="text"
        maxLength="10"
        value={num}
        placeholder="USD"
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

      <TabMenu
        time={time}
        selected={selected}
        exchageRate={exchageRate}
        num={num}
        data={data}
      />
    </div>
  );
}

export default Cal1;
