import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  /*
  npm install axios 설치
  */

  const [data, setData] = useState({});
  const [bye, setBye] = useState([]);
  const handleClick = () => {
    //fetch의 반환 promise
    //axios의 반환 promise
    // 둘의 문법 사용방법이 같다.
    //fetch는 json형태 파일을 받아서 다시 객체로 변환하는 작업이 있었는데
    // axios는 바로 객체로 변환해서 리턴해준다. ( 작업 하나가 줄었음 )
    axios
      .get(
        'https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json'
      )
      .then((response) => setData(response.data));
  };
  //select 태그의 옵션으로 처리
  useEffect(() => {
    axios
      .get(
        'https://raw.githubusercontent.com/yopy0817/data_example/master/by.json'
      )
      .then((response) => setBye(response.data));
  }, []);
  const list = bye.map((i) => <option key={i.key}>{i.value}</option>);

  return (
    <div>
      <h3>엑시오스 사용</h3>
      <button onClick={handleClick}>데이터가져오기(axios)</button>
      <p>
        {data.userId} <br />
        {data.userPw} <br />
        {data.userName} <br />
      </p>

      <select>{list}</select>
    </div>
  );
}

export default App;
