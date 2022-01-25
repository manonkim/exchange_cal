## Exchange Rate Calculator

### `환율 정보 API`

- 환율정보는 [https://currencylayer.com/](https://currencylayer.com/) 의 무료 서비스를 이용해서 웹 서버가 시작 될 때 실시간으로 가져온다.
- JSON으로 된 환율정보 `(USD,CAD,KRW, HKD,JPY,CNY)/USD`를 받아서 사용한다.





### `구현 기능`

https://user-images.githubusercontent.com/85450378/151041555-770d6358-963d-4504-b3d3-25ab667d571d.mov


1. Input창에 금액 입력
2. `Dropdown Menu에서 기준통화(Base Currency)` 설정
3. `Tab menu에서 상대통화(Counter Currency)`를 설정
4. 기준통화/상대통화 \* 금액 = 환율


### `세부 기능`

- Input : 숫자만 입력가능 / 세자리마다 comma / 최대 8자리 입력
- DropDown Menu : 기준통화 지정 (USD,CAD,KRW, HKD,JPY,CNY)
- Tab Menu : tab foucus된 통화로 상대통화 지정
- Date : Unix timestamp > YYYY-MM-DD로 표기 / 통화변경 시 기준일 정보 동기화

