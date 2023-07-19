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

  // async & await
  //1. async 안에서 await을 사용할 수 있다.
  //2. function에 async를 붙이면 리턴이 프로미스가 된다.
  //3. 리턴이 promise 라면 await을 사용할 수 있고, then을 생략할 수 있음.
  const handleClick2 = async () => {
    // axios
    //   .get(
    //     'https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json'
    //   )
    //   .then((d) => {
    //     console.log(1);
    //     axios
    //       .get(
    //         'https://raw.githubusercontent.com/yopy0817/data_example/master/hello.json'
    //       )
    //       .then((d) => {
    //         console.log(3);
    //         axios
    //           .get(
    //             'https://raw.githubusercontent.com/yopy0817/data_example/master/by.json'
    //           )
    //           .then((d) => console.log(5));
    //       });
    //   });
    // console.log(2);
    // console.log(4);
    // console.log(6);

    const pro = await axios.get(
      'https://raw.githubusercontent.com/yopy0817/data_example/master/by.json'
    );
    console.log(pro);

    const pro2 = await axios.get(
      'https://raw.githubusercontent.com/yopy0817/data_example/master/hello.json'
    );
    console.log(pro2);

    const pro3 = await axios.get(
      'https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json'
    );
    console.log(pro3);
  };

  return (
    <div>
      <h3>엑시오스 사용</h3>
      <button onClick={handleClick}>데이터가져오기(axios)</button>
      <button onClick={handleClick2}>async 확인</button>
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
