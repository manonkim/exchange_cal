import React from "react";

function Cal1() {
  // useEffect(() => {
  //   axios
  //     .get(
  //       "http://api.currencylayer.com/Live?access_key=f5fcbf60c6a41cfdcbef3163bb8ed053&currencies=USD,KRW,JPY,PHP&format=1"
  //     )
  //     .then((res) => {
  //       setData([res.data.quotes]);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // });
  // const [data, setData] = useState();

  return (
    <div>
      <div>환율계산</div>
      <div>
        송금국가 :
        <select name="choice">
          <option value="KRW">한국(KRW)</option>
          <option value="JPY">일본(JPY)</option>
          <option value="PHP">필리핀(PHP)</option>
        </select>
      </div>
      <div>수취국가 : </div>
      <div>환율 : </div>
      <div>
        송금액 : <input></input>
      </div>
      <button>Submit</button>
    </div>
  );
}

export default Cal1;
